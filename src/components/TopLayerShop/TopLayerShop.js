import React from "react";
import "./TopLayerShop.scss";

import { Icon } from "semantic-ui-react";

import "./1150.css";
import "./core-v2.css";

export default function TopLayerShop() {
  return (
    <React.Fragment>
      <div class="toplayer-shop">
        <div class="gotop" id="cart">
          <a
            href="/shopping_cart.php?act=cart"
            title="购物车"
            class="imglogo"
            target="_blank"
          >
            <i class="iconfont">
              <Icon name="shop" />
            </i>
            <span class="car-num"></span>
          </a>
          <a
            href="/shopping_cart.php?act=cart"
            title="购物车"
            class="txtlogo"
            target="_blank"
          >
            购物
            <br />车
          </a>
        </div>
        <div class="gotop">
          <a
            href="http://www.doc88.com/p-7015833022915.html"
            title="稻壳阅读"
            class="imglogo"
          >
            <i class="iconfont">
              <Icon name="microsoft" />
            </i>
          </a>
          <a
            href="http://www.doc88.com/p-7015833022915.html"
            title="稻壳阅读"
            class="txtlogo"
          >
            稻壳
            <br />
            阅读
          </a>
        </div>
        <div class="gotop" id="wx_read" style={{ display: "block" }}>
          <a
            href="http://www.doc88.com/p-7015833022915.html"
            title="微信阅读"
            class="imglogo"
          >
            <i class="iconfont">
              <Icon name="weixin" />
            </i>
          </a>
          <a
            href="http://www.doc88.com/p-7015833022915.html"
            title="微信阅读"
            class="txtlogo"
          >
            微信
            <br />
            阅读
          </a>
        </div>
        <div class="gotop" id="app_read">
          <a
            href="http://www.doc88.com/p-7015833022915.html"
            title="APP阅读"
            class="imglogo"
          >
            <i class="iconfont">
              <Icon name="android" />
            </i>
          </a>
          <a
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
            href="http://www.doc88.com/p-7015833022915.html"
            title="返回顶部"
            class="imglogo"
          >
            <i class="iconfont">
              <Icon name="angle up" />
            </i>
          </a>
          <a
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
