import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [credentials, setCredentials] = useState({
    identifier: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:1337/auth/local/register", {
        username: "",
        email: "",
        password: "",
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };

  const handleChange = ({ currentTarget }) => {
    console.log(currentTarget);
    const { value, name } = currentTarget;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  // const {user, setUser} = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios
  //     .post("http://localhost:1337/auth/local/register", user)
  //     .then((response) => {
  //       JSON.stringify(response);
  //     })
  //     .catch((error) => JSON.stringify(error))

  // };

  return (
    <div>
      <div className="container">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">
              Sign<span style={{ color: "red" }}>UP</span>
            </h2>
            <form className="register-form" onSubmit={handleSubmit}>
              <div className="container-input">
                <div>
                  <h3>Username</h3>
                </div>
                <div>
                  <input
                    className="form-group"
                    name="username"
                    type="test"
                    placeholder="vendeur1"
                    onChange={handleChange}
                  />
                </div>
                <hr />
                <div>
                  <h3>Email</h3>
                </div>
                <div>
                  <input
                    className="form-group"
                    name="email"
                    type="email"
                    placeholder="love@movie.com"
                    onChange={handleChange}
                  />
                </div>
                <hr />
              </div>
              <div>
                <div>
                  <h3>Password</h3>
                </div>
                <div>
                  <input
                    placeholder="****************** "
                    className="form-group"
                    name="password"
                    type="text"
                    onChange={handleChange}
                  />
                </div>
                <hr />
              </div>
              <div className="container-button">
                <input className="submit" type="submit" value="S'incrire" />
              </div>
            </form>
            <Link className="text-route" to="/connexion">
              <p>Déjà inscrit ? Connectez-vous</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
