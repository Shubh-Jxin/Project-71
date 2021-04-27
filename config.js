import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyB1_FLLSHOwiAtSFqaABLerO-HMZniGyUs",
    authDomain: "story-hub-5a118.firebaseapp.com",
    projectId: "story-hub-5a118",
    storageBucket: "story-hub-5a118.appspot.com",
    messagingSenderId: "687398096179",
    appId: "1:687398096179:web:0a5d56b794839f1b4c8246"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();