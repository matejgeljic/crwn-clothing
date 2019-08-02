import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAmkT2JMsOJamdo1gjg2Kh8iltAM1NCz5I",
    authDomain: "crwn-db-1e0e4.firebaseapp.com",
    databaseURL: "https://crwn-db-1e0e4.firebaseio.com",
    projectId: "crwn-db-1e0e4",
    storageBucket: "",
    messagingSenderId: "268992037499",
    appId: "1:268992037499:web:d57c0f181bcd883c"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;