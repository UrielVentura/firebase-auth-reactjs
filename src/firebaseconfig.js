import firebase from 'firebase'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDbBod7_xpWReUQLik3JggRFL-Yni552rk",
    authDomain: "fir-auth-reactjs.firebaseapp.com",
    projectId: "fir-auth-reactjs",
    storageBucket: "fir-auth-reactjs.appspot.com",
    messagingSenderId: "1020131587920",
    appId: "1:1020131587920:web:64d88ca79f1c141627de55",
    measurementId: "G-2L4HFPR0EK"
  };
  // Initialize Firebase
   const fire = firebase.initializeApp(firebaseConfig);
   fire.analytics();

   const auth = fire.auth();

export { auth } 

