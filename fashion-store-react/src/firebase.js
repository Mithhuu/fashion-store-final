// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjCJ-ENf2JuLv9e3UuoBvPUQNukpL-1zI",
  authDomain: "fashion-store-react-757be.firebaseapp.com",
  projectId: "fashion-store-react-757be",
  storageBucket: "fashion-store-react-757be.firebasestorage.app",
  messagingSenderId: "622316893895",
  appId: "1:622316893895:web:ecb8eb7ec373f5d5c6f0e2",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);