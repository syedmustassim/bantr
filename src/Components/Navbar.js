import "./Navbar.css";

export const Navbar = () => {
  const logoImg = require("../Images/bantr-no-bg.png");
  return (
    <div className="navbar">
      <img src={logoImg} alt="logo" />
      <input type="search" placeholder="search users" />
      <button> Log out </button>
    </div>
  );
};
