// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDv3ULY7Xf5cJEm2gBZflhNY8RwdmI9-3o",
    authDomain: "sachin-blog.firebaseapp.com",
    projectId: "sachin-blog",
    storageBucket: "sachin-blog.appspot.com",
    messagingSenderId: "123263359749",
    appId: "1:123263359749:web:ad59c1c9d21e4c1f6af56c",
    measurementId: "G-NSTWXEJZ3T"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
