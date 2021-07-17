import Index from "./components/views/Index.js";
import AccountSettings from "./components/views/AccountSettings.js";
import Products from "./components/views/Products.js";
import Orders from "./components/views/Orders.js";
import Login from "./components/views/Login.js";
import Register from "./components/views/Register.js";

const routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 ",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/orders",
    name: "Orders",
    icon: "ni ni-cart ",
    component: Orders,
    layout: "/admin",
  },
  {
    path: "/products",
    name: "Products",
    icon: "ni ni-tag ",
    component: Products,
    layout: "/admin",
  },
  {
    path: "/settings",
    name: "Settings",
    icon: "ni ni-settings ",
    component: AccountSettings,
    layout: "/admin",
  },
];

export default routes;
