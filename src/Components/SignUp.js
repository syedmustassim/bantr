import { Link } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../Context/AuthContext";
import { useState } from "react";

export const SignUp = () => {
  const { setActiveAuth, signUpHandler } = useAuth();

  const authHandler = () => {
    setActiveAuth(true);
  };

  const [signUp, setSignUp] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
    profileImg: "https://i.postimg.cc/fTYff9yW/urahichi.gif",
    backgroundImg: "https://i.postimg.cc/bYkXBpxM/mostCig.gif",
  });

  const signUpInput = (event) => {
    if (event.target.name === "confirmPassword") {
      setSignUp({
        ...signUp,
        [event.target.name]: event.target.value,
      });
    }
  };

  const signUpSubmit = (event) => {
    event.preventDefault();
    signUpHandler(signUp);
  };

  return (
    <div>
      <div className="form-box register">
        <form onSubmit={signUpSubmit} action="#">
          <h2 className="register-heading"> Sign Up </h2>
          <div className="input-box">
            <input
              type="text"
              name="name"
              value={signUp.name}
              onChange={signUpInput}
              required
            />
            <label> Name </label>
          </div>
          <div className="input-box">
            <input
              type="text"
              name="username"
              value={signUp?.username}
              onChange={signUpInput}
              required
            />
            <label> Username </label>
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              value={signUp?.password}
              onChange={signUpInput}
              required
            />
            <label> Password </label>
          </div>
          <div className="input-box">
            <input
              type="password"
              name="confirmPassword"
              value={signUp?.confirmPassword}
              onChange={signUpInput}
              required
            />
            <label> Confirm Password </label>
          </div>
          <button type="submit" className="login-btn">
            Sign Up
          </button>
          <p>
            Have an account already?{" "}
            <Link to="/" className="sign-up-link" onClick={authHandler}>
              Click here to sign in!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
