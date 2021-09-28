import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { CButton } from "@coreui/react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CRow,
} from "@coreui/react";
import iconIA from "../media/logo-IA.png";
import "./selectClient.css";

function SelectClient() {
  const [numberclient, setNumberclient] = useState("");
  const [bankaccountnumber, setBankaccountnumber] = useState("");
  const [lastname, setLastname] = useState("");
  const history = useHistory();

  const handleChangeNumberclient = (event) => {
    setNumberclient(event.target.value);
  };

  const handleChangeBankaccountnumber = (event) => {
    setBankaccountnumber(event.target.value);
  };

  const handleChangeNameClient = (event) => {
    setLastname(event.target.value);
  };

  const handleNumberClient = (e) => {
    e.preventDefault();
    history.push(`/client/${numberclient}`);
    setNumberclient("");
  };

  const handleBankAccountNumber = (e) => {
    e.preventDefault();
    history.push(`/bankaccountnumber/${bankaccountnumber}`);
    setBankaccountnumber("");
  };

  const handleLastname = (e) => {
    e.preventDefault();
    history.push(`/lastname/${lastname}`);
    setLastname("");
  };

  return (
    <CRow>
      <CCol>
        <h1>Veuillez sélectionner un client</h1>
        <div className="container-select">
          <div className="card_select">
            <CCard>
              <CCardHeader>
                <strong>Par numéro du client :</strong>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol xs="12">
                    <CFormGroup>
                      <CInput
                        id="numberclient"
                        placeholder="Enter the number client"
                        onChange={handleChangeNumberclient}
                        value={numberclient}
                        required
                      />
                    </CFormGroup>
                    <CButton
                      className="button_numberclient"
                      type="submit"
                      shape="pill"
                      color="dark"
                      onClick={handleNumberClient}
                    >
                      Rechercher
                    </CButton>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
            <CCard>
              <CCardHeader>
                <strong>Par numéro de compte banquaire :</strong>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol xs="12">
                    <CFormGroup>
                      <CInput
                        id="bankaccountnumber"
                        placeholder="Enter the bank account number"
                        onChange={handleChangeBankaccountnumber}
                        value={bankaccountnumber}
                        required
                      />
                    </CFormGroup>
                    <CButton
                      className="button_bankaccountnumber"
                      type="submit"
                      shape="pill"
                      color="dark"
                      onClick={handleBankAccountNumber}
                    >
                      Rechercher
                    </CButton>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </div>
          <div className="card_select">
            <CCard>
              <CCardHeader>
                <strong>Par nom :</strong>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol xs="12">
                    <CFormGroup>
                      <CInput
                        id="lastname"
                        placeholder="Lastname"
                        onChange={handleChangeNameClient}
                        value={lastname}
                        required
                      />
                      {/* <CInput
                        id="firstname"
                        placeholder="Firstname"
                        onChange={handleChangeNameClient}
                        value={nameClient}
                        required
                      /> */}
                    </CFormGroup>
                    <CButton
                      type="submit"
                      shape="pill"
                      color="dark"
                      onClick={handleLastname}
                    >
                      Rechercher
                    </CButton>
                  </CCol>
                </CRow>
                <CRow></CRow>
              </CCardBody>
            </CCard>
            <CCard>
              <CCardHeader>
                <strong>Reconnaissance facial :</strong>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol xs="12">
                    <CButton
                      className="button_reconnaissancefacial"
                      type="submit"
                      shape="pill"
                      color="dark"
                    >
                      <img className="img_icon-title" src={iconIA} alt="iconIA" />{" "}
                      Détection de la reconnaissance facial
                    </CButton>
                  </CCol>
                </CRow>
                <CRow></CRow>
              </CCardBody>
            </CCard>
          </div>
        </div>
      </CCol>
    </CRow>
  );
}

export default SelectClient;
