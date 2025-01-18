import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCkG_JDIImUL8XqItLREODGNdJKQ_O-v1g",
    authDomain: "tana-craft-9adcf.firebaseapp.com",
    projectId: "tana-craft-9adcf",
    storageBucket: "tana-craft-9adcf.firebasestorage.app",
    messagingSenderId: "62209140137",
    appId: "1:62209140137:web:42340236ea8f13623090b8",
    measurementId: "G-LES2QY1FD0"

};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export { storage, auth, ref, getDownloadURL };
