import Index from "views/Index.js";
import AccountSettings from "views/AccountSettings.js";
import Analytics from "views/Analytics.js";
import Products from "views/Products.js";
import Orders from "views/Orders.js";
import Login from "views/Login.js";
import Register from "views/Register.js";

const routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/orders",
    name: "Orders",
    icon: "ni ni-cart text-blue",
    component: Orders,
    layout: "/admin",
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: "ni ni-chart-bar-32 text-yellow",
    component: Analytics,
    layout: "/admin",
  },
  {
    path: "/products",
    name: "Products",
    icon: "ni ni-tag text-red",
    component: Products,
    layout: "/admin",
  },
  {
    path: "/settings",
    name: "Settings",
    icon: "ni ni-settings text-info",
    component: AccountSettings,
    layout: "/admin",
  },
];

export default routes;
