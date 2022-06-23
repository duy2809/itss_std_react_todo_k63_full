import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBzMVolHVXS9j4ecPlQTdCWTaP7A8uWhvY",
  authDomain: "itss-k63.firebaseapp.com",
  projectId: "itss-k63",
  storageBucket: "itss-k63.appspot.com",
  messagingSenderId: "497670202578",
  appId: "1:497670202578:web:2b7a5dd5b680d04bedb90b"
};

firebase.initializeApp(firebaseConfig);