import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCE6tMcYPkEWGaswkTZMj7Pv5JoMLYSMpA",
  authDomain: "mynetflixclone-52906.firebaseapp.com",
  projectId: "mynetflixclone-52906",
  storageBucket: "mynetflixclone-52906.appspot.com",
  messagingSenderId: "1085947560736",
  appId: "1:1085947560736:web:884e2ced49ea0ec9edcd45",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

export default db;
