/* eslint-disable import/no-anonymous-default-export */
import { URL_LOGIN } from "src/config";
import axios from "axios";

function authenticate(credentials) {
  return axios
    .post(URL_LOGIN, credentials)
    .then((response) => console.log(response))
    .then((data) => {
      window.localStorage.setItem("authToken", data.jwt);
      window.localStorage.setItem("username", data.user.username);
      axios.defaults.headers["Authorization"] = "Bearer " + data.jwt;
    });
}

export default {
  authenticate,
};
