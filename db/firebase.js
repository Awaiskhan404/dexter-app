import { firebase } from "@firebase/app";
import { initializeApp } from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQ6fbKOoCbDxWktvLTI1PxMJpHZ6BmJNo",
  authDomain: "dexterdexterdexter-40bf2.firebaseapp.com",
  projectId: "dexterdexterdexter-40bf2",
  storageBucket: "dexterdexterdexter-40bf2.appspot.com",
  messagingSenderId: "157495342721",
  appId: "1:157495342721:web:10b678e583f54abccf3f80",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
