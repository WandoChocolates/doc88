import React from "react";
import "./ToolBar.scss";

export default function ToolBar() {
  return (
    <React.Fragment>
      <div class="toolbar" id="toolbar">
        <div class="mainpart clearfix" style={{ position: "relative" }}>
          <div class="tb-item">
            <button class="btnmin" id="btndown1">
              <i class="iconfont"></i> 下载
            </button>
            <button class="btnmin3" id="print_btn">
              <i class="iconfont"></i> 打印
            </button>
          </div>
          <div class="line"></div>
          <ul class="tb-item" id="item-page-panel">
            <li class="disable">
              <a href="http://www.doc88.com" title="上一页" id="prePageButton">
                <i class="iconfont"></i>
              </a>
            </li>
            <li class="text">
              <input
                class="num"
                type="text"
                value="1"
                id="pageNumInput"
                autocomplete="off"
              />{" "}
              / 61
            </li>
            <li>
              <a href="http://www.doc88.com" title="下一页" id="nextPageButton">
                <i class="iconfont"></i>
              </a>
            </li>
            <li class="line"></li>
            <li>
              <a href="http://www.doc88.com" title="放大" id="zoomInButton">
                <i class="iconfont"></i>
              </a>
            </li>
            <li>
              <a href="http://www.doc88.com" title="缩小" id="zoomOutButton">
                <i class="iconfont"></i>
              </a>
            </li>
          </ul>
          <div class="line"></div>

          <div class="tb-item" id="item-doc-panel">
            <div class="doc-item" id="doc-view">
              <div
                class="item-edit-con"
                id="docview_pro_panel"
                style={{ display: "none" }}
              >
                <div class="panel-list" id="doc-panel-view">
                  <div class="panel-title">视图设置</div>
                  <ul class="panel-type">
                    <li class="disable">
                      <a
                        href="http://www.doc88.com"
                        title="单页"
                        id="listModelButton"
                      >
                        <i class="iconfont"></i>
                        <span>单页</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://www.doc88.com"
                        title="双页"
                        id="dblModelButton"
                      >
                        <i class="iconfont"></i>
                        <span>双页</span>
                      </a>
                    </li>
                    <li style={{ display: "none" }}>
                      <a href="http://www.doc88.com" title="全屏" id="frscreen">
                        <i class="iconfont"></i>
                        <span>全屏</span>
                      </a>
                    </li>
                    <li style={{ display: "none" }}>
                      <a
                        href="http://www.doc88.com"
                        title="恢复"
                        id="quitFrscreen"
                      >
                        <i class="iconfont"></i>
                        <span>恢复</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://www.doc88.com"
                        title="缩略图"
                        id="thumbModelButton"
                      >
                        <i class="iconfont"></i>
                        <span>缩略图</span>
                      </a>
                    </li>
                    <li style={{}}>
                      <a
                        href="http://www.doc88.com"
                        title="幻灯片"
                        id="pptModelButton"
                      >
                        <i class="iconfont"></i>
                        <span>幻灯片</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <span class="tool">
                <i class="iconfont"></i>视图
              </span>
            </div>
            <div class="doc-item" id="doc-sign" type="highlight" text="高亮">
              <span class="tool">
                <i class="iconfont"></i>
                <b>标记</b>
              </span>
              <i class="iconfont more"></i>
            </div>
            <div class="doc-item" id="doc-note" type="shape">
              <span class="tool">
                <i class="iconfont"></i>
                <b>批注</b>
              </span>
              <i class="iconfont more"></i>
            </div>
          </div>
          <div class="line"></div>
          <ul class="tb-item" id="min-screen-search">
            <li>
              <a href="http://www.doc88.com" title="搜索" id="">
                <i class="iconfont"></i>
              </a>
            </li>
            <li class="line"></li>
          </ul>
          <div class="tb-item" id="item-search-panel">
            <form class="min-search-form" action="" onsubmit="return false;">
              <span class="min-btn" id="docSearchButton" title="搜全文">
                <i class="iconfont"></i>
              </span>
              <span class="min-text">
                <input
                  type="text"
                  onfocus="this.placeholder=''"
                  onblur="if(this.value=='')this.placeholder=' 搜全文...';"
                  placeholder=" 搜全文..."
                  id="docKeywordInput"
                  autocomplete="off"
                />
              </span>
            </form>
            <div class="min-search-result" id="min-search-result">
              <div
                class="search-range-item"
                style={{ display: "none" }}
                id="search-way-doc"
              >
                <a
                  class="sug-btn"
                  href="http://www.doc88.com"
                  id="docSearchButton2"
                >
                  搜本文档
                </a>
                <span
                  class="min-btn"
                  id="docSearchLoad"
                  style={{ display: "none" }}
                >
                  <img
                    src="http://static.doc88.com/assets/images/subloading.gif"
                    alt=""
                  />
                </span>
                <i class="iconfont"></i>
                <b></b>
              </div>
              <div
                class="search-range-item"
                style={{ display: "none" }}
                id="search-way-all"
              >
                <a
                  class="sug-btn"
                  href="http://www.doc88.com"
                  id="searchTextSiteButton"
                >
                  搜全站
                </a>
                <i class="iconfont"></i>
                <b></b>
              </div>
              <div
                class="search-range-item"
                style={{ display: "none" }}
                id="textSearchResultDiv"
              >
                <i class="iconfont"></i>
                <b></b>
                <span
                  class="s-result iconfont"
                  id="searchExitButton"
                  title="关闭搜索"
                >
                  
                </span>
                <span
                  class="s-result iconfont"
                  id="preSearchButton"
                  title="下一个"
                >
                  
                </span>
                <span
                  class="s-result iconfont"
                  id="nextSearchButton"
                  title="上一个"
                >
                  
                </span>
                <span class="s-result text" id="searchNoSpan"></span>
                <span class="s-result text" id="searchResultSpan">
                  <span id="currentIndexSpan">1</span> /{" "}
                  <span id="totalResultSpan">1</span>
                </span>
              </div>
              <div class="search-else-tips"></div>
            </div>
          </div>
          <div class="save-tips">
            批注本地保存成功，开通会员云端永久保存{" "}
            <span class="vip-btn">
              去开通 <i class="iconfont"></i>
            </span>
            <i class="iconfont save-closed"></i>
          </div>
          <ul class="tb-item fr">
            <li id="li_save" class="disable">
              <a href="http://www.doc88.com" title="保存" id="btn_save">
                <i class="iconfont"></i>
              </a>
            </li>
            <li id="collect_btn">
              <a href="http://www.doc88.com" title="收藏">
                <i class="iconfont"></i>
              </a>
            </li>
            <li onclick="add_corpus()">
              <a href="http://www.doc88.com" title="加入文辑">
                <i class="iconfont"></i>
              </a>
            </li>
            <li class="line"></li>
            <li id="complaintButton">
              <a href="http://www.doc88.com" title="举报此文档">
                <i class="iconfont"></i>
              </a>
            </li>
            <li id="claimButton">
              <a href="http://www.doc88.com" title="认领此文档">
                <i class="iconfont"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
