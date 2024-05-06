// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQaieOxvmIqGsQh5GkAiju5-Fs-NhWEcE",
  authDomain: "react-dragon-news-auth-4a67e.firebaseapp.com",
  projectId: "react-dragon-news-auth-4a67e",
  storageBucket: "react-dragon-news-auth-4a67e.appspot.com",
  messagingSenderId: "588929673867",
  appId: "1:588929673867:web:3cb10927c17396f4d5028e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;