import { buffer } from "micro";
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
//Secure a connection to FIREBASE from the backend;
const serviceAccount = require("../../permissions.json");
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert({
        type: "service_account",
        project_id: "clone-f49bf",
        private_key_id: "02f9bbfca5cfb8fa4f72253645e56af346854d90",
        private_key:
          "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC4R49kDrGy9EtI\nmUiob+FwvIPgb0Mx828N/aeFFesfGiQ5q75ot7J4UIjSR5TAz58XgAAJMC8gQSvB\nfLvnWG/GtB4iyVO2b+Z+z2GGSXUOADcoI3RI526S2FaZrlpfsxwYAUNZ7rVXXjg6\nKmGNxQ8lMRPR7cNbR1B6X5HWPassn7pmMZbKqnUVnRMdbs3THTIEgYO0xMk6nJQf\n33izZmiQYzJuGWP93OW2S2XA7UNOfiE9VVAeDqVxis1oDURzkikyv1wTckt1AUhq\nMMO2TSbhtAwBekxUNWds4ySDfNYfLHYRIvu4UHuHdGOUL6Kn3wHmUjQ0Jc6pkmlq\nbuknyOJbAgMBAAECggEAC/Uzds4FSz7S9nO2j/ItR4ApcTzcYrdl3hs27Z84fJzY\n+5e2FAbSNpXIlcHordegfok4d2ArDrAWmMhGoS0kmQOYblrGFdvjscLfPzQxEPwu\nmBTaN4jdAfu2fY50ytT33mQ77Jqy0GfgGit53RXhH7a0OeEbK3x7L8BX2aEdecMK\nEVes6tSFijFeGmeS/z/pe24ByS92v+AXxsG2tzK5KuI3YwPGCN1mitUJwJsRXW9K\nyI4dTBQmokSjxTFlRs4as/Lx3yS5UAa0LXmCG7kXD3JfppFRBdeJc1P/LznXBDre\ndgmTo8NY9tIDMdqeWkUJck7mndWVTnI5fyEkyNqRoQKBgQDmYJTdn1/5K3mIv/Lo\n45FVio/f9k6JKDzg+HtnliyTapYDr2B0nlLw1nn+dF7BksRQqnc+VguvwpnMhFpK\nLa8U6b3eQQFnt45vnnd1puQw4kpgjWokagLyqmAQlbAXjIi55QUiXeJLImt8DpsF\ntiebm7pDHXja7i6TkSm6GPue4wKBgQDMxnXcNrjdMOBh4tIiFkJBfL5mB6rJXKWh\nUwtynpBf6BNv2EGuSAP+Fy9RDCLV0a2ujR1dsuU4KAW1iD/FfN1Uc9j4I1nJVA/U\naSOji/yjdGP8OM+HRzqQrfUudm03Z7ShB2TSP+JTlH3tbd+6JZAq+d4oGuCc9yye\nGsRJOUzQKQKBgQChg5b65fDIZVV4rXJlGp7bBSEnmKyo9l/wLeV+00d/Ntvjy4Hp\nYNKvbP7sibOhLP+buleNiY/58ooXW7ddiDfWhqWJ+7M7fvJKiSQhhRc4un4AwURo\nMTbN4Osm1Xs2l12ITutRk9bCbGhE+oxu7a1JKF3nDfOcMh7PcJd7lGZclwKBgA0o\nV1xd+8TiphhEDcJ48arpjAZcScIEfPP/tQWZYKd47v7Jw3aiU/dYoAayI+7fOSy1\nDoT9wLK6B5vhdE+JNWN+yhsvkk5YY2f/lXWlwgbyrJYBRHxpvD6dntpsa5oaxMVw\nBy9nQXCjYvAFllGMplXMllS3XWVYkHpcN+6IiwH5AoGBANn90bv8CDR/WPZrtaNK\nxbK3AOnQWIsdszLtEfoDIelt/bzkWynsHdpLgzLbsQzBUs77de4IT98FF2gmPJSN\nYsPnkEQho8i77kBuPZuft+ifsR7YWWlj3kjcO/rveCLc1hkb3ZZ1GQgqNI3S/J/A\npjo2aVY+bItX9tA/5nEoKUKG\n-----END PRIVATE KEY-----\n",
        client_email:
          "firebase-adminsdk-7fsnz@clone-f49bf.iam.gserviceaccount.com",
        client_id: "114245808156384866425",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url:
          "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url:
          "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7fsnz%40clone-f49bf.iam.gserviceaccount.com",
      }),
      databaseURL: "https://clone-f49bf-default-rtdb.firebaseio.com",
    })
  : admin.app();
//Establish connection to Stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNNING_SECRET;
const fullfillOrder = async (session) => {
  console.log("fullfilling order", session);
  const createNewDocument = functions.https.onRequest(
    async (request, response) => {
      const result = await app
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
        });

      response.status(200).send(result);
      // .then(() => {
      //   console.log(`SUCCESS: Order ${session.id} had been added to the DB`);
      // });
    }
  );
};
export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
export default async (req, res) => {
  if (req.method === "POST") {
    console.log("inside post");
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];
    let event;
    //Verify that the EVENT posted came from stripe
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log("ERROR", err.message);
      return res.status(400).send(`Webhook error : ${err.message}`);
    }
    console.log("from stripe only");
    //Handle the checkout.session.completed event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      console.log("full filling orders");
      //Fullfill the order...
      return fullfillOrder(session)
        .then(() => res.status(200))
        .catch((err) => res.status(400).send(`Webhook Error : ${err.message}`));
    }
  }
};
