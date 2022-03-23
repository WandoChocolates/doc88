import React from "react";
import "./ActiveList.scss";

export default function ActiveList() {
  return (
    <React.Fragment>
      <div class="activelist">
        <div class="mainpart">
          <div class="columns">
            <h3>
              <a href="/help/about.html" target="_blank">
                关于我们
              </a>
            </h3>
            <ul>
              <li>
                <a href="/help/about.html" target="_blank">
                  关于道客巴巴
                </a>
              </li>
              <li>
                <a href="/help/join_wysjs.html" target="_blank">
                  人才招聘
                </a>
              </li>
              <li>
                <a href="/help/contact.html" target="_blank">
                  联系我们
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/help/copyright_bqsm.html" target="_blank">
                  网站声明
                </a>
              </li>
              <li>
                <a href="/help/websitemap.html" target="_blank">
                  网站地图
                </a>
              </li>
              <li>
                <a href="/app.html" target="_blank">
                  APP下载
                </a>
              </li>
            </ul>
          </div>
          <div class="columns">
            <h3>
              <a href="/help/help_list.html" target="_blank">
                帮助中心
              </a>
            </h3>
            <ul>
              <li>
                <a href="/help/help_info_1_1.html" target="_blank">
                  会员注册
                </a>
              </li>
              <li>
                <a href="/help/help_info_4_18.html" target="_blank">
                  文档下载
                </a>
              </li>
              <li>
                <a href="/help/help_info_4_19.html" target="_blank">
                  如何获取积分
                </a>
              </li>
            </ul>
          </div>
          <div class="columns">
            <h3>关注我们</h3>
            <ul>
              <li>
                <a
                  href="http://weibo.com/doc88"
                  target="_blank"
                  class="weibo"
                  rel="noreferrer"
                >
                  新浪微博
                </a>
              </li>
            </ul>
          </div>
          <div class="columns-ad">
            <div class="qrcode">
              <img
                alt="weixin"
                src="http://static.doc88.com/assets/images/weixin.jpg"
              />
              <p>关注微信公众号</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
