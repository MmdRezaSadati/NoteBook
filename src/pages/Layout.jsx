import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet/>
    </Fragment>
  );
};

export default Layout;
