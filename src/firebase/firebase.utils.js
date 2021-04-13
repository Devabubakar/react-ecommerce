import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
  apiKey: 'AIzaSyA4UgZTn1jRuVY4BzgQSs8_88Vc3JjrXRg',
  authDomain: 'react-ecommerce-9b741.firebaseapp.com',
  projectId: 'react-ecommerce-9b741',
  storageBucket: 'react-ecommerce-9b741.appspot.com',
  messagingSenderId: '509180673961',
  appId: '1:509180673961:web:158e248eae907d6c8c0eb8',
  measurementId: 'G-LKWEK27NR6',
};

firebase.initializeApp(config);

export const auth = new firebase.auth();
export const firestore = new firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
