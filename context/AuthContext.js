import { NEXT_URL } from 'config/globals';
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
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ identifier, password }),
    });

    const data = await res.json();
    console.log({ data });
    if (res.ok) {
      setUser(data.user);
      setError(null);
    } else {
      setError(data.message);
    }
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
