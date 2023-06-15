import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [activeAuth, setActiveAuth] = useState(true);

  return (
    <AuthContext.Provider value={{ activeAuth, setActiveAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
