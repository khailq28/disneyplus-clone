import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions

const firebaseConfig = {
    apiKey: "AIzaSyB-_HbDA2ZPgOIG8MYj0dc1rZS-UwmuxpE",
    authDomain: "disneyplus-clone-c2bd6.firebaseapp.com",
    projectId: "disneyplus-clone-c2bd6",
    storageBucket: "disneyplus-clone-c2bd6.appspot.com",
    messagingSenderId: "341528748253",
    appId: "1:341528748253:web:f9421836c6c773f7e3fb34",
    measurementId: "G-ZPGW6KFV7B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;