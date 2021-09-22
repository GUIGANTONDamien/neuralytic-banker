import React, { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import AuthContext from "./context/authContext";
import authAPI from "./views/services/authAPI";
import "./scss/style.scss";
import PrivateRoute from "./views/components/PrivateRoute";
import AdminPostsPage from "./views/components/AdminPostsPage";
import TheLayout from "./containers/TheLayout";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    authAPI.isAuthenticated
  );
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/auth/local/login" component={Login} />
            <Route path="/" component={TheLayout} />
            <Route exact path="/auth/local/register" component={Register} />
            <PrivateRoute path="/admin" component={AdminPostsPage} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    </AuthContext.Provider>
  );
}

export default App;
