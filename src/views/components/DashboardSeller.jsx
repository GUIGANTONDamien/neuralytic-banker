import React from "react";
import { CButton, CCol } from "@coreui/react";
import { useHistory } from "react-router-dom";
import iconIA from "../media/logo-IA.png";
import "./dashboardSeller.css";

function DashboardSeller() {
  const history = useHistory();
  const routeSelectClient = () => {
    let path = `/selectclient`;
    history.push(path);
  };

  return (
    <div className="container_client">
      <div>
        <h1 className="title">
          Détection automatique d’opportunités de ventes grâce à l’intelligence
          articielle
          <img className="img_icon-title" src={iconIA} alt="iconIA" />
        </h1>
      </div>
      <section>
        <div className="container_description_dashboard">
          <div>
            <h1 className="title-button">
              Risques et opportunités d'un client
            </h1>
            <CCol className="container-button" col="6" sm="4" md="2" xl>
              <CButton
                className="button"
                shape="pill"
                color="dark"
                onClick={routeSelectClient}
              >
                <img className="img_icon-title" src={iconIA} alt="iconIA" />
                Sélectionner un client
              </CButton>
            </CCol>
          </div>
          <div>
            <h1 className="title-button">
              Analyser tout le portefeuille client
            </h1>
            <CCol className="container-button" col="6" sm="4" md="2" xl>
              <CButton className="button" shape="pill" color="dark">
                <img className="img_icon-title" src={iconIA} alt="iconIA" />
                Editer tout le portefeuille clients
              </CButton>
            </CCol>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashboardSeller;
