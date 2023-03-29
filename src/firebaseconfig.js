// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgsc_CzqRMlIFfmxANo_jzKZYGJoJnCjE",
    authDomain: "dialisa-ca357.firebaseapp.com",
    projectId: "dialisa-ca357",
    storageBucket: "dialisa-ca357.appspot.com",
    messagingSenderId: "430319232444",
    appId: "1:430319232444:web:bbf7be385ca46dd23db7b9",
    measurementId: "G-NQV6HFW3TD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);