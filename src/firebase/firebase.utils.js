import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBAZMwpbiOCRslx-NtfLfrxGyZmu__Tcg4",
    authDomain: "crown-db-63276.firebaseapp.com",
    projectId: "crown-db-63276",
    storageBucket: "crown-db-63276.appspot.com",
    messagingSenderId: "33337373444",
    appId: "1:33337373444:web:fed21734c6ed4c17499651"
  };

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

