import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCOKDk4oByoGXeSuPFsP9FCcoTynV3uRag",
  authDomain: "stackoverflow-clone-b71bd.firebaseapp.com",
  projectId: "stackoverflow-clone-b71bd",
  storageBucket: "stackoverflow-clone-b71bd.appspot.com",
  messagingSenderId: "401773641644",
  appId: "1:401773641644:web:e6760818e4310309044409",
  measurementId: "G-SW92WBERKB"
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
// export default db;