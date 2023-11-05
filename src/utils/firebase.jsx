// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0_uq9E_79k09QUDb3m6aP80aAwP30-CU",
  authDomain: "netflixgpt-1aa71.firebaseapp.com",
  projectId: "netflixgpt-1aa71",
  storageBucket: "netflixgpt-1aa71.appspot.com",
  messagingSenderId: "7722868050",
  appId: "1:7722868050:web:e6cf32ccc69582d0576e8b",
  measurementId: "G-W1G7BCDN93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)