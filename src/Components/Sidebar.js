import { Link } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div>
      <div className="sidebar-container">
        <h3>Home</h3>
        <Link to="/explore">
          <h3>Explore</h3>
        </Link>
        <h3>Bookmarked posts</h3>
        <h3>Liked posts</h3>
        <h3>Following</h3>
        <h3>Followers</h3>
      </div>
    </div>
  );
};
