import React, { createContext, useState } from 'react';
import { LOCAL_STORAGE_USER_KEY } from '../services/apiClient';

const AuthContext = createContext([{}, () => {}]);

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(() => {
    const user = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_USER_KEY));
    return { user, isAuthenticated: user != null };
  });
  
  return (
    <AuthContext.Provider value={[state, setState]}>
      { children }
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };