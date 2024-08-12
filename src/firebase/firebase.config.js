// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIm6bbCztl5lB4OOlyw69Fk9_RnKuP2Uc",
    authDomain: "tourism-assignment-a10.firebaseapp.com",
    projectId: "tourism-assignment-a10",
    storageBucket: "tourism-assignment-a10.appspot.com",
    messagingSenderId: "207190875644",
    appId: "1:207190875644:web:d11a6cd2ebee5b3f0d2679"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);