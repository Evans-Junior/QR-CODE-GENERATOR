import firebase from "firebase";
import * as fire from "firebase";
import 'firebaseui/dist/firebaseui.css';

  const firebaseConfig = {
    apiKey: "AIzaSyDDbxCKblvpDZVXFzrXJf8zo3fTBoyDNQE",
    authDomain: "report-book-6e9c6.firebaseapp.com",
    databaseURL: "https://report-book-6e9c6-default-rtdb.firebaseio.com",
    projectId: "report-book-6e9c6",
    storageBucket: "report-book-6e9c6.appspot.com",
    messagingSenderId: "293055626370",
    appId: "1:293055626370:web:82412fb71826e961f1c89b"
  };



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();



export {db,auth,provider};
