import React, { createContext, useState, useContext } from "react";

// AuthContext oluşturuyoruz
const AuthContext = createContext();

// AuthProvider component'i, tüm uygulamanın AuthContext'e erişmesini sağlar
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Kullanıcıyı oturum açma/kapama fonksiyonları
  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// AuthContext'i kullanmak için custom hook
export const useAuth = () => useContext(AuthContext);
