// context/AuthContext.jsx
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("adminToken") // Verificar si hay un token almacenado
  );

  const login = (token) => {
    localStorage.setItem("adminToken", token); // Almacenar el token
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("adminToken"); // Eliminar el token
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
