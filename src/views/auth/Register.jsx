import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { URL_REGISTER } from "../../config";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import "./register.css";

export default function Register() {
  const [create, setCreate] = useState({
    username: "",
    identifier: "",
    password: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(URL_REGISTER, {
        username: create.username,
        identifier: create.identifier,
        password: create.password,
        email: create.email,
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
    setCreate({
      ...create,
      [name]: value,
    });
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      name="username"
                      placeholder="Username"
                      autoComplete="username"
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      name="email"
                      placeholder="Email"
                      autoComplete="email"
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="password"
                      name="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="password"
                      name="repeat password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <CButton color="success" block type="submit">
                    Create Account
                  </CButton>
                </CForm>
              </CCardBody>
              <CCardBody className="text-center">
                <div>
                  <h2>Sign in</h2>
                  <p>
                    If you already have an account, you can log in by clicking
                    on "Login now"
                  </p>
                  <Link to="/auth/local/login">
                    <CButton
                      color="primary"
                      className="mt-3"
                      active
                      tabIndex={-1}
                    >
                      Login Now!
                    </CButton>
                  </Link>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
}
