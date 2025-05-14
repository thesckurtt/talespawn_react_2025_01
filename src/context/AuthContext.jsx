import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true"
  });

  const [user, setUser] = useState(() => {
    const user = localStorage.getItem("user")
    if (user) return JSON.parse(user)
  })

  const login = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    setUser(user);
  };

  const logout = () => {
    // localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{isLoggedIn, login, logout, user}}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => useContext(AuthContext)