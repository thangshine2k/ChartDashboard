// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF_-Odav6cFYyIIaA_4pz_KBiWnVbnbXU",
  authDomain: "shopify-d022f.firebaseapp.com",
  projectId: "shopify-d022f",
  storageBucket: "shopify-d022f.appspot.com",
  messagingSenderId: "706497576267",
  appId: "1:706497576267:web:0ad449070d7425c2537cce",
  measurementId: "G-B6HYM2RLHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, auth, analytics };
