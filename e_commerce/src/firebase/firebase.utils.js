import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore';

const config =  {
  apiKey: "AIzaSyCOupbStBsQVXYb1rTwG9BuDoRKbZP6znI",
  authDomain: "crwm-db.firebaseapp.com",
  databaseURL: "https://crwm-db.firebaseio.com",
  projectId: "crwm-db",
  storageBucket: "",
  messagingSenderId: "1026162497843",
  appId: "1:1026162497843:web:7d086c40d42c1cedc94646"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;