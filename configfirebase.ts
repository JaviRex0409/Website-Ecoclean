// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu05fqRVRfg8Y663Cw_9-epCFsSdfyKYE",
  authDomain: "website-ecocleanservice.firebaseapp.com",
  projectId: "website-ecocleanservice",
  storageBucket: "website-ecocleanservice.firebasestorage.app",
  messagingSenderId: "599395638987",
  appId: "1:599395638987:web:c8c2905ff2f4ff2b4f854e",
  measurementId: "G-ET32R9C6CQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);