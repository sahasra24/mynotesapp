import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDewwTqR5fXjBSGeGN2g5YNAGVXKGusA2I",
  authDomain: "mynotes-4a080.firebaseapp.com",
  projectId: "mynotes-4a080",
  storageBucket: "mynotes-4a080.appspot.com",
  messagingSenderId: "86819207647",
  appId: "1:86819207647:web:180ae2ccb21d7001a32c6a",
  measurementId: "G-8Z1BCBQ0J9"
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };