// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIU_rkNLbAbvx-qB9JeWQZTFBaYKZkC5E",
  authDomain: "quanlychitieu1-79934.firebaseapp.com",
  projectId: "quanlychitieu1-79934",
  storageBucket: "quanlychitieu1-79934.appspot.com",
  messagingSenderId: "806032965164",
  appId: "1:806032965164:web:06ac5e858269c95496db89",
  measurementId: "G-YFDPZE850W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);