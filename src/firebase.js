// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// Your web app's Firebase configuration put in env file before deploy 
const firebaseConfig = {
  apiKey: "AIzaSyANH89gBSSDGZ0hRt_AhMJ18O9kd5nTft0",
  authDomain: "travel-nurse-chat-app.firebaseapp.com",
  projectId: "travel-nurse-chat-app",
  storageBucket: "travel-nurse-chat-app.appspot.com",
  messagingSenderId: "440006214470",
  appId: "1:440006214470:web:b66b1119283b4f121c5b47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)