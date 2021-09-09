/* eslint-disable import/no-anonymous-default-export */
import { URL_LOGIN } from "src/config";
import axios from "axios";
import jwtDecode from "jwt-decode";

function authenticate(credentials) {
  return axios
    .post(URL_LOGIN, credentials)
    .then((response) => response.data)
    .then((data) => {
      window.localStorage.setItem("authToken", data.jwt);
      window.localStorage.setItem("username", data.user.username);
      axios.defaults.headers["Authorization"] = "Bearer " + data.jwt;
      console.log(isAuthenticated());
    });
}

function isAuthenticated() {
  const token = window.localStorage.getItem("authToken");

  if (token) {
    const { exp } = jwtDecode(token);
    if (exp * 1000 > new Date().getTime()) {
      return true;
    }
    return false;
  }
  return false;
}

export default {
  authenticate,
  isAuthenticated,
};
