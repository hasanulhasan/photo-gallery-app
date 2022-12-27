import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider)
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => {
      return unSubscribe();
    }
  }, [])


  const authInfo = { user, providerLogin, logOut }
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;