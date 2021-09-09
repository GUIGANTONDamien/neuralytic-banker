import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import authAPI from "../services/authAPI";
import AuthContext from "src/context/authContext";

const Login = () => {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    identifier: "",
    password: "",
  });
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleChange = ({ currentTarget }) => {
    console.log(currentTarget);
    const { value, name } = currentTarget;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await authAPI.authenticate(credentials);
      setIsAuthenticated(true);
      history.replace("admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">
              Sign<span style={{ color: "red" }}>IN</span>
            </h2>
            <form className="register-form" onSubmit={handleSubmit}>
              <div className="container-input">
                <div>
                  <h3>Email</h3>
                </div>
                <div>
                  <input
                    id="identifier"
                    className="form-group"
                    name="identifier"
                    type="email"
                    placeholder="Email"
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
                    id="password"
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
                <input className="submit" type="submit" value="Se connecter" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
