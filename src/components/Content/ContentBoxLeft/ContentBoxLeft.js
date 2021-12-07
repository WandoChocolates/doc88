import React from "react";
import "./ContentBoxLeft.css";

import PptContainer from "./PptContainer";

export default function ContentBoxLeft() {
  return (
    <React.Fragment>
      <div class="commonbox2 doctopbox" id="box1"></div>
      <div id="pptContainer">
        <PptContainer />
      </div>
      <div class="commonbox1"></div>
      <div id="commentDiv"></div>
    </React.Fragment>
  );
}
