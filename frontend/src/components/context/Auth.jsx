import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // ✅ Parse stored user correctly
  const storedUser = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const [user, setUser] = useState(storedUser);

  // ✅ Login
  const login = (userData) => {
    localStorage.setItem("userInfo", JSON.stringify(userData));
    setUser(userData);
  };

  // ✅ Logout
  const logout = () => {
    localStorage.removeItem("userInfo");
    setUser(null);
  };

  // ✅ Provider MUST be returned here
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
