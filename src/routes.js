import Home from "./pages/home/Home";
import AccountSettings from "./pages/settings/AccountSettings";
import Products from "./pages/products/Products";
import Orders from "./pages/orders/Orders";
import Login from "./components/Login";
import Register from "./components/Register";

const routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 ",
    component: Home,
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
