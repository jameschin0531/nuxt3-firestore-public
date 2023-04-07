import { initializeApp } from "firebase/app";
import {
  getAuth,
} from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {

  const firebaseConfig = {
    apiKey: "AIzaSyDG3fdDd2CX47mB3CjIAbMOI44vr-fhJ7Q",
    authDomain: "project-28ece.firebaseapp.com",
    databaseURL: "https://project-28ece.firebaseio.com",
    projectId: "project-28ece",
    storageBucket: "project-28ece.appspot.com",
    messagingSenderId: "732350611470",
    appId: "1:732350611470:web:2a5590634e14ef3ba6fc5f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  initUser();

  const auth = getAuth();

  nuxtApp.vueApp.provide('auth', auth);
  nuxtApp.provide('auth', auth);

});