import Login from "../Components/Login";
import { SignUp } from "../Components/SignUp";
import { useAuth } from "../Context/AuthContext";
import "./Home.css";

export const Home = () => {
  const logoImg = require("../Images/bantr-no-bg.png");
  const bgImg = require("../Images/richmond-kit.jpeg");

  const { activeAuth, setActiveAuth } = useAuth();

  return (
    <div className="main-content">
      <div className="background-content">
        <img src={bgImg} alt="" />
      </div>
      <div className="home-container">
        <div className="home-content">
          <img src={logoImg} alt="" />
          <h1> The Official social media of AFC Richmond </h1>
        </div>
        <div className="auth-container">
          {activeAuth ? <Login /> : <SignUp />}
        </div>
      </div>
    </div>
  );
};
