import React from "react";

import Header from "../Header/Header";
import ToolBar from "../ToolBar/ToolBar";
import Content from "../Content/Content";
import ActiveList from "../ActiveList/ActiveList";
import Footer from "../Footer/Footer";

export default function Doc88() {
  return (
    <React.Fragment>
      <Header />
      <ToolBar />
      <Content />
      <ActiveList />
      <Footer />
    </React.Fragment>
  );
}
