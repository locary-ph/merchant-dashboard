import React from "react";
import {
  Route, Switch, Redirect
} from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import ProductDetails from "../pages/products/ProductDetails";

import routes from "../routes";

const Admin = (props) => {
  const { location } = props;

  const mainContent = React.useRef(null);

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);


  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        path.indexOf(routes[i].layout + routes[i].path)
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
          brandText={getBrandText(location.pathname)}
        />
        <Switch>
          {routes.map((prop, key) => {
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
          })}
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
