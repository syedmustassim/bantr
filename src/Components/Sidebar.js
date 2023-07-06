import { Link } from "react-router-dom";
import { TbHomeDot, TbCompass, TbBookmarkPlus, TbUser } from "react-icons/tb";
import "./Sidebar.css";
import { useAuth } from "../Context/AuthContext";

export const Sidebar = () => {
  const logoImg = require("../Images/bantr-no-bg.png");

  const { currentUser } = useAuth();
  return (
    <div>
      <div className="sidebar-container">
        <img src={logoImg} alt="logo" />
        <Link to="/homefeed" className="sidebar-links">
          <h3>
            <TbHomeDot size={30} />
            Home
          </h3>
        </Link>
        <Link to="/explore" className="sidebar-links">
          <h3>
            <TbCompass size={30} />
            Explore
          </h3>
        </Link>
        <Link to="/bookmark" className="sidebar-links">
          <h3>
            <TbBookmarkPlus size={30} />
            Bookmarked posts
          </h3>
        </Link>
        <Link to={`/profile/${currentUser?._id}`} className="sidebar-links">
          <h3>
            <TbUser size={30} />
            Profile
          </h3>
        </Link>
      </div>
    </div>
  );
};
