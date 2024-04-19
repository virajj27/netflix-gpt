// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6l0QcQZ0K81Uk_rA-Z2Au_v1IRcoOYHs",
  authDomain: "netflixgpt-93bf6.firebaseapp.com",
  projectId: "netflixgpt-93bf6",
  storageBucket: "netflixgpt-93bf6.appspot.com",
  messagingSenderId: "1057533247458",
  appId: "1:1057533247458:web:41d0c1e8a9085288a803bb",
  measurementId: "G-45Q6XZ7FMK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
