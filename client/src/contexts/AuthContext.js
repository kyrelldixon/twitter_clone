import React, { createContext, useState } from 'react';

const AuthContext = createContext([{}, () => {}]);

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({ user: null, isAuthenticated: false});
  
  return (
    <AuthContext.Provider value={[state, setState]}>
      { children }
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };