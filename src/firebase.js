import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPOfHEd2DQQ34-l-NGTORjOxz00lGYZz0",
  authDomain: "clone-69218.firebaseapp.com",
  projectId: "clone-69218",
  storageBucket: "clone-69218.appspot.com",
  messagingSenderId: "954549908251",
  appId: "1:954549908251:web:c0d806b822cbf58f19d9be",
  measurementId: "G-RQ48LR0YWW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
