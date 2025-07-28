// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNyfXS47sSn8lsGTlws83Ak3FcZeQmqMk",
  authDomain: "theinvincibles-23dd5.firebaseapp.com",
  projectId: "theinvincibles-23dd5",
  storageBucket: "theinvincibles-23dd5.firebasestorage.app",
  messagingSenderId: "782106130271",
  appId: "1:782106130271:web:ebd226f8dc592969eae8ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword };