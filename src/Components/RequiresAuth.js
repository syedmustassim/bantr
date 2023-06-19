import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const RequiresAuth = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  return token ? children : <Navigate to="/" state={{ from: location }} />;
};

export default RequiresAuth;
