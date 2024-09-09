import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX-FPNbbXCuFppKcYih5TxvADi6ipR8kM",
  authDomain: "fir-d80ce.firebaseapp.com",
  projectId: "fir-d80ce",
  storageBucket: "fir-d80ce.appspot.com",
  messagingSenderId: "1072731959063",
  appId: "1:1072731959063:web:f83931f4695d30636bd152",
  measurementId: "G-NY2WK0J0B2"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

export { app, auth, firestore };
