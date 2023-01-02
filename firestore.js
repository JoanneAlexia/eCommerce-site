// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6ZMhut3E97fOwQBLoIjC3SBIfjsEAudE",
  authDomain: "cocktail-blasts.firebaseapp.com",
  projectId: "cocktail-blasts",
  storageBucket: "cocktail-blasts.appspot.com",
  messagingSenderId: "386954226192",
  appId: "1:386954226192:web:16a4b65393e3fb1d587895",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app);
