// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeOSSUIg8MR6eIowpCxwyOSWnBkMmx7Wk",
  authDomain: "insta-c-d3ff4.firebaseapp.com",
  projectId: "insta-c-d3ff4",
  storageBucket: "insta-c-d3ff4.appspot.com",
  messagingSenderId: "1093912104111",
  appId: "1:1093912104111:web:519ec253ebf09a8958d85a"
};

// Initialize Firebase
const app = !getApps().length ?  initializeApp(firebaseConfig) : getApp();
const db= getFirestore(); 
const storage = getStorage();

export {app, db, storage };