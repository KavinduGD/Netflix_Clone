import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfUrdXUEvtoZYU2iiRzUynJJzDqyhk1-4",
  authDomain: "netflix-a68d3.firebaseapp.com",
  projectId: "netflix-a68d3",
  storageBucket: "netflix-a68d3.appspot.com",
  messagingSenderId: "525648068324",
  appId: "1:525648068324:web:d145082f79c4d058a4f6f1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

export default db;
