import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const local = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : "";
  const [token, setToken] = useState(local);
  const [isAuth, setIsAuth] = useState(false);

  const setUser = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  useEffect(() => {
    setIsAuth(!!local && local.length > 0);
  }, [token]);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
