import React, { createContext, useState } from 'react';

export const SidepanelContext = createContext();
export const AuthContext = createContext();

// Authentication Context
function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  function toggleIsAuthenticated() {
    setIsAuthenticated(!isAuthenticated);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        toggleIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider };
