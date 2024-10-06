// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAwbYa2f3vaehbisrGajrcSgJkyLq3S8VI",
    authDomain: "volutvault.firebaseapp.com",
    projectId: "volutvault",
    storageBucket: "volutvault.appspot.com",
    messagingSenderId: "453520447880",
    appId: "1:453520447880:web:075efae222850928e6023d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the authentication object
export const auth = getAuth(app);
