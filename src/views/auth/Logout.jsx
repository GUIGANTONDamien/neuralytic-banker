import React, { useState, history } from "react";
import { Link } from "react-router-dom";

function Logout(props) {
  // const userId = localStorage.getItem("authToken");
  const {user, setUser} = useState("");

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    setUser("");
    history("/auth/local/login");
  };

  return (
    <div>
      <Link className="link-logout" to="/connexion">
        <buton type="button" onClick={handleLogout}>
          Déconnexion
        </buton>
      </Link>
    </div>
  );
}

export default Logout;
