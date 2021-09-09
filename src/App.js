import React, { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import AuthContext from "./context/authContext";
import authAPI from "./views/services/authAPI";
import "./scss/style.scss";
import PrivateRoute from "./views/components/PrivateRoute";
import AdminPostsPage from "./views/components/AdminPostsPage";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const Login = React.lazy(() => import("./views/auth/Login"));
const Register = React.lazy(() => import("./views/auth/Register"));

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    authAPI.isAuthenticated
  );
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route
              path="/"
              name="Home"
              render={(props) => <TheLayout {...props} />}
            />
            <PrivateRoute path="/admin" component={AdminPostsPage} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    </AuthContext.Provider>
  );
}

export default App;
