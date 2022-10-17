import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBO9A5acLEre3lehLza8Kv0kYp0ZXXJWCA",
  authDomain: "nn-angular-922b9.firebaseapp.com",
  databaseURL: "https://nn-angular-922b9.firebaseio.com",
  projectId: "nn-angular-922b9",
  storageBucket: "nn-angular-922b9.appspot.com",
  messagingSenderId: "691292452513",
  appId: "1:691292452513:web:65eba4c776073efe24a2e0",
  measurementId: "G-GVQG9F8G9M",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
