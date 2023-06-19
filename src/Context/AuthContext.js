import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginServices, signupServices } from "../Services/AuthServices";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [activeAuth, setActiveAuth] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"));
  const [token, setToken] = useState(localStorageToken?.token || "");
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user);
  const [loading, setLoading] = useState(false);

  const loginHandler = async ({ username, password }) => {
    setLoading(true);
    try {
      const response = await loginServices(username, password);
      const {
        status,
        data: { encodedToken, foundUser },
      } = response;
      if (status === 200) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
        setToken(token);
        setCurrentUser(foundUser);
        navigate(location?.state?.from?.pathname || "/homefeed");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const signupHandler = async ({ firstName, lastName, username, password }) => {
    setLoading(true);
    try {
      const response = await signupServices(
        firstName,
        lastName,
        username,
        password
      );
      const {
        status,
        data: { encodedToken, createdUser },
      } = response;
      if (status === 200) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ token: encodedToken, user: createdUser })
        );
        setToken(encodedToken);
        setCurrentUser(createdUser);
        navigate("/homefeed");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("loginDetails");
    setToken(null);
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        activeAuth,
        setActiveAuth,
        token,
        currentUser,
        loginHandler,
        signupHandler,
        logoutHandler,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
