import Home from "./pages/home/Home";
import AccountSettings from "./pages/settings/AccountSettings";
import Products from "./pages/products/Products";
import Orders from "./pages/orders/Orders";
// import Login from "./components/Login";
// import Register from "./components/Register";

const routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "fas fa-home ",
    component: Home,
    layout: "/admin",
  },
  {
    path: "/orders",
    name: "Orders",
    icon: "fas fa-shopping-cart ",
    component: Orders,
    layout: "/admin",
  },
  {
    path: "/products",
    name: "Products",
    icon: "fas fa-store ",
    component: Products,
    layout: "/admin",
  },
  {
    path: "/settings",
    name: "Settings",
    icon: "fas fa-cog ",
    component: AccountSettings,
    layout: "/admin",
  },
];

export default routes;
