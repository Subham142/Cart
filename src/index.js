import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app'
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdMyVCN6egNLs49BOZcRb7M-4dC1eMNGc",
  authDomain: "cart-83939.firebaseapp.com",
  projectId: "cart-83939",
  storageBucket: "cart-83939.appspot.com",
  messagingSenderId: "1025987372917",
  appId: "1:1025987372917:web:feabd5d077c703b8b9153c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  

ReactDOM.render(<App />, document.getElementById('root'));
