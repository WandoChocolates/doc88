import React from "react";
import "./ToolBar.scss";

import { Icon } from "semantic-ui-react";

export default function ToolBar() {
  return (
    <React.Fragment>
      <div class="toolbar" id="toolbar">
        <div class="mainpart">
          <div class="tb-item">
            <button class="btnmin" id="btndown1">
              <i class="iconfont">
                <Icon name="download" />
              </i>
              下载
            </button>
            <button class="btnmin3" id="print_btn">
              <i class="iconfont">
                <Icon name="print" />
              </i>
              打印
            </button>
          </div>
          <div class="line"></div>
          <ul class="tb-item" id="item-page-panel">
            <li class="disable">
              <a href="http://www.doc88.com" title="上一页" id="prePageButton">
                <i class="iconfont">
                  <Icon name="angle left" />
                </i>
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
                <i class="iconfont">
                  <Icon name="angle right" />
                </i>
              </a>
            </li>
            <li class="line"></li>
            <li>
              <a href="http://www.doc88.com" title="放大" id="zoomInButton">
                <i class="iconfont">
                  <Icon name="zoom-in" />
                </i>
              </a>
            </li>
            <li>
              <a href="http://www.doc88.com" title="缩小" id="zoomOutButton">
                <i class="iconfont">
                  <Icon name="zoom-out" />
                </i>
              </a>
            </li>
          </ul>
          <div class="line"></div>

          <div class="tb-item" id="item-doc-panel">
            <div class="doc-item" id="doc-view">
              <span class="tool">
                <i class="iconfont">
                  <Icon name="copy outline" />
                </i>
                视图
              </span>
            </div>
            <div class="doc-item" id="doc-sign" type="highlight" text="高亮">
              <span class="tool">
                <i class="iconfont">
                  <Icon name="signup" />
                </i>
                标记
              </span>
              <i class="iconfont more">
                <Icon name="angle down" />
              </i>
            </div>
            <div class="doc-item" id="doc-note" type="shape">
              <span class="tool">
                <i class="iconfont">
                  <Icon name="write" />
                </i>
                批注
              </span>
              <i class="iconfont more">
                <Icon name="angle down" />
              </i>
            </div>
          </div>
          <div class="line"></div>
          <div class="tb-item" id="item-search-panel">
            <form class="min-search-form" action="" onsubmit="return false;">
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
              <span class="min-btn" id="docSearchButton" title="搜全文">
                <i class="iconfont">
                  <Icon name="search" />
                </i>
              </span>
            </form>
          </div>

          <ul class="tb-item fr">
            <li id="li_save" class="disable">
              <a href="http://www.doc88.com" title="保存" id="btn_save">
                <i class="iconfont">
                  <Icon name="save outline" />
                </i>
              </a>
            </li>
            <li id="collect_btn">
              <a href="http://www.doc88.com" title="收藏">
                <i class="iconfont">
                  <Icon name="star outline" />
                </i>
              </a>
            </li>
            <li onclick="add_corpus()">
              <a href="http://www.doc88.com" title="加入文辑">
                <i class="iconfont">
                  <Icon name="add square" />
                </i>
              </a>
            </li>
            <div class="line"></div>
            <li id="complaintButton">
              <a href="http://www.doc88.com" title="举报此文档">
                <i class="iconfont">
                  <Icon name="bell outline" />
                </i>
              </a>
            </li>
            <li id="claimButton">
              <a href="http://www.doc88.com" title="认领此文档">
                <i class="iconfont">
                  <Icon name="check square outline" />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
