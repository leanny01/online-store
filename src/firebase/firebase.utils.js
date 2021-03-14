import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAd_YThGKtSUImhvUeffYDznbihI-rC8LY",
  authDomain: "onlinestore-portfolioproject.firebaseapp.com",
  projectId: "onlinestore-portfolioproject",
  storageBucket: "onlinestore-portfolioproject.appspot.com",
  messagingSenderId: "896509399856",
  appId: "1:896509399856:web:6c4d12ce68f0b4a502eef5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
