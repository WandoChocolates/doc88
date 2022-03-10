import React from "react";
import "./Content.css";

import ContentBoxRight from "./ContentBoxRight/ContentBoxRight";
import ContentBoxLeft from "./ContentBoxLeft/ContentBoxLeft";

export default function Content() {
  return (
    <React.Fragment>
      <div class="content">
        <div class="mainpart" id="mainpart">
          <div class="layout02" id="mainPanel">
            <div class="boxleft" id="boxleft">
              <ContentBoxLeft />
            </div>
            <div class="boxright" id="boxright">
              <ContentBoxRight />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
