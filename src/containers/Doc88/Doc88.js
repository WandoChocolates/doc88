import React from "react";
import "./Doc88.scss";

import Header from "../../components/Header/Header";
import ToolBar from "../../components/ToolBar/ToolBar";
import Content from "../Content/Content";
import ActiveList from "../../components/ActiveList/ActiveList";
import Footer from "../../components/Footer/Footer";

import TopLayerShop from "../../components/TopLayerShop/TopLayerShop";

export default function Doc88() {
  return (
    <React.Fragment>
      <Header />
      <ToolBar />
      <Content />
      <TopLayerShop />
      <ActiveList />
      <Footer />
    </React.Fragment>
  );
}
