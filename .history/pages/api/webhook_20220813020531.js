import { buffer } from "micro";
import * as admin from "firebase-admin";

// Secure a connection to firebase from Backend
const serviceAccount = require("../../permissions.json");
// so this code is for initializing our app only once not again and again....
const app = !admin.apps.length
  ? admin.initializeApp({
      credentials: admin.credential.cert(serviceAccount),
      databaseURL: "https://clone-f49bf-default-rtdb.firebaseio.com",
    })
  : admin.app();

//   Establishing connection to Stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfilOrder = async (session) => {
  console.log("fulfiling order...,", session);
  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`success: order ${session.id} has been added to the db`);
    });
};
export default async (req, res) => {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];
    var event;

    // verify that the event posted came from the Stripe
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log("Error", err.message);
      return res.status(400).send(`Webhookerror : ${err.message}`);
    }
  }

  //   handle the Special checkout Session...completed Event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    // fulfil the orderr....

    return fulfilOrder(session)
      .then(() => res.status(200))
      .catch((err) => res.status(400).send(`webhook error ${err.message}`));
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
