import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import App from "./App";
import { Login } from "./Components/Login";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
};

export default RouterPage;
