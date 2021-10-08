import SelectClient from "./views/components/SelectClient";
import Client from "./views/components/Client";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import DashboardSeller from "./views/components/DashboardSeller";
import AdminPostsPage from "./views/components/AdminPostsPage";

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: DashboardSeller },
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
  { path: "/lastname/:lastname", name: "Client", component: Client },
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
  {
    path: "/admin",
    name: "admin",
    component: AdminPostsPage,
  },
];

export default routes;
