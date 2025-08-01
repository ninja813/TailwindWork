// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI8LSkscNXUdsnixnFbx3IWMK8aGmA4ZY",
  authDomain: "webflix-fa327.firebaseapp.com",
  projectId: "webflix-fa327",
  storageBucket: "webflix-fa327.appspot.com",
  messagingSenderId: "1045460724218",
  appId: "1:1045460724218:web:77be8bbeb8405051df5c43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)