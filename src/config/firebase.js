import firebase from "firebase/app";
import 'firebase/auth';
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDrSpAGbFQyGKn7ftTXgeIoSIuAxV3cYlk",
    authDomain: "quizappwithreact.firebaseapp.com",
    databaseURL: "https://quizappwithreact.firebaseio.com",
    projectId: "quizappwithreact",
    storageBucket: "",
    messagingSenderId: "204974059773",
    appId: "1:204974059773:web:62de87601328f8b5"
  };
  // Initialize Firebase
 let firebaseapp = firebase.initializeApp(firebaseConfig);
 var provider = new firebase.auth.FacebookAuthProvider();

let providerapp = provider.setCustomParameters({'display': 'popup'});
export {firebaseapp,providerapp }
