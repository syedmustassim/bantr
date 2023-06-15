import { Link } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../Context/AuthContext";

export const SignUp = () => {
  const { setActiveAuth } = useAuth();

  const authHandler = () => {
    setActiveAuth(true);
  };

  return (
    <div>
      <div className="form-box register">
        <form action="#">
          <h2 className="register-heading"> Sign Up </h2>
          <div className="input-box">
            <input type="text" required />
            <label> Name </label>
          </div>
          <div className="input-box">
            <input type="email" required />
            <label> Email </label>
          </div>
          <div className="input-box">
            <input type="password" required />
            <label> Password </label>
          </div>
          <div className="input-box">
            <input type="password" required />
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
