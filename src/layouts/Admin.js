import React from "react";
import {
  useLocation, Route, Switch, Redirect
} from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Sidebar from "../components/Sidebar.js";
import ProductDetails from "../components/views/ProductDetails.js";

import routes from "../routes.js";

const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => routes.map((prop, key) => {
    if (prop.layout === "/admin") {
      return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
            exact
          />
      );
    }
    return null;
  });

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path)
        !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("../assets/img/brand/locary-logo.png").default,
          imgAlt: "...",
        }}
      />
      <div className="main-content" style={{ backgroundColor: "#F4F6FA" }} ref={mainContent}>
        <Navbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>
          {getRoutes(routes)}
          <Route exact path="/admin/products/:name" component={ProductDetails} />
          <Redirect from="*" to="/admin/index" />
        </Switch>
        <Container fluid>
          <Footer />
        </Container>
      </div>
    </>
  );
};

export default Admin;
