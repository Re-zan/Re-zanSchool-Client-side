// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_apiKey);
const firebaseConfig = {
  apiKey: "AIzaSyAMl4psbtwrjWgkHrrVq9LziAj9K3e0n0A",
  authDomain: "re-zanschool.firebaseapp.com",
  projectId: "re-zanschool",
  storageBucket: "re-zanschool.appspot.com",
  messagingSenderId: "892361239898",
  appId: "1:892361239898:web:9ceeb64fff1a9951ef1763",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
