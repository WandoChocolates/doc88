import React from "react";
import "./ContentBoxRight.css";

export default function ContentBoxRight() {
  return (
    <React.Fragment>
      <div></div>
      <button className="btndown2" id="btndown2">
        <i class="iconfont"></i>
        下载此文档
      </button>
      <ul className="side-tab">
        <li tab_id="rel_tab" className="current" id="reg_tab_li">
          相关
        </li>
        <li tab_id="catalog_tab" id="catalog_tab_li">
          目录
        </li>
        <li tab_id="note_tab" id="note_tab_li">
          笔记
        </li>
        <li tab_id="bookmark_tab" id="bookmark_tab_li">
          书签
        </li>
      </ul>
      <div className="stab-con" id="rel-tab">
        <div>
          <div class="sd-side">
            <h3>
              <a
                href="/tag/金属切削机床型号编制方法(国家标准)"
                target="_blank"
                class="sd-more"
              >
                更多
              </a>
              相关文档
            </h3>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="dk-side">
        <div className="iamge1">
          <a
            href="javascript:downloaddkclient(3)"
            title="下载稻壳阅读器"
            class="dk-side-btn"
          >
            下载稻壳阅读器
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
