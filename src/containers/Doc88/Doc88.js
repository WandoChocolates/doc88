import React from "react";
import "./Doc88.scss";

import Header from "../../components/Header/Header";
import ToolBar from "../../components/ToolBar/ToolBar";
import Content from "../Content/Content";
import ActiveList from "../../components/ActiveList/ActiveList";
import Footer from "../../components/Footer/Footer";

import TopLayerShop from "../../components/Copy/Copy";

export default function Doc88() {
  return (
    <React.Fragment>
      <Header />
      <ToolBar />
      <Content />
      <ActiveList />
      <TopLayerShop />
      <Footer />
    </React.Fragment>
  );
}
