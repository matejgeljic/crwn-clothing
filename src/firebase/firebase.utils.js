import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAmkT2JMsOJamdo1gjg2Kh8iltAM1NCz5I",
    authDomain: "crwn-db-1e0e4.firebaseapp.com",
    databaseURL: "https://crwn-db-1e0e4.firebaseio.com",
    projectId: "crwn-db-1e0e4",
    storageBucket: "crwn-db-1e0e4.appspot.com",
    messagingSenderId: "268992037499",
    appId: "1:268992037499:web:d57c0f181bcd883c"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      
      try {
          await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
          });
      } catch (error) {
          console.log(error.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;