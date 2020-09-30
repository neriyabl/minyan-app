import { auth, analytics, initializeApp } from "firebase";
import "firebase/auth";
import "firebase/analytics";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_BASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

initializeApp(firebaseConfig);
analytics();
auth();

export const authMethods = {
  getUser: () => {
    return auth().currentUser;
  },

  signin: (email, password) => {
    return auth().signInWithEmailAndPassword(email, password);
  },

  signout: () => {
    return auth().signOut();
  },

  signup: (name, email, password) => {
    return auth().createUserWithEmailAndPassword(email, password);
  },
};
