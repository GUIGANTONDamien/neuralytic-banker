import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CLink,
} from "@coreui/react";
import { CButton } from "@coreui/react";
import "./client.css";

function Client(props) {
  const [Client, setClient] = useState([]);
  const [BesoinsClient, setBesoinsClient] = useState([]);
  const { numberclient, bankaccountnumber, name } = props.match.params;

  const history = useHistory();
  const routeChange = () => {
    let path = `/dashboard`;
    history.push(path);
  };

  useEffect(() => {
    if (numberclient) {
      axios
        .get(
          `${"http://192.168.5.60:1337/Clients"}?Numberclient=${numberclient}`
        )
        .then((response) => {
          console.log(response);
          setClient(response.data);
        });
    } else {
      axios
        .get(
          `${"http://192.168.5.60:1337/Clients"}?Bankaccountnumber=${bankaccountnumber}`
        )
        .then((response) => {
          console.log(response.data);
          setClient(response.data);
        });
    }
  }, [numberclient, bankaccountnumber]);

  useEffect(() => {
    axios
      .get(`${"http://192.168.5.60:1337/Besoins-clients"}`)
      .then((response) => {
        console.log(response);
        setBesoinsClient(response.data);
      });
  }, [name]);

  return (
    <>
      <CRow>
        <CCol>
          <h1 className="title">Risques et opportunités client</h1>
          <div>
            <div className="card_select">
              {Client.map((el) => (
                <CCard key={el.id}>
                  <CCardHeader>
                    <strong>{el.Name}</strong>
                  </CCardHeader>
                  <CCardBody>
                    <CRow>
                      <CCol xs="12">
                        <section>
                          <div className="container_description_client">
                            <div className="description">
                              <h2>Email</h2>
                              <p>{el.email}</p>
                            </div>
                            <div className="description">
                              <h2>Number client</h2>
                              <p>{el.Numberclient}</p>
                            </div>
                            <div className="description">
                              <h2>Number sons</h2>
                              <p>{el.numbersons}</p>
                            </div>
                            <div className="description">
                              <h2>Phone number</h2>
                              <p>{el.phonenumber}</p>
                            </div>
                            <div className="description">
                              <h2>Age</h2>
                              <p>{el.age}</p>
                            </div>
                            <div className="description">
                              <h2>Address</h2>
                              <p>{el.address}</p>
                            </div>
                            <div className="description">
                              <h2>City</h2>
                              <p>{el.city}</p>
                            </div>
                          </div>
                        </section>
                      </CCol>
                    </CRow>
                  </CCardBody>
                </CCard>
              ))}
            </div>
            <div className="card_select">
              <CCard>
                <CCardHeader>
                  <strong>Prêt banquaire</strong>
                </CCardHeader>

                <CCardBody>
                  {BesoinsClient.map((el) => (
                    <div key={el.id}>
                      <div>
                        <CRow>
                          <CCol xs="12">
                            <section>
                              <div className="container_description_client">
                                <li>
                                  <strong>Prêt {el.Name}</strong>
                                </li>
                                <p>Montant max : {el.Montantmax} $</p>
                                <p>Duration max : {el.Durationmax} ans</p>
                              </div>
                            </section>
                          </CCol>
                        </CRow>
                      </div>
                    </div>
                  ))}
                </CCardBody>
              </CCard>
            </div>
          </div>
        </CCol>
      </CRow>
      <div className="container_client">
        <div className="button-client">
          <CLink to="/dashboard">
            <CButton
              type="submit"
              shape="pill"
              color="dark"
              onClick={routeChange}
            >
              Quitter la fiche client
            </CButton>
          </CLink>
          <CButton type="submit" shape="pill" color="dark">
            Imprimer la fiche client
          </CButton>
        </div>
      </div>
    </>
  );
}

export default Client;
