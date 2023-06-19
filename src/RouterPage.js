import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import App from "./App";
import { HomeFeed } from "../src/Pages/HomeFeed";
import RequiresAuth from "./Components/RequiresAuth";

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
    </Routes>
  );
};

export default RouterPage;
