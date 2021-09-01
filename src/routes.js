import React from "react";
import SelectClient from "./views/components/SelectClient";

const Dashboard = React.lazy(() => import("./views/components/Dashboard"));
const Client = React.lazy(() => import("./views/components/Client"));
const Login = React.lazy(() => import("./views/auth/Login"));
const Register = React.lazy(() => import("./views/auth/Register"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  {
    path: "/selectclient",
    name: "Select client",
    component: SelectClient,
    exact: true,
  },
  { path: "/selectclient/client", name: "Client", component: Client },
  { path: "/client/:numberclient", name: "Client", component: Client },
  {
    path: "/bankaccountnumber/:bankaccountnumber",
    name: "Client",
    component: Client,
  },
  {
    path: "/besoins-clients/:name",
    name: "Client",
    component: Client,
  },
  {
    path: "/auth/local/login",
    name: "login",
    component: Login,
  },
  {
    path: "/auth/local/register",
    name: "register",
    component: Register,
  },
  {
    path: "/besoins-clients/:name",
    name: "Client",
    component: Client,
  },
];

export default routes;
