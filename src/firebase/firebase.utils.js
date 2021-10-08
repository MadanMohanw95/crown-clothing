import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCN5cqzIrgoe-pemAJuySzWAZPWHl-bmak',
  authDomain: 'crown-db-348a0.firebaseapp.com',
  projectId: 'crown-db-348a0',
  storageBucket: 'crown-db-348a0.appspot.com',
  messagingSenderId: '105399131196',
  appId: '1:105399131196:web:87b9044c0e37b3201e7739',
  measurementId: 'G-PNG84FF4ZC',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.log('Error while creating user', err.message);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
