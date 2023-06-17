// Import the functions you need from the SDKs you need

import { getApps, initializeApp, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCXX_M0c3RFt_e0ZisFNvjhRvEfFVty4c",
  authDomain: "clone-f49bf.firebaseapp.com",
  projectId: "clone-f49bf",
  storageBucket: "clone-f49bf.appspot.com",
  messagingSenderId: "211993129835",
  appId: "1:211993129835:web:d3ac1dbdd3378a31d0522e",
  measurementId: "G-25YJ9GGPTD",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
