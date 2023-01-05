// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxMqOIGHfZh66QYeJbJLJ9ZdaP-7G8Flk",
  authDomain: "house-marketplace-app-15dae.firebaseapp.com",
  projectId: "house-marketplace-app-15dae",
  storageBucket: "house-marketplace-app-15dae.appspot.com",
  messagingSenderId: "971659142957",
  appId: "1:971659142957:web:f6413aa465dcf4dd5d15a4"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();