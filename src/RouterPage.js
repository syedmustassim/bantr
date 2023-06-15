import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import App from "./App";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<App />} />
    </Routes>
  );
};

export default RouterPage;
