import { createContext, useState } from 'react';
import { storage,auth,firestore,app } from '../firebase/config';

export const FirebaseContext = createContext({
  app: null,
  auth: null,
  firestore: null,
  storage:null
});

export const AuthContext = createContext(null)

export default function Context({children}){
  const [user,setUser] = useState(null)
  return(
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
}