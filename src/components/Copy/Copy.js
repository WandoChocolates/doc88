import React from "react";

import "./1150.css";
import "./core-v2.css";

export default function App() {
  return (
    <React.Fragment>
      <div class="topshop">
        <div class="mainpart">
          <div class="tabs2">
            <ul class="tab">
              <li id="skins1" onclick="setTab('skins',1,2)" class="current">
                图案背景
              </li>
              <li id="skins2" onclick="setTab('skins',2,2)">
                纯色背景
              </li>
            </ul>
            <div class="tabcont">
              <div id="skin_panel_1" class="skin-panel">
                <div id="con_skins_1">
                  <ul class="skin-list" id="skin-list-img"></ul>
                </div>
              </div>
              <div id="skin_panel_2" class="skin-panel">
                <div id="con_skins_2" class="hide">
                  <ul class="skin-list" id="skin-list-color">
                    <li id="customColorLi">
                      <div class="skinimg">
                        <input
                          class="pink-color jscolor {onFineChange:'colorUpdates(this)',position:'right',padding:0, shadow:false,borderWidth:0, backgroundColor:'transparent', insetColor:'transparent'}"
                          value="ffffff"
                          autocomplete="off"
                          style={{
                            backgroundImage: "none",
                            backgroundColor: "rgb(255, 255, 255)",
                            color: "rgb(0, 0, 0)"
                          }}
                        />
                        <div class="addcolor"></div>
                        <span class="checked"></span>
                      </div>
                      <p>自定义颜色</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="skinpaging">
                <a href="javascript:void(0)" class="prevskin"></a>
                <a href="javascript:void(0)" class="nextskin"></a>
              </div>
            </div>
            <react-comment> end tabcont </react-comment>
          </div>
          <react-comment> end tab2 </react-comment>
        </div>
        <react-comment> end mainpart </react-comment>
      </div>
      <react-comment> end topshop </react-comment>
      <div
        class="header"
        id="header"
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
      >
        <div class="mainpart">
          <div class="main-header">
            <div class="logo">
              <a href="http://www.doc88.com/">
                <img
                  src="http://static.doc88.com/assets/images/doc88.png"
                  style={{ display: "none" }}
                />
                <img
                  src="http://static.doc88.com/assets/images/logo1.png"
                  class="logoimg"
                />
                <react-comment>[if IE 6]</react-comment>
                <img src="assets/images/logo1.gif" />
                <react-comment>[endif]</react-comment>
              </a>
            </div>

            <div class="mainnav">
              <ul class="nav">
                <li>
                  <a href="/">首页</a>
                </li>
                <li class="dropdown">
                  <a href="/list.html">文档</a>
                  <div class="dorpmenu2 hide" style={{ display: "none" }}>
                    <ul class="categorys">
                      <li>
                        <a
                          class="subnav"
                          href="http://www.doc88.com/list-593-0.html"
                          target="_blank"
                          title="行业资料"
                        >
                          行业资料
                        </a>
                      </li>
                      <li>
                        <a
                          class="subnav"
                          href="http://www.doc88.com/list-442-0.html"
                          target="_blank"
                          title="考试资料"
                        >
                          考试资料
                        </a>
                      </li>
                      <li>
                        <a
                          class="subnav"
                          href="http://www.doc88.com/list-441-0.html"
                          target="_blank"
                          title="教学课件"
                        >
                          教学课件
                        </a>
                      </li>
                      <li>
                        <a
                          class="subnav"
                          href="http://www.doc88.com/list-440-0.html"
                          target="_blank"
                          title="学术论文"
                        >
                          学术论文
                        </a>
                      </li>
                      <li>
                        <a
                          class="subnav"
                          href="http://www.doc88.com/list-443-0.html"
                          target="_blank"
                          title="技术资料"
                        >
                          技术资料
                        </a>
                      </li>
                      <li>
                        <a
                          class="subnav"
                          href="http://www.doc88.com/list-444-0.html"
                          target="_blank"
                          title="金融财经"
                        >
                          金融财经
                        </a>
                      </li>
                      <li>
                        <a
                          class="subnav"
                          href="http://www.doc88.com/list-445-0.html"
                          target="_blank"
                          title="研究报告"
                        >
                          研究报告
                        </a>
                      </li>
                      <li>
                        <a
                          class="subnav"
                          href="http://www.doc88.com/list-446-0.html"
                          target="_blank"
                          title="法律文献"
                        >
                          法律文献
                        </a>
                      </li>
                      <li>
                        <a
                          class="subnav"
                          href="http://www.doc88.com/list-447-0.html"
                          target="_blank"
                          title="管理文献"
                        >
                          管理文献
                        </a>
                      </li>
                      <li>
                        <a
                          class="subnav"
                          href="http://www.doc88.com/list-448-0.html"
                          target="_blank"
                          title="社会科学"
                        >
                          社会科学
                        </a>
                      </li>
                      <li>
                        <a
                          class="subnav"
                          href="http://www.doc88.com/list-449-0.html"
                          target="_blank"
                          title="生活休闲"
                        >
                          生活休闲
                        </a>
                      </li>
                      <li>
                        <a
                          class="subnav"
                          href="http://www.doc88.com/list-574-0.html"
                          target="_blank"
                          title="计算机"
                        >
                          计算机
                        </a>
                      </li>
                      <li>
                        <a
                          class="subnav"
                          href="http://www.doc88.com/list-687-0.html"
                          target="_blank"
                          title="经济文库"
                        >
                          经济文库
                        </a>
                      </li>
                      <li>
                        <a
                          class="subnav"
                          href="http://www.doc88.com/list-720-0.html"
                          target="_blank"
                          title="数字媒体"
                        >
                          数字媒体
                        </a>
                      </li>
                      <li>
                        <a
                          class="subnav"
                          href="http://www.doc88.com/list-702-0.html"
                          target="_blank"
                          title="教材教辅"
                        >
                          教材教辅
                        </a>
                      </li>
                      <li>
                        <a
                          class="subnav"
                          href="http://www.doc88.com/list-730-0.html"
                          target="_blank"
                          title="企业档案"
                        >
                          企业档案
                        </a>
                      </li>
                    </ul>
                    <sup class="arr"></sup>
                  </div>
                </li>
                <li>
                  <a href="/t-list.html">任务</a>
                </li>
                <li>
                  <a href="/b-list.html">文辑</a>
                </li>
                <li>
                  <a href="https://www.daokeyuedu.com" target="_blank">
                    阅读器
                  </a>
                </li>
              </ul>
            </div>
            <react-comment> end mainnav </react-comment>

            <div class="usershop">
              <ul class="login-bar-con">
                <li id="loginBar">
                  <div class="user1">
                    <a
                      class="login"
                      href="javascript:DOC88Window.win({message:'/js/home/window.html?v=1.5&amp;act=window_login&amp;forward=',height:270,width:600,title:'道客巴巴帐号登录',iframe:true});"
                    >
                      登录
                    </a>
                    <a
                      class="register"
                      href="javascript:DOC88Window.win({message:'/js/home/window.html?v=1.5&amp;act=window_reg&amp;forward=',height:465,width:600,title:'注册一个新的道客巴巴帐号',iframe:true});"
                    ></a>
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
                      onsubmit="return search_submit();"
                      target="_blank"
                    >
                      <input
                        type="text"
                        placeholder=" 在道客巴巴十亿文档库中搜索..."
                        class="stext"
                        onfocus="this.placeholder=''"
                        onblur="if(this.value=='')this.placeholder=' 在道客巴巴十亿文档库中搜索...';"
                        id="keyword"
                        autocomplete="off"
                      />
                      <input type="submit" class="sbtncss" value="" />
                    </form>
                    <div class="search-rhint">
                      <ul class="hint-list"></ul>
                    </div>
                  </div>
                </li>
                <li class="shop1 last">
                  <button
                    type="button"
                    title="上传文档"
                    class="btnupload2"
                    onclick="showLoginWindow('/uc/index.php?act=upload','上传文档','登录后，可将您的文档上传至道客巴巴');"
                    style={{ display: "none" }}
                  >
                    <i class="iconfont"></i>
                  </button>
                  <button
                    type="button"
                    title="上传文档"
                    class="btnupload3"
                    onclick="showLoginWindow('/uc/index.php?act=upload','上传文档','登录后，可将您的文档上传至道客巴巴');"
                  >
                    <i class="iconfont"></i> 上传文档
                  </button>
                </li>
              </ul>
            </div>
            <react-comment> end shop </react-comment>
          </div>
        </div>
        <react-comment> end mainpart </react-comment>
        <div class="skin-peeler">
          <a href="javascript:void(0)">
            <img
              src="http://static.doc88.com/assets/images/icons/skin-peeler.png"
              class="ie6png"
            />
            <react-comment>[if IE 6]</react-comment>
            <img src="http://static.doc88.com/assets/images/icons/skin-peeler-ie6.png" />
            <react-comment>[endif]</react-comment>
          </a>
        </div>
        <react-comment> end skin-peeler </react-comment>
        <div class="skintips">
          <img
            src="http://static.doc88.com/assets/images/tips/skintips.png"
            class="ie6png"
          />
          <react-comment>[if IE 6]</react-comment>
          <img src="http://static.doc88.com/assets/images/tips/skintips-for-ie6.png" />
          <react-comment>[endif]</react-comment>
          <a href="http://www.doc88.com" title="关闭" class="close"></a>
          <a href="http://www.doc88.com" title="试试" class="into "></a>
        </div>
        <react-comment> end skintips </react-comment>
      </div>
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
          <react-comment> low version panel </react-comment>

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
              <react-comment> 本文档的搜索结果 </react-comment>
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

              <react-comment> 历史记录 阅读记录 </react-comment>
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
        <react-comment> end mainpart </react-comment>
      </div>
      <react-comment> end readshop </react-comment>

      <react-comment> panel </react-comment>
      <div
        class="item-edit-con"
        id="annotate_pro_panel"
        style={{ display: "none" }}
        r_s="0"
      >
        <div class="edit-closed iconfont"></div>

        <react-comment> 视图设置 </react-comment>

        <div class="panel-list" id="doc-panel-sign" style={{ display: "none" }}>
          <div class="panel-title">标记设置</div>
          <div class="panel-type2">
            <a
              class="active"
              href="http://www.doc88.com"
              title="高亮"
              id="btn_highlight"
            >
              <i class="iconfont"></i>
              <span>高亮</span>
            </a>
            <a href="http://www.doc88.com" title="下划线" id="btn_underline">
              <i class="iconfont"></i>
              <span>下划线</span>
            </a>
            <a href="http://www.doc88.com" title="删除线" id="btn_throughline">
              <i class="iconfont"></i>
              <span>删除线</span>
            </a>
            <a href="http://www.doc88.com" title="波浪线" id="btn_wavyline">
              <i class="iconfont"></i>
              <span>波浪线</span>
            </a>
          </div>
        </div>

        <h2 id="pro_shape_label" style={{ display: "none" }}>
          画笔设置
        </h2>
        <div
          class="brush-types"
          id="pro_shape_types"
          style={{ display: "none" }}
        >
          <span class="iconfont" title="画笔工具" id="btn_pencil">
            
          </span>
          <span class="iconfont " title="直线工具" id="btn_line">
            
          </span>
          <span class="iconfont" title="箭头工具" id="btn_arrow">
            
          </span>
          <span class="iconfont" title="矩形工具" id="btn_rectangle">
            
          </span>
          <span class="iconfont" title="圆形工具" id="btn_oval">
            
          </span>
          <span
            class="iconfont"
            title="五角星"
            id="btn_star"
            style={{ display: "none" }}
          >
            
          </span>
          <span class="iconfont" title="文本" id="btn_text">
            
          </span>
        </div>
        <h2 id="pro_color_label">线条颜色</h2>
        <div class="color-pinkup">
          <span class="pink-box" id="pro_color_FF3029">
            <span class="pink1"></span>
          </span>
          <span class="pink-box" id="pro_color_FFFF00">
            <span class="pink2"></span>
          </span>
          <span class="pink-box" id="pro_color_A8DB00">
            <span class="pink3"></span>
          </span>
          <span class="pink-box" id="pro_color_00CBFF">
            <span class="pink4"></span>
          </span>
          <span class="pink-box" id="pro_color_3063CF">
            <span class="pink5"></span>
          </span>
          <span
            class="pink-box"
            id="pro_color_CD96FF"
            style={{ marginRight: "0" }}
          >
            <span class="pink6"></span>
          </span>
        </div>
        <div class="color-pinkup">
          <span class="pink-box" id="pro_color_7030A0">
            <span class="pink7"></span>
          </span>
          <span class="pink-box" id="pro_color_8FA4D1">
            <span class="pink8"></span>
          </span>
          <span class="pink-box" id="pro_color_4ED785">
            <span class="pink9"></span>
          </span>
          <span class="pink-box" id="pro_color_FFA032">
            <span class="pink10"></span>
          </span>
          <span class="pink-box" id="pro_color_DEBC53">
            <span class="pink11"></span>
          </span>
          <span
            class="pink-box"
            id="pro_color_custom"
            style={{ marginRight: "0" }}
          >
            <span class="pink12">
              <input
                id="pro_custom_inp"
                class="pink-color jscolor {onFineChange:'Common.colorUpdate(this)',position:'left',padding:0, shadow:false,borderWidth:0, backgroundColor:'transparent', insetColor:'transparent'}"
                value="ffffff"
                autocomplete="off"
                style={{
                  backgroundImage: "none",
                  backgroundColor: "rgb(255, 255, 255)",
                  color: "rgb(0, 0, 0)"
                }}
              />
            </span>
            <span class="color-custom"></span>
          </span>
        </div>

        <div id="pro_font_panel">
          <h2>字体设置</h2>
          <div class="font-selected">
            <div class="font-nav">
              <span>宋体</span>
              <i class="iconfont"></i>
            </div>
            <ul class="hide">
              <li>微软雅黑</li>
              <li style={{ fontFamily: "宋体" }}>宋体</li>
              <li style={{ fontFamily: "黑体" }}>黑体</li>
              <li style={{ fontFamily: "楷体" }}>楷体</li>
              <li style={{ fontFamily: "arial" }}>Arial</li>
            </ul>
          </div>
          <div class="slider-box" id="pro_fontsize_panel">
            <h3>文字大小</h3>
            <div class="slider-content spx">
              <input
                type="hidden"
                class="font-slider"
                value="48"
                id="fontsize-slider"
                style={{ display: "none" }}
              />
              <div
                class="slider-container theme-blue"
                style={{ width: "210px" }}
              >
                {" "}
                <div class="back-bar">
                  {" "}
                  <div
                    class="selected-bar"
                    style={{ width: "86px", left: "0px" }}
                  ></div>{" "}
                  <div class="pointer low" style={{ display: "none" }}></div>
                  <div class="pointer-label" style={{ display: "none" }}>
                    123456
                  </div>{" "}
                  <div class="pointer high" style={{ left: "79px" }}></div>
                  <div class="pointer-label">48</div>{" "}
                  <div class="clickable-dummy"></div>{" "}
                </div>{" "}
                <div class="scale"></div>{" "}
              </div>
            </div>
          </div>
        </div>
        <div class="slider-box" id="pro_opacity_panel">
          <h3>透明度</h3>
          <div class="slider-content sprecent">
            <input
              type="hidden"
              class="opacity-slider"
              value="100"
              id="opacity-slider"
              style={{ display: "none" }}
            />
            <div class="slider-container theme-blue" style={{ width: "210px" }}>
              {" "}
              <div class="back-bar">
                {" "}
                <div
                  class="selected-bar"
                  style={{ width: "210px", left: "0px" }}
                ></div>{" "}
                <div class="pointer low" style={{ display: "none" }}></div>
                <div class="pointer-label" style={{ display: "none" }}>
                  123456
                </div>{" "}
                <div class="pointer high" style={{ left: "203px" }}></div>
                <div class="pointer-label">100</div>{" "}
                <div class="clickable-dummy"></div>{" "}
              </div>{" "}
              <div class="scale"></div>{" "}
            </div>
          </div>
        </div>
        <div class="slider-box" id="pro_linewidth_panel">
          <h3>线条粗细</h3>
          <div class="slider-content">
            <input
              type="hidden"
              class="line-slider"
              value="1"
              id="linewidth-slider"
              style={{ display: "none" }}
            />
            <div class="slider-container theme-blue" style={{ width: "210px" }}>
              {" "}
              <div class="back-bar">
                {" "}
                <div
                  class="selected-bar"
                  style={{ width: "0px", left: "0px" }}
                ></div>{" "}
                <div class="pointer low" style={{ display: "none" }}></div>
                <div class="pointer-label" style={{ display: "none" }}>
                  123456
                </div>{" "}
                <div class="pointer high" style={{ left: "-7px" }}></div>
                <div class="pointer-label">1</div>{" "}
                <div class="clickable-dummy"></div>{" "}
              </div>{" "}
              <div class="scale"></div>{" "}
            </div>
          </div>
        </div>
      </div>

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
              <react-comment> end commonbox3 </react-comment>
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
                <react-comment> end commonbox3 </react-comment>
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
            <react-comment> end boxright </react-comment>
            <div class="boxleft" id="boxleft">
              <react-comment> zip </react-comment>

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
      <span
        id="downtestw"
        style={{ visibility: "hidden", position: "absolute", bottom: "0px" }}
      >
        <span class="link">金属切削机床型号编制方法(国家标准)</span>
      </span>
      <div id="blkinfo" style={{ display: "none" }}></div>
      <div id="loadDiv" style={{ display: "none" }}>
        <div
          style={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            listStyle: "none",
            paddingTop: "20px"
          }}
        >
          <ul style={{ listStyle: "none" }}>
            <li style={{ paddingTop: "60px" }}>
              <img
                alt="loader"
                src="http://static.doc88.com/assets/images/ajax-loader.gif"
              />
            </li>
          </ul>
        </div>
      </div>
      <form
        id="form_productbuy"
        action="http://www.doc88.com/doc.php?act=window_buy"
        method="post"
        target="doc88Window"
      >
        <input type="hidden" value="0" id="stateDLRemainTimes" />
        <input
          type="hidden"
          value="0"
          id="statePrintRemainTimes"
          name="statePrintRemainTimes"
        />
        <input
          type="hidden"
          id="txtPname"
          name="txtPname"
          value="金属切削机床型号编制方法(国家标准)"
        />
        <input
          type="hidden"
          id="txtPcode"
          name="txtPcode"
          value="7015833022915"
        />
        <input type="hidden" id="txtPid" name="txtPid" value="677088153" />
        <input type="hidden" id="txtPcid" name="txtPcid" value="573" />
        <input
          type="hidden"
          id="txtPdocformat"
          name="txtPdocformat"
          value="PDF"
        />
        <input
          type="hidden"
          id="txtPuploadtime"
          name="txtPuploadtime"
          value="1428231281"
        />
        <input type="hidden" id="txtPpic" name="txtPpic" value="" />
        <input type="hidden" id="txtPfree" name="txtPfree" value="1" />
        <input type="hidden" id="txtPdownload" name="txtPdownload" value="2" />
        <input
          type="hidden"
          id="txtPdlprice"
          name="txtPdlprice"
          value="20.00"
        />
        <input type="hidden" id="txtPprint" name="txtPprint" value="" />
        <input
          type="hidden"
          id="txtPprintprice"
          name="txtPprintprice"
          value=""
        />
        <input
          type="hidden"
          id="txtPsellername"
          name="txtPsellername"
          value="dd6eb70cbc052bdab255c6e4cf45b107"
        />
        <input
          type="hidden"
          id="txtPsellerid"
          name="txtPsellerid"
          value="31754141"
        />
        <input type="hidden" id="txtDoMethod" name="txtDoMethod" value="0" />
        <input
          type="hidden"
          id="txtPonlydownload"
          name="txtPonlydownload"
          value="1"
        />
        <input type="hidden" id="txtPdocurl" name="txtPdocurl" value="" />
      </form>
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
        <div class="clearfix"></div>
      </div>
      <react-comment> end activelist </react-comment>

      <div class="footer" id="footer">
        <div class="mainpart" style={{ minWidth: "950px" }}>
          <div class="copyrught">
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
              class="service-qq"
              title="在线客服"
            >
              在线客服
            </a>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
      <react-comment> end footer </react-comment>
      <div class="toplayer-shop" style={{ right: "25.5px" }}>
        <div class="gotop">
          <a
            onclick="Common.doEvent('rtools_daoke_read')"
            href="http://www.doc88.com/p-7015833022915.html"
            title="稻壳阅读"
            class="imglogo"
          >
            <i class="iconfont"></i>
          </a>
          <a
            onclick="Common.doEvent('rtools_daoke_read')"
            href="http://www.doc88.com/p-7015833022915.html"
            title="稻壳阅读"
            class="txtlogo"
          >
            稻壳
            <br />
            阅读
          </a>
        </div>
        <div
          class="gotop"
          id="wx_read"
          style={{ display: "block" }}
          onclick="weixin_read('7015833022915')"
        >
          <a
            onclick="Common.doEvent('rtools_weixin_read')"
            href="http://www.doc88.com/p-7015833022915.html"
            title="微信阅读"
            class="imglogo"
          >
            <i class="iconfont"></i>
          </a>
          <a
            onclick="Common.doEvent('rtools_weixin_read')"
            href="http://www.doc88.com/p-7015833022915.html"
            title="微信阅读"
            class="txtlogo"
          >
            微信
            <br />
            阅读
          </a>
        </div>
        <div class="gotop" id="app_read" onclick="app_read('7015833022915')">
          <a
            onclick="Common.doEvent('rtools_app_read')"
            href="http://www.doc88.com/p-7015833022915.html"
            title="APP阅读"
            class="imglogo"
          >
            <i class="iconfont"></i>
          </a>
          <a
            onclick="Common.doEvent('rtools_app_read')"
            href="http://www.doc88.com/p-7015833022915.html"
            title="APP阅读"
            class="txtlogo"
          >
            APP
            <br />
            阅读
          </a>
        </div>
        <div class="gotop" id="gotop">
          <a
            onclick="Common.doEvent('rtools_goto_top')"
            href="http://www.doc88.com/p-7015833022915.html"
            title="返回顶部"
            class="imglogo"
          >
            <i class="iconfont"></i>
          </a>
          <a
            onclick="Common.doEvent('rtools_goto_top')"
            href="http://www.doc88.com/p-7015833022915.html"
            title="返回顶部"
            class="txtlogo"
          >
            返回
            <br />
            顶部
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
