// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcfZbTOZKe5qXO7xSUhrxuwXTj62wRhpA",
  authDomain: "argon-take-home.firebaseapp.com",
  projectId: "argon-take-home",
  storageBucket: "argon-take-home.appspot.com",
  messagingSenderId: "435556642722",
  appId: "1:435556642722:web:781408029eae6f538d4cfb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
