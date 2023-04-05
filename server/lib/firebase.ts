import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//your firebase configuration goes here
//https://firebase.google.com/docs/web/learn-more?authuser=0&hl=en#modular-version

var firebaseConfig = {
  apiKey: "AIzaSyDG3fdDd2CX47mB3CjIAbMOI44vr-fhJ7Q",
  authDomain: "project-28ece.firebaseapp.com",
  databaseURL: "https://project-28ece.firebaseio.com",
  projectId: "project-28ece",
  storageBucket: "project-28ece.appspot.com",
  messagingSenderId: "732350611470",
  appId: "1:732350611470:web:2a5590634e14ef3ba6fc5f"
};

export const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(firebaseApp);



