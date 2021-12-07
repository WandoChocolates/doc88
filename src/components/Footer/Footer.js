import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <React.Fragment>
      <div className="footer" id="footer">
        <div className="mainpart">
          <div className="copyright">
            <p>
              道客巴巴网站
              版权所有&nbsp;&nbsp;|&nbsp;©2008-2021&nbsp;&nbsp;|&nbsp;&nbsp;网站备案：
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                京ICP备18056798号-1
              </a>
              &nbsp;&nbsp;京公网安备1101082111号
            </p>
          </div>
          <div className="tel">
            <a
              href="http://www.doc88.com/help/contact.html"
              target="_blank"
              rel="noopener noreferrer"
              class="service-qq"
              title="在线客服"
            ></a>
          </div>
        </div>
      </div>
      {/* end footer */}
      <react-comment> end footer </react-comment>
    </React.Fragment>
  );
}
