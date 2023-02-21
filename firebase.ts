import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyn5hTdchAamMYHztm2r7o6YyEhitoBSE",
  authDomain: "chatgpt-816cf.firebaseapp.com",
  projectId: "chatgpt-816cf",
  storageBucket: "chatgpt-816cf.appspot.com",
  messagingSenderId: "1039062840335",
  appId: "1:1039062840335:web:970a46c823c864d4381f7a",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
