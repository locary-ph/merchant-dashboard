import Home from "./pages/home/Home";
import AccountSettings from "./pages/settings/AccountSettings";
import ShopSettings from "./pages/settings/ShopSettings";
import PaymentSettings from "./pages/settings/PaymentSettings";
import DeliverySettings from "./pages/settings/DeliverySettings";
import Products from "./pages/products/Products";
import Orders from "./pages/orders/Orders";
import Login from "./components/Login";
import Register from "./components/Register";

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
    path: "/account",
    name: "Account Settings",
    component: AccountSettings,
    layout: "/admin/settings",
  },
  {
    path: "/shop",
    name: "Shop Settings",
    component: ShopSettings,
    layout: "/admin/settings",
  },
  {
    path: "/payment",
    name: "Payment Settings",
    component: PaymentSettings,
    layout: "/admin/settings",
  },
  {
    path: "/delivery",
    name: "Delivery Options",
    component: DeliverySettings,
    layout: "/admin/settings",
  },
  {
    path: "/login",
    name: "Login",
    icon: "",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/signup",
    name: "Sign Up",
    icon: "",
    component: Register,
    layout: "/auth",
  },
];

export default routes;
