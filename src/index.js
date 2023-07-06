import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import RouterPage from "../src/RouterPage";
import { makeServer } from "./server";
import { AuthProvider } from "./Context/AuthContext";
import App from "./App";
import { PostsProvider } from "./Context/PostsContext";
import { UserProvider } from "./Context/UserContext";

makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <PostsProvider>
            <App />
          </PostsProvider>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
