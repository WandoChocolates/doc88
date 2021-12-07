import React from "react";
import "./PptContainer.css";

export default function PptContainer() {
  return (
    <React.Fragment>
      <div class="page_view" id="pageContainer">
        <Page />
        <Page />
        <Page />
        <PageAd />
        <Page />
        <Page />
      </div>
      <div class="surplus" id="continue_page"></div>
    </React.Fragment>
  );
}

export function Page() {
  return (
    <React.Fragment>
      <div class="outer_page" id="outer_page_1" px="101" py="183">
        <canvas
          className="postil_page"
          zoom="1"
          id="postil_1"
          width="890"
          height="1280"
        ></canvas>
        <canvas
          className="inner_page"
          zoom="1"
          ls="1"
          ss="0"
          id="page_1"
          fs="0"
          lz="1"
          width="890"
          height="1280"
        ></canvas>
      </div>
    </React.Fragment>
  );
}

export function PageAd() {
  return (
    <React.Fragment>
      <div class="page_ad" style={{ position: "relative", height: 100 }}>
        <div
          class="dk-bg"
          style={{
            position: "absolute",
            zIndex: 998,
            width: "100%",
            overflow: "hidden"
          }}
          id="gg_3"
          loadif="1"
        >
          <div class="dk-con">
            <a href="#" class="dk-btns">
              下载稻壳阅读器
            </a>
            <h3>安装稻壳阅读器，免费下载道客巴巴文档</h3>
            <p>复制文字、整理笔记、在线搜索、文档打印、更多功能等着您！</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
