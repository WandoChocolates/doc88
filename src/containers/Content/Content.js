import React from "react";
import "./Content.scss";

import ContentBoxRight from "./ContentBoxRight/ContentBoxRight";
import ContentBoxLeft from "./ContentBoxLeft/ContentBoxLeft";

export default function Content() {
  return (
    <React.Fragment>
      <div class="content">
        <div class="mainpart" id="mainpart" style={{ width: "1152px" }}>
          <div class="layout02" id="mainPanel">
            <div class="boxright hide" id="boxright-catalog"></div>
            <div
              class="boxright"
              id="boxright"
              style={{ position: "static", left: "1001.5px", top: "48px" }}
            >
              <div class="commonbox3" id="box3">
                <div class="box">
                  <div class="usercard">
                    <dl class="imgtxt01">
                      <dt>
                        <img
                          src="http://static.doc88.com/assets/images/m.jpg"
                          alt="m"
                        />
                      </dt>
                      <dd>
                        <h5>
                          <a
                            href="/dd6eb70cbc052bdab255c6e4cf45b107"
                            target="_blank"
                            title="1593362"
                          >
                            1593362
                          </a>
                          <a
                            href="http://www.doc88.com"
                            title="给TA发私信"
                            class="mail"
                          >
                            <i class="iconfont"></i>
                          </a>
                        </h5>
                        <p class="upload-time">上传于：2015-04-05</p>
                        <p>粉丝量：0</p>
                      </dd>
                    </dl>

                    <div class="dropbox">
                      <div class="weibo">
                        <p>该文档贡献者很忙，什么也没留下。</p>
                      </div>
                    </div>
                    <a href="http://www.doc88.com" title="展开" class="drop">
                      <i class="iconfont"></i>
                    </a>
                  </div>
                </div>
              </div>
              <button class="btndown2" id="btndown2">
                <i class="iconfont"></i> 下载此文档
              </button>
              <span style={{ display: "none" }}>
                <button class="btn" onclick="download_scan()">
                  <i class="iconfont"></i> 直接下载
                </button>
              </span>
              <ul class="side-tab" style={{ display: "block" }}>
                <li tab_id="rel_tab" class="current" id="reg_tab_li">
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
              <div class="stab-con" id="rel_tab" style={{ display: "block" }}>
                <div
                  class="commonbox6"
                  id="relatebox"
                  style={{ padding: "0 0" }}
                >
                  <div class="sd-side">
                    <h3>
                      <a
                        href="/tag/金属切削机床型号编制方法(国家标准)"
                        target="_blank"
                        class="sd-more"
                      >
                        更多
                      </a>
                      相关文档{" "}
                    </h3>
                    <ul class="sd-side-box">
                      <li>
                        <a
                          onclick="Common.doEvent('rel_doc_1')"
                          href="https://www.doc88.com/p-1853465567297.html?s=rel&amp;id=1"
                          target="_blank"
                          rel="noreferrer"
                          title="金属切削机床型号编制方法（国家标准）"
                        >
                          <img
                            src="http://static.doc88.com/assets/images/icons/type/PDF.png"
                            alt=""
                          />
                          <span class="sd-side-con">
                            <p class="title" id="hl_1853465567297_1">
                              <em>金</em>
                              <em>属</em>
                              <em>切</em>
                              <em>削</em>
                              <em>机</em>
                              <em>床</em>
                              <em>型</em>
                              <em>号</em>
                              <em>编</em>
                              <em>制</em>
                              <em>方</em>
                              <em>法</em>（<em>国</em>
                              <em>家</em>
                              <em>标</em>
                              <em>准</em>）
                            </p>
                            <p class="sd-side-hot">
                              星级：
                              <i class="iconfont current"></i>
                              <i class="iconfont current"></i>
                              <i class="iconfont current"></i>
                              <i class="iconfont current"></i>
                              <i class="iconfont"></i>
                              <span class="sd-side-pages">61 页</span>
                            </p>
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          onclick="Common.doEvent('rel_doc_2')"
                          href="https://www.doc88.com/p-5814402813357.html?s=rel&amp;id=2"
                          target="_blank"
                          rel="noreferrer"
                          title="金属切削机床型号编制方法(国家标准)"
                        >
                          <img
                            src="http://static.doc88.com/assets/images/icons/type/PDF.png"
                            alt=""
                          />
                          <span class="sd-side-con">
                            <p class="title" id="hl_5814402813357_1">
                              <em>金</em>
                              <em>属</em>
                              <em>切</em>
                              <em>削</em>
                              <em>机</em>
                              <em>床</em>
                              <em>型</em>
                              <em>号</em>
                              <em>编</em>
                              <em>制</em>
                              <em>方</em>
                              <em>法</em>(<em>国</em>
                              <em>家</em>
                              <em>标</em>
                              <em>准</em>)
                            </p>
                            <p class="sd-side-hot">
                              星级：
                              <i class="iconfont current"></i>
                              <i class="iconfont current"></i>
                              <i class="iconfont current"></i>
                              <i class="iconfont"></i>
                              <i class="iconfont"></i>
                              <span class="sd-side-pages">61 页</span>
                            </p>
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          onclick="Common.doEvent('rel_doc_3')"
                          href="https://www.doc88.com/p-37931397408.html?s=rel&amp;id=3"
                          target="_blank"
                          rel="noreferrer"
                          title="金属切削机床型号编制方法"
                        >
                          <img
                            src="http://static.doc88.com/assets/images/icons/type/PDF.png"
                            alt=""
                          />
                          <span class="sd-side-con">
                            <p class="title" id="hl_37931397408_1">
                              <em>金</em>
                              <em>属</em>
                              <em>切</em>
                              <em>削</em>
                              <em>机</em>
                              <em>床</em>
                              <em>型</em>
                              <em>号</em>
                              <em>编</em>
                              <em>制</em>
                              <em>方</em>
                              <em>法</em>
                            </p>
                            <p class="sd-side-hot">
                              星级：
                              <i class="iconfont current"></i>
                              <i class="iconfont current"></i>
                              <i class="iconfont current"></i>
                              <i class="iconfont current"></i>
                              <i class="iconfont"></i>
                              <span class="sd-side-pages">2 页</span>
                            </p>
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          onclick="Common.doEvent('rel_doc_4')"
                          href="https://www.doc88.com/p-64259058694630.html?s=rel&amp;id=4"
                          target="_blank"
                          rel="noreferrer"
                          title="金属切削机床  型号编制方法"
                        >
                          <img
                            src="http://static.doc88.com/assets/images/icons/type/PDF.png"
                            alt=""
                          />
                          <span class="sd-side-con">
                            <p class="title" id="hl_64259058694630_1">
                              <em>金</em>
                              <em>属</em>
                              <em>切</em>
                              <em>削</em>
                              <em>机</em>
                              <em>床</em>
                              <em> </em>
                              <em> </em>
                              <em>型</em>
                              <em>号</em>
                              <em>编</em>
                              <em>制</em>
                              <em>方</em>
                              <em>法</em>
                            </p>
                            <p class="sd-side-hot">
                              星级：
                              <i class="iconfont current"></i>
                              <i class="iconfont current"></i>
                              <i class="iconfont current"></i>
                              <i class="iconfont"></i>
                              <i class="iconfont"></i>
                              <span class="sd-side-pages">61 页</span>
                            </p>
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          onclick="Common.doEvent('rel_doc_5')"
                          href="https://www.doc88.com/p-0943162432711.html?s=rel&amp;id=5"
                          target="_blank"
                          rel="noreferrer"
                          title="金属切削机床 型号编制方法"
                        >
                          <img
                            src="http://static.doc88.com/assets/images/icons/type/PDF.png"
                            alt=""
                          />
                          <span class="sd-side-con">
                            <p class="title" id="hl_0943162432711_1">
                              <em>金</em>
                              <em>属</em>
                              <em>切</em>
                              <em>削</em>
                              <em>机</em>
                              <em>床</em>
                              <em> </em>
                              <em>型</em>
                              <em>号</em>
                              <em>编</em>
                              <em>制</em>
                              <em>方</em>
                              <em>法</em>
                            </p>
                            <p class="sd-side-hot">
                              星级：
                              <i class="iconfont current"></i>
                              <i class="iconfont current"></i>
                              <i class="iconfont current"></i>
                              <i class="iconfont current"></i>
                              <i class="iconfont"></i>
                              <span class="sd-side-pages">41 页</span>
                            </p>
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          onclick="Common.doEvent('rel_doc_6')"
                          href="https://www.doc88.com/p-0621514284918.html?s=rel&amp;id=6"
                          target="_blank"
                          rel="noreferrer"
                          title="金属切削机床 型号编制方法"
                        >
                          <img
                            src="http://static.doc88.com/assets/images/icons/type/PDF.png"
                            alt=""
                          />
                          <span class="sd-side-con">
                            <p class="title" id="hl_0621514284918_1">
                              <em>金</em>
                              <em>属</em>
                              <em>切</em>
                              <em>削</em>
                              <em>机</em>
                              <em>床</em>
                              <em> </em>
                              <em>型</em>
                              <em>号</em>
                              <em>编</em>
                              <em>制</em>
                              <em>方</em>
                              <em>法</em>
                            </p>
                            <p class="sd-side-hot">
                              星级：
                              <i class="iconfont current"></i>
                              <i class="iconfont current"></i>
                              <i class="iconfont current"></i>
                              <i class="iconfont"></i>
                              <i class="iconfont"></i>
                              <span class="sd-side-pages">61 页</span>
                            </p>
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          onclick="Common.doEvent('rel_doc_7')"
                          href="https://www.doc88.com/p-70459576901359.html?s=rel&amp;id=7"
                          target="_blank"
                          rel="noreferrer"
                          title="金属切削机床 型号编制方法"
                        >
                          <img
                            src="http://static.doc88.com/assets/images/icons/type/PDF.png"
                            alt=""
                          />
                          <span class="sd-side-con">
                            <p class="title" id="hl_70459576901359_1">
                              <em>金</em>
                              <em>属</em>
                              <em>切</em>
                              <em>削</em>
                              <em>机</em>
                              <em>床</em>
                              <em> </em>
                              <em>型</em>
                              <em>号</em>
                              <em>编</em>
                              <em>制</em>
                              <em>方</em>
                              <em>法</em>
                            </p>
                            <p class="sd-side-hot">
                              星级：
                              <i class="iconfont current"></i>
                              <i class="iconfont current"></i>
                              <i class="iconfont current"></i>
                              <i class="iconfont"></i>
                              <i class="iconfont"></i>
                              <span class="sd-side-pages">41 页</span>
                            </p>
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          onclick="Common.doEvent('rel_doc_8')"
                          href="https://www.doc88.com/p-7476384108278.html?s=rel&amp;id=8"
                          target="_blank"
                          rel="noreferrer"
                          title="1.8 金属切削机床的分类与型号编制方法"
                        >
                          <img
                            src="http://static.doc88.com/assets/images/icons/type/PPT.png"
                            alt=""
                          />
                          <span class="sd-side-con">
                            <p class="title" id="hl_7476384108278_1">
                              1.8<em> </em>
                              <em>金</em>
                              <em>属</em>
                              <em>切</em>
                              <em>削</em>
                              <em>机</em>
                              <em>床</em>的分类与<em>型</em>
                              <em>号</em>
                              <em>编</em>
                              <em>制</em>
                              <em>方</em>
                              <em>法</em>
                            </p>
                            <p class="sd-side-hot">
                              星级：
                              <i class="iconfont current"></i>
                              <i class="iconfont current"></i>
                              <i class="iconfont current"></i>
                              <i class="iconfont"></i>
                              <i class="iconfont"></i>
                              <span class="sd-side-pages">30 页</span>
                            </p>
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          onclick="Common.doEvent('rel_doc_9')"
                          href="https://www.doc88.com/p-3465370822911.html?s=rel&amp;id=9"
                          target="_blank"
                          rel="noreferrer"
                          title=".金属切削机床的分类与型号编制方法(精品)"
                        >
                          <img
                            src="http://static.doc88.com/assets/images/icons/type/PPT.png"
                            alt=""
                          />
                          <span class="sd-side-con">
                            <p class="title" id="hl_3465370822911_1">
                              .<em>金</em>
                              <em>属</em>
                              <em>切</em>
                              <em>削</em>
                              <em>机</em>
                              <em>床</em>的分类与<em>型</em>
                              <em>号</em>
                              <em>编</em>
                              <em>制</em>
                              <em>方</em>
                              <em>法</em>(精品)
                            </p>
                            <p class="sd-side-hot">
                              星级：
                              <i class="iconfont current"></i>
                              <i class="iconfont current"></i>
                              <i class="iconfont"></i>
                              <i class="iconfont"></i>
                              <i class="iconfont"></i>
                              <span class="sd-side-pages">30 页</span>
                            </p>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="stab-con" id="catalog_tab">
                <div class="side-default">
                  <p>暂无目录</p>
                  <i class="iconfont"></i>
                  <div class="side-default-tips">点击鼠标右键菜单,创建目录</div>
                </div>
                <div class="commonbox6">
                  <div
                    class="sd-side"
                    style={{ maxHeight: "431px", height: "431px" }}
                  >
                    <div class="dTree-con">
                      <div
                        class="dTree-nav"
                        id="ct-nav-panel"
                        style={{ display: "none" }}
                      >
                        <a
                          class="node-list"
                          id="cTopAddLeaf"
                          href="http://www.doc88.com"
                          title="新建"
                          onclick="return false;"
                        >
                          <i class="iconfont"></i>新建
                        </a>
                        <a
                          class="node-list"
                          id="cTopEdit"
                          href="http://www.doc88.com"
                          title="编辑"
                          onclick="return false;"
                        >
                          <i class="iconfont"></i>编辑
                        </a>
                        <a
                          class="node-list"
                          id="cTopRemove"
                          href="http://www.doc88.com"
                          title="删除"
                          onclick="return false;"
                        >
                          <i class="iconfont"></i>删除
                        </a>
                      </div>
                      <ul
                        id="catalog-panel"
                        class="ztree"
                        style={{ maxHeight: "421px", height: "421px" }}
                      ></ul>
                    </div>
                  </div>
                </div>
                <div id="ct-r-menu">
                  <ul>
                    <li id="rmCatalogAdd">添加节点</li>
                    <li id="rmCatalogAddLeaf">添加子节点</li>
                    <li id="rmCatalogEdit">重命名</li>
                    <li id="rmCatalogRemove">删除</li>
                  </ul>
                  <ul>
                    <li id="rmCatalogSetPosition">设置目标位置</li>
                    <li id="rmCatalogOpenAll">展开全部</li>
                    <li id="rmCatalogCloseAll">收起全部</li>
                  </ul>
                </div>
              </div>
              <div class="stab-con" id="note_tab">
                <div class="side-default">
                  <p>暂无笔记</p>
                  <i class="iconfont"></i>
                  <div class="side-default-tips">
                    选择文本，点击鼠标右键菜单，添加笔记
                  </div>
                </div>
                <div class="commonbox6">
                  <div class="note-catalog" id="note-catalog">
                    <div class="catalog-nav" style={{ display: "none" }}>
                      <i id="catalog-btn" class="btn iconfont">
                        
                      </i>
                      <span class="close hide" title="关闭搜索"></span>
                      <input class="text" id="note_keyword" type="text" />
                    </div>
                    <ul
                      class="note-box"
                      style={{ maxHeight: "431px", height: "431px" }}
                    ></ul>
                  </div>
                </div>
              </div>
              <div class="stab-con" id="bookmark_tab">
                <div class="side-default">
                  <p>暂无书签</p>
                  <i class="iconfont"></i>
                  <div class="side-default-tips">
                    在左侧文档中，点击鼠标右键，添加书签
                  </div>
                </div>
                <div class="commonbox6">
                  <div
                    class="bookmark-list"
                    id="bookmark-panel"
                    style={{ maxHeight: "431px", height: "431px" }}
                  ></div>
                </div>
              </div>
              <div class="dk-side">
                <div class="iamge1">
                  <a
                    onclick="Common.doEvent('daoke_ad')"
                    href="http://www.doc88.com"
                    title="下载稻壳阅读器"
                    class="dk-side-btn"
                  >
                    下载稻壳阅读器
                  </a>
                </div>
              </div>
            </div>
            <div class="boxleft" id="boxleft">
              <div class="commonbox2 doctopbox" id="box1">
                <div class="doctopic">
                  <h1 title="金属切削机床型号编制方法(国家标准)">
                    <img
                      src="http://static.doc88.com/assets/images/icons/type/PDF.png"
                      alt="PDF"
                    />
                    金属切削机床型号编制方法(国家标准)
                  </h1>

                  <div class="docoutline" style={{ display: "block" }}>
                    <div class="attribute">
                      格式：PDF
                      <i class="iconfont line"></i>
                      页数：61
                      <i class="iconfont line"></i>
                      上传日期：2015-04-05 18:54:41
                      <i class="iconfont line"></i>
                      浏览次数：23
                      <i class="iconfont line"></i>
                      <i class="iconfont orange"></i>
                      <span id="downloadpriceid">
                        下载积分：<font color="red">2000</font>
                      </span>
                      <i class="iconfont line"></i>
                      <span
                        class="client-show"
                        onclick="Common.doEvent('top_read_with_dk');downloaddkclient(1);"
                      >
                        <i class="iconfont blue"></i> 用稻壳阅读器打开
                      </span>
                    </div>
                    <div class="switch" id="switch2"></div>
                  </div>
                </div>
              </div>
              <div class="smallimg" id="thumbPanel" sd="1">
                <div class="top_bar">
                  <div class="dock-side">
                    <i class="left iconfont active" title="左侧">
                      
                    </i>
                    <i class="right iconfont" title="右侧">
                      
                    </i>
                    <i class="float iconfont" title="浮动">
                      
                    </i>
                  </div>
                  <div class="close iconfont"></div>
                </div>
                <ul class="imgtxt07 it07w1020" id="pagethumblist"></ul>
                <div class="clearfix"></div>
              </div>
              <div id="pptContainer">
                <div class="page_view" id="pageContainer">
                  <div
                    id="blankThumb"
                    style={{ display: "none", height: "1px" }}
                  ></div>
                  <div class="outer_page" id="outer_page_1" px="100" py="192">
                    <div class="page_pb" id="pagepb_1"></div>
                    <canvas
                      class="postil_page"
                      zoom="1"
                      id="postil_1"
                      width="890"
                      height="1280"
                      style={{ width: "890px", height: "1280px" }}
                    ></canvas>
                    <canvas
                      class="inner_page"
                      zoom="1"
                      ls="1"
                      ss="0"
                      id="page_1"
                      style={{
                        BACKGROUND:
                          "url(http://static.doc88.com/assets/images/page-loading.gif) no-repeat center",
                        width: "890px",
                        height: "1280px"
                      }}
                      fs="0"
                      lz="1"
                      width="890"
                      height="1280"
                    ></canvas>
                  </div>
                  <div class="outer_page" id="outer_page_2" px="100" py="1484">
                    <div class="page_pb" id="pagepb_2"></div>
                    <canvas
                      class="postil_page"
                      zoom="1"
                      id="postil_2"
                      width="890"
                      height="1286"
                      style={{ width: "890px", height: "1286px" }}
                    ></canvas>
                    <canvas
                      class="inner_page"
                      zoom="1"
                      ls="1"
                      ss="0"
                      id="page_2"
                      style={{
                        BACKGROUND:
                          "url(http://static.doc88.com/assets/images/page-loading.gif) no-repeat center",
                        width: "890px",
                        height: "1286px"
                      }}
                      fs="0"
                      lz="1"
                      width="890"
                      height="1286"
                    ></canvas>
                  </div>
                  <div
                    class="outer_page"
                    id="outer_page_3"
                    px="100"
                    py="2782"
                    ad="1"
                  >
                    <div class="page_pb" id="pagepb_3"></div>
                    <canvas
                      class="postil_page"
                      zoom="1"
                      id="postil_3"
                      width="890"
                      height="1286"
                      style={{ width: "890px", height: "1286px" }}
                    ></canvas>
                    <canvas
                      class="inner_page"
                      zoom="1"
                      ls="1"
                      ss="0"
                      id="page_3"
                      style={{
                        BACKGROUND:
                          "url(http://static.doc88.com/assets/images/page-loading.gif) no-repeat center",
                        width: "890px",
                        height: "1286px"
                      }}
                      fs="0"
                      lz="1"
                      width="890"
                      height="1286"
                    ></canvas>
                  </div>
                  <div
                    class="page_ad"
                    style={{ position: "relative", height: "100px" }}
                  >
                    <div
                      class="dk-bg"
                      style={{
                        position: "absolute",
                        zIndex: "998",
                        width: "100%",
                        overflow: "hidden"
                      }}
                      id="gg_3"
                      loadif="1"
                    >
                      <div class="dk-con">
                        <a
                          onclick="Common.doEvent('banner_ad')"
                          href="http://www.doc88.com"
                          class="dk-btns"
                        >
                          下载稻壳阅读器
                        </a>
                        <h3>安装稻壳阅读器，免费下载道客巴巴文档</h3>
                        <p>
                          复制文字、整理笔记、在线搜索、文档打印、更多功能等着您！
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="outer_page" id="outer_page_4" px="100" py="4180">
                    <div class="page_pb" id="pagepb_4">
                      0%
                    </div>
                    <canvas
                      class="postil_page"
                      zoom="1"
                      id="postil_4"
                      width="890"
                      height="1288"
                      style={{ width: "890px", height: "1288px" }}
                    ></canvas>
                    <canvas
                      class="inner_page"
                      zoom="1"
                      ls="0"
                      ss="0"
                      id="page_4"
                      style={{
                        BACKGROUND:
                          "url(http://static.doc88.com/assets/images/page-loading.gif) no-repeat center;width:890px; height:1288px"
                      }}
                    ></canvas>
                  </div>
                  <div class="outer_page" id="outer_page_5" px="100" py="5480">
                    <div class="page_pb" id="pagepb_5">
                      0%
                    </div>
                    <canvas
                      class="postil_page"
                      zoom="1"
                      id="postil_5"
                      width="890"
                      height="1288"
                      style={{ width: "890px", height: "1288px" }}
                    ></canvas>
                    <canvas
                      class="inner_page"
                      zoom="1"
                      ls="0"
                      ss="0"
                      id="page_5"
                      style={{
                        BACKGROUND:
                          "url(http://static.doc88.com/assets/images/page-loading.gif) no-repeat center",
                        width: "890px",
                        height: "1288px"
                      }}
                    ></canvas>
                  </div>
                  <div id="dragdrop" mv="1" md="0" drag="0"></div>
                </div>
                <div class="surplus" id="continue_page">
                  <div class="surplus-inner">
                    <p>还剩&nbsp;56&nbsp;页未读，是否继续阅读？</p>
                    <p class="uploader">
                      此文档由&nbsp;dd6eb70cbc052bdab255c6e4cf45b107&nbsp;分享于&nbsp;2015-04-05
                    </p>
                    <div class="surplus-operate">
                      <div class="surplus-btn" id="continueButton">
                        继续免费阅读全文<i class="iconfont more"></i>
                      </div>
                      &nbsp;&nbsp;
                      <a
                        class="surplus-down"
                        href="http://www.doc88.com"
                        id="downbtn4"
                      >
                        不看了，直接下载
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="surplus"
                id="readEndDiv"
                style={{ display: "none", height: "240px" }}
              >
                <div class="art-like">
                  <div class="success-like">成功点赞+1</div>
                  <div class="like-num"></div>
                </div>
                <p>全文阅读已结束，如果下载本文需要使用</p>
                <p class="uploader2">
                  <i class="iconfont"></i> 2000 积分
                </p>
                <div class="surplus-operate">
                  <div class="surplus-btn-mid" id="downbtn3">
                    <i class="iconfont"></i>下载此文档
                  </div>
                  <a
                    class="surplus-down"
                    href="http://www.doc88.com"
                    id="getxdfbtn"
                  >
                    积分不够? 下载XDF文档。
                  </a>
                </div>
                <p class="share">
                  分享至
                  <a
                    href="http://www.doc88.com"
                    onclick="listShare(677088153,'5');"
                  >
                    <i class="iconfont dc"></i>{" "}
                  </a>
                  <a href="http://www.doc88.com" id="shareWxBtn">
                    <i class="iconfont wx"></i>{" "}
                  </a>
                  <a href="http://www.doc88.com" id="shareQqBtn">
                    <i class="iconfont qq"></i>
                  </a>
                  <a href="http://www.doc88.com" onclick="share(product_id);">
                    <i class="iconfont am"></i>
                  </a>
                </p>
              </div>
              <div class="commonbox1" onselectstart="return false;">
                <div class="topic">
                  <h2>该用户还上传了这些文档</h2>
                </div>
                <div class="prev"></div>
                <div class="next"></div>
                <div class="box" id="bookbox" style={{ height: "214px" }}></div>
              </div>
              <div id="commentDiv"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
