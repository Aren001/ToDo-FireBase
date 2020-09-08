import firebase from 'firebase';

// import 'firebase/firestore'



 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyAKlEKXRQmX0_nUe4fxjHpQutsKYmWnNII",
  authDomain: "todo-8f931.firebaseapp.com",
  databaseURL: "https://todo-8f931.firebaseio.com",
  projectId: "todo-8f931",
  storageBucket: "todo-8f931.appspot.com",
  messagingSenderId: "332103547589",
  appId: "1:332103547589:web:d42598bbadb0f6ff334eac",
  measurementId: "G-16P8XXJ9ZC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



  export default firebase;