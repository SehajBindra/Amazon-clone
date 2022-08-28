import { buffer } from "micro";
import * as admin from "firebase-admin";

const serviceAccount = require("../../Permissions.json");
// so this code is for initializing our app only once not again and again....
const app = !admin.apps.length
  ? admin.initializeApp({
      credentials: admin.credential.cert(serviceAccount),
    })
  : admin.app();
export default async (req, res) => {
  if (req.method === "POST") {
  }
};
