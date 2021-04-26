import { API_URL, NEXT_URL } from 'config/globals';
import { useRouter } from 'next/router';
import React, { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const router = useRouter();

  useEffect(() => checkUserLoggedIn());

  // Register
  const register = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();
    // console.log({ data });
    if (res.ok) {
      setUser(data.user);
    } else {
      setError(data.message);
      setError(null);
    }
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
    // console.log({ data });
    if (res.ok) {
      setUser(data.user);
    } else {
      setError(data.message);
      setError(null);
    }
  };

  // Logout
  const logout = async () => {
    const res = await fetch(`${NEXT_URL}/api/logout`, {
      method: 'POST',
    });

    if (res.ok) {
      router.push('/');
      setUser(null);
    }
  };

  // Check Logged In
  const checkUserLoggedIn = async () => {
    const res = await fetch(`${NEXT_URL}/api/user`);
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      router.push('/account/dashboard');
    } else {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
