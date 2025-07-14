'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  username: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  register: (username: string, password: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('AuthContext를 찾을 수 없습니다.');
  return ctx;
};

// 간단한 mock 유저 DB
const mockUsers: { username: string; password: string }[] = [];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password: string) => {
    const found = mockUsers.find(u => u.username === username && u.password === password);
    if (found) {
      setUser({ username });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  const register = (username: string, password: string) => {
    const exists = mockUsers.some(u => u.username === username);
    if (exists) return false;
    mockUsers.push({ username, password });
    setUser({ username });
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}; 