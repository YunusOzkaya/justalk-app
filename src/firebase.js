// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyDG38HjBfM211Ju609St0j2Mx3STx1Jusk",
  authDomain:"justalk-3361e.firebaseapp.com",
  projectId:"justalk-3361e",
  storageBucket:"justalk-3361e.appspot.com",
  messagingSenderId:"322340874550",
  appId:"1:322340874550:web:03f3f528de2018ed09ab97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)