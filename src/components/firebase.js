// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


//Akhil firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyAQ_0hc0yUVszfed_tp0lXN-tPj_Cdc0SE",
//     authDomain: "otp-login-b8ec1.firebaseapp.com",
//     projectId: "otp-login-b8ec1",
//     storageBucket: "otp-login-b8ec1.appspot.com",
//     messagingSenderId: "538380042630",
//     appId: "1:538380042630:web:946b4e8668a232ec786c07"
//   };

//Ruthik Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyCY64miMLJIwfBUa1EMLwocffdCSG_yVlc",
//   authDomain: "realityai.firebaseapp.com",
//   projectId: "realityai",
//   storageBucket: "realityai.appspot.com",
//   messagingSenderId: "718981539558",
//   appId: "1:718981539558:web:85f6c63455c732b1edfd27",
//   measurementId: "G-09VJERCMY0"
// };

//AKhil2
const firebaseConfig = {
  apiKey: "AIzaSyDf2IsdFDD3QPJ7msPHJZZLT9tswvrlMas",
  authDomain: "testin-c8189.firebaseapp.com",
  projectId: "testin-c8189",
  storageBucket: "testin-c8189.appspot.com",
  messagingSenderId: "285502611288",
  appId: "1:285502611288:web:a76f708299110e21510f2d",
  measurementId: "G-4K93Y77LZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
