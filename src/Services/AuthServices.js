import axios from "axios";

export const loginServices = (username, password) => {
  return axios.post("/api/auth/login", {
    username,
    password,
  });
};

export const signupServices = (firstName, lastName, username, password) => {
  return axios.post("/api/auth/signup", {
    firstName,
    lastName,
    username,
    password,
  });
};
