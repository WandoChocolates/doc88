import React from "react";

import "./1150.css";
import "./core-v2.css";

export default function TopLayerShop() {
  return (
    <React.Fragment>
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
