/**
 * @format
 */

import React, { useEffect, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import ProductDetails from "../pages/products/ProductDetails";
import OrderDetails from "../pages/orders/OrderDetails";

import SettingsLayout from "./Settings";

import routes from "../routes";

import locaryLogo from "../assets/img/brand/locary-logo.png";

import { instance as axios, getUserToken } from "../axios";
import LoginContext from "../contexts/LoginContext";

const Admin = (props) => {
  const { location } = props;
  const { setUserOrders, setUserInventory } = useContext(LoginContext);
  const mainContent = React.useRef(null);

  const updateCacheData = () => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get("/orders", {
          headers: {
            Authorization: `Bearer ${getUserToken()}`,
          },
        });
        const orderMap = {};
        data.forEach((order, index) => {
          const letterID = `${order.buyer.firstName}${order.buyer.lastName}`
            .substring(0, 3)
            .toUpperCase();
          let numberID = 1;
          if (orderMap[letterID] !== undefined) orderMap[letterID] += 1;
          else orderMap[letterID] = numberID;
          numberID = `00${orderMap[letterID]}`.substring(0, 3);
          data[index].simplifiedID = `${letterID}${numberID}`;
        });
        data.reverse();
        setUserOrders(data);
      } catch (e) {
        console.error(e);
      }
    };
    const fetchInventory = async () => {
      try {
        const { data } = await axios.get("products", {
          headers: { Authorization: `Bearer ${getUserToken()}` },
        });
        setUserInventory(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchOrders();
    fetchInventory();
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
    updateCacheData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (path.indexOf(routes[i].layout + routes[i].path) !== -1) {
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
          imgSrc: locaryLogo,
          imgAlt: "...",
        }}
      />
      <div
        className="main-content"
        style={{ backgroundColor: "#F4F6FA" }}
        ref={mainContent}
      >
        <Navbar
          {...props}
          brandText={getBrandText(location.pathname)}
          updateCacheData={updateCacheData}
        />
        <Switch>
          {/* eslint-disable react/no-array-index-key */}
          {routes.map((prop, key) => {
            if (prop.layout === "/admin") {
              return (
                <Route
                  path={prop.layout + prop.path}
                  key={key}
                  component={prop.component}
                  exact
                />
              );
            }
            return null;
          })}
          <Route path="/admin/settings" component={SettingsLayout} />
          <Route
            exact
            path="/admin/products/:name"
            component={ProductDetails}
          />
          <Route exact path="/admin/orders/:orderID" component={OrderDetails} />
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
