import { createContext } from 'react';

export const FirebaseContext = createContext({
  app: null,
  auth: null,
  firestore: null,
});
