import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../Context/AuthContext";
import { useState } from "react";

const Login = () => {
  const { setActiveAuth, loginHandler } = useAuth();
  const navigate = useNavigate();

  const guestUserDetails = {
    username: "mustassim",
    password: "mustassim123",
  };

  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const loginInputHandler = (event) => {
    const { name, value } = event.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const loginFormSubmit = (event) => {
    event.preventDefault();
    loginHandler(loginDetails);
  };

  const guestLoginHandler = () => {
    setLoginDetails({
      ...loginDetails,
      username: guestUserDetails.username,
      password: guestUserDetails.password,
    });
  };

  const authHandler = () => {
    setActiveAuth(false);
  };

  return (
    <div className="form-box login">
      <form onSubmit={loginFormSubmit}>
        <h2> Sign In </h2>
        <div className="input-box">
          <input
            type="text"
            name="username"
            value={loginDetails.username}
            onChange={loginInputHandler}
            required
          />
          <label> Username </label>
        </div>
        <div className="input-box">
          <input
            type="password"
            name="password"
            value={loginDetails.password}
            onChange={loginInputHandler}
            required
          />
          <label> Password </label>
        </div>
        <button type="submit" className="login-btn">
          Sign In
        </button>
        <button
          type="submit"
          className="guest-login-btn"
          onClick={guestLoginHandler}
        >
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
