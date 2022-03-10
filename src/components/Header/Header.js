import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <React.Fragment>
      <div className="header" id="header">
        <div class="mainpart">
          <div class="main-header">
            <div class="logo">
              <a href="http://www.doc88.com/">
                <div class="logoimg"></div>
              </a>
            </div>
            <div class="mainnav">
              <ul class="nav">
                <li>
                  <a href="/">首页</a>
                </li>
                <li class="dropdown">
                  <a href="/list.html">
                    文档 <span class="arrow"></span>
                  </a>
                </li>
                <li>
                  <a href="/t-list.html">任务</a>
                </li>
                <li>
                  <a href="/b-list.html">文辑</a>
                </li>
                <li>
                  <a
                    href="https://www.daokeyuedu.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    阅读器
                  </a>
                </li>
              </ul>
            </div>
            <div class="usershop">
              <ul class="login-bar-con">
                <li id="loginBar">
                  <div class="user1">
                    <a class="login" href="/">
                      登录
                    </a>
                  </div>
                </li>
              </ul>
              <ul class="search-bar-con">
                <li class="shop1">
                  <div class="search-nav">
                    <form
                      class="bigsearch"
                      id="searchForm"
                      method="post"
                      target="_blank"
                    >
                      <input
                        type="text"
                        placeholder=" 在道客巴巴十亿文档库中搜索..."
                        class="stext"
                        id="keyword"
                      />
                      <input type="submit" class="sbtncss" value="" />
                    </form>
                  </div>
                </li>
                <li class="shop1 last">
                  <button type="button" title="上传文档" class="btnupload3">
                    <i class="iconfont"></i> 上传文档
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="skin-peeler">
          <a href="#"></a>
        </div>
        <div class="skintips"></div>
      </div>
    </React.Fragment>
  );
}
