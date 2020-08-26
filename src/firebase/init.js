import firebase from 'firebase'
import firestore from 'firebase/firestore'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDStPR4Dt-xG4U6td0rmaKnVA04ojkXYhc",
    authDomain: "udemy-ninja-chat-55422.firebaseapp.com",
    databaseURL: "https://udemy-ninja-chat-55422.firebaseio.com",
    projectId: "udemy-ninja-chat-55422",
    storageBucket: "udemy-ninja-chat-55422.appspot.com",
    messagingSenderId: "422032406394",
    appId: "1:422032406394:web:0db0e1446bdd5f41e588c3",
    measurementId: "G-W72NGW9NWZ"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  //firebaseApp.firestore().settings({ timestampsInSnapshots : true})

  export default firebaseApp.firestore()