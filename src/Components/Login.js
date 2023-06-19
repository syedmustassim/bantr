import { Link } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../Context/AuthContext";

const Login = () => {
  const { setActiveAuth } = useAuth();

  const authHandler = () => {
    setActiveAuth(false);
  };

  return (
    <div className="form-box login">
      <form action="#">
        <h2> Sign In </h2>
        <div className="input-box">
          <input type="text" name="username" required />
          <label> Username </label>
        </div>
        <div className="input-box">
          <input type="password" required />
          <label> Password </label>
        </div>
        <button type="submit" className="login-btn">
          Sign In
        </button>
        <button type="submit" className="guest-login-btn">
          Guest Login
        </button>
        <p>
          Don't have an account yet?{" "}
          <Link to="/" className="sign-up-link" onClick={authHandler}>
            Click here to sign up!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
