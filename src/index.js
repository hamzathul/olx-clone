import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './store/Context';
import { app, auth, firestore,storage } from './firebase/config';
import Context from './store/Context'

const firebaseValue = {
  app,
  auth,
  firestore,
  storage
};

ReactDOM.render(
  <FirebaseContext.Provider value={firebaseValue}>
    <Context>
    <App />
    </Context>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
