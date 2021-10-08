// import React, { useContext } from "react";
// import AuthContext from "src/context/authContext";
// import { useHistory, Redirect, Route } from "react-router-dom";

// const PrivateRoute = ({ path, component }) => {
//   const { isAuthenticated } = useContext(AuthContext);
//   const { location } = useHistory();

//   if (isAuthenticated) {
//     return <Route path={path} component={component} />;
//   } else if (!isAuthenticated && location.pathname === "/dashboard") {
//     return <Redirect to="/dashboard" />;
//   } else {
//     return <Redirect to="/dashboard" />;
//   }
// };

// export default PrivateRoute;
