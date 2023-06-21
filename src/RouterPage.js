import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import App from "./App";
import { HomeFeed } from "../src/Pages/HomeFeed";
import RequiresAuth from "./Components/RequiresAuth";
import { Explore } from "./Pages/Explore";
import { Profile } from "./Pages/Profile";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route
        path="/homefeed"
        element={
          <RequiresAuth>
            <HomeFeed />
          </RequiresAuth>
        }
      />
      <Route
        path="/explore"
        element={
          <RequiresAuth>
            <Explore />
          </RequiresAuth>
        }
      />
      <Route
        path="/profile"
        element={
          <RequiresAuth>
            <Profile />
          </RequiresAuth>
        }
      />
    </Routes>
  );
};

export default RouterPage;
