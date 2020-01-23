import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA3-SC_uVXp1JAG3Msn-emb7GUkubh-kSM",
    authDomain: "crwn-db-cd09a.firebaseapp.com",
    databaseURL: "https://crwn-db-cd09a.firebaseio.com",
    projectId: "crwn-db-cd09a",
    storageBucket: "crwn-db-cd09a.appspot.com",
    messagingSenderId: "891269009320",
    appId: "1:891269009320:web:f451968806716728d6d79d",
    measurementId: "G-8L2LEGN8KK"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;