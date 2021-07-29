import Index from "./components/views/Index";
import AccountSettings from "./components/views/AccountSettings";
import Products from "./components/views/Products";
import Orders from "./components/views/Orders";
import Login from "./components/views/Login";
import Register from "./components/views/Register";

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
