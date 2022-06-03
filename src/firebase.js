import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnYN_-et3yiT4Za-W8LKuuBBNfKuOZM0E",
  authDomain: "crud--udemy--react.firebaseapp.com",
  projectId: "crud--udemy--react",
  storageBucket: "crud--udemy--react.appspot.com",
  messagingSenderId: "1084224531388",
  appId: "1:1084224531388:web:71be4cabcc32c6b71159b9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };
