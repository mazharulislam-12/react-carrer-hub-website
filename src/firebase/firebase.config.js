// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOhIZLytRCLZMVWd0wyzGFUO1TsLsOwI0",
  authDomain: "react-dragon-news-auth-f7af6.firebaseapp.com",
  projectId: "react-dragon-news-auth-f7af6",
  storageBucket: "react-dragon-news-auth-f7af6.appspot.com",
  messagingSenderId: "1022532494598",
  appId: "1:1022532494598:web:668767e2a4e08e7478aa87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;