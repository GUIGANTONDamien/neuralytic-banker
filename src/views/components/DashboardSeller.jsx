import React from "react";
import { CButton, CCol } from "@coreui/react";
import "./dashboardSeller.css";

function DashboardSeller() {
  return (
    <div className="container_client">
      <div>
        <h1 className="title">
          Détection automatique d’opportunités de ventes grâce à l’intelligence
          articielle {' '}
          <img className="img_icon-title" src="" alt="iconIA" />
        </h1>
      </div>
      <section>
        <div className="container_description_client">
          <div>
            <h1>Risques et opportunités d'un client</h1>
            <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <CButton shape="pill" color="dark">
                Sélectionner un client
              </CButton>
            </CCol>
          </div>
          <div>
            <h1>Analyser tout le portefeuille client</h1>
            <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <CButton shape="pill" color="dark">
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
