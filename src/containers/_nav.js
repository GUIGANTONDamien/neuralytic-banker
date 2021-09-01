import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard Seller",
    to: "/dashboardSeller",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Client"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Connexion vendeur",
    to: "/auth/local/login",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "S'inscrire",
    to: "/auth/local/register",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Sélectionner un client",
    to: "/selectclient",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Fiche client",
    to: "/selectclient/client",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Paramètres"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Liste des paramètres",
    route: "/base",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "A définir",
        to: "/base/breadcrumbs",
      },
      {
        _tag: "CSidebarNavItem",
        name: "A définir",
        to: "/base/cards",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Déconnexion",
        to: "/base/carousels",
      },
    ],
  },
];

export default _nav;
