import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  // Register
  const register = async (user) => {
    console.log(user);
  };

  // Login
  const login = async ({ email: identifier, password }) => {
    console.log({ identifier, password });
  };

  // Logout
  const logout = async () => {
    console.log('Logout');
  };

  // Check Logged In
  const checkUserLoggedIn = async () => {
    console.log('Check');
  };

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
