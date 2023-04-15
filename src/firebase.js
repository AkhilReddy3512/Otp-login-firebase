// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQ_0hc0yUVszfed_tp0lXN-tPj_Cdc0SE",
    authDomain: "otp-login-b8ec1.firebaseapp.com",
    projectId: "otp-login-b8ec1",
    storageBucket: "otp-login-b8ec1.appspot.com",
    messagingSenderId: "538380042630",
    appId: "1:538380042630:web:946b4e8668a232ec786c07"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
