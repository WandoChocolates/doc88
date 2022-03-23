import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <React.Fragment>
      <div class="footer" id="footer">
        <div class="mainpart">
          <div class="copyright">
            <p>
              道客巴巴网站
              版权所有&nbsp;&nbsp;|&nbsp;©2008-2021&nbsp;&nbsp;|&nbsp;&nbsp;网站备案：
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noreferrer"
              >
                京ICP备18056798号-1
              </a>
              &nbsp;&nbsp;京公网安备1101082111号
            </p>
          </div>
          <div class="tel">
            <a
              href="/help/contact.html"
              target="_blank"
              rel="noreferrer"
              class="service-qq"
              title="在线客服"
            >
              {" "}
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
