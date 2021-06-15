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

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const createUserProfileDocument = async (userAuth, displayName) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        email,
        displayName,
        createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userRef;
};

export const addCollectionAndDocument = async (collectionKey, ObjectsAdded) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  ObjectsAdded.map((obj) => {
    const newObjRef = collectionRef.doc();
    return batch.set(newObjRef, obj);
  });

  return await batch.commit();
};

export const shopDataFromSnapshot = (snapshot) => {
  const transformedCollections = snapshot.docs.map((doc) => {
    const { items, title } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      items,
      title,
    };
  });

  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

//gets current User in persistance
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export default firebase;
