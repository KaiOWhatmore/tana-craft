// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCkG_JDIImUL8XqItLREODGNdJKQ_O-v1g",
    authDomain: "tana-craft-9adcf.firebaseapp.com",
    projectId: "tana-craft-9adcf",
    storageBucket: "tana-craft-9adcf.firebasestorage.app",
    messagingSenderId: "62209140137",
    appId: "1:62209140137:web:42340236ea8f13623090b8",
    measurementId: "G-LES2QY1FD0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);