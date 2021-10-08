import React, { useState } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthContext from "./context/authContext";
import authAPI from "./views/services/authAPI";
import "./scss/style.scss";
// import PrivateRoute from "./views/components/PrivateRoute";
import AdminPostsPage from "./views/components/AdminPostsPage";
import TheLayout from "./containers/TheLayout";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

function PrivateRoute({ children, ...rest }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    authAPI.isAuthenticated
  );
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    authAPI.isAuthenticated
  );
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            {/* <PrivateRoute path="/" component={Login} /> */}
            <Route path="/" component={TheLayout} />
            {/* <Route path="/auth/local/register" component={Register} /> */}
            <PrivateRoute path="/admin">
              <AdminPostsPage />
            </PrivateRoute>
          </Switch>
        </React.Suspense>
      </HashRouter>
    </AuthContext.Provider>
  );
}

export default App;
