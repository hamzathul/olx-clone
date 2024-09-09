import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './store/FirebaseContext';
import { app, auth, firestore } from './firebase/config';

const firebaseValue = {
  app,
  auth,
  firestore
};

ReactDOM.render(
  <FirebaseContext.Provider value={firebaseValue}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
