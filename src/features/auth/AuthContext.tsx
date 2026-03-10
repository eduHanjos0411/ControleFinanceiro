import React, { createContext, useEffect, useState } from "react";
import type { User } from "../../types/User";
import { loadUsers, saveUsers } from "../../utils/UserStorage";


interface AuthContextType {
  user: User | null;
  register: (name: string, password: string) => boolean
  login: (name: string, password: string) => boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const AUTH_KEY = "auth_user";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem(AUTH_KEY);

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem(AUTH_KEY);
      }
    }
  }, []);

  function login(name: string, password: string): boolean {
    const users = loadUsers();

    const foundUser = users.find(
      (u) => u.name === name && u.password === password,
    );

    if (!foundUser) {
      return false;
    }

    setUser(foundUser);
    localStorage.setItem(AUTH_KEY, JSON.stringify(foundUser));
    
    return true;
  }

  function register(name: string, password: string): boolean {
    const newUser: User = {
        id: Date.now(),
        name: name,
        password: password
      }
    

    try {
      const users = loadUsers()

      users.push(newUser)
      saveUsers(users)
      return true
    } catch {
      throw new Error("Erro ao criar o usuário")
    }
  }

  function logout() {
    setUser(null)
    localStorage.removeItem(AUTH_KEY)
  }

  return (
    <AuthContext.Provider value={{user, login, register, logout}}>
      {children}
    </AuthContext.Provider>
  )
}
