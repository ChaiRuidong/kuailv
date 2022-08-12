<template>
  <main>
    <div class="itme">
      <img src="img/xq1.png" alt="" />
    </div>
    <section class="main">
      <div class="m-head">
        <h3>金针菇</h3>
        <div class="m-head-desc">
          <van-row>
            <van-col span="8">
              <h4>7%以内（普通）</h4>
              <p>瑕疵占比</p>
            </van-col>
            <van-col span="8">
              <h4>散装塑料袋</h4>
              <p>包装特点</p>
            </van-col>
            <van-col span="8">
              <h4>12-15cm</h4>
              <p>长度</p>
            </van-col>
          </van-row>
          <div class="desc-text">
            <span
              >菇帽稍大较均匀，外观即可判断有部分较短菌柄，根茎较长且洁白、根部紧扎偶有少许杂乱，适合炒菜、火锅、煮汤、配菜等。</span
            >
          </div>
        </div>
        <p class="go">去登录享优惠价格</p>
        <div class="weight">
          <span>每袋5斤</span>
          <span>每袋10斤</span>
        </div>
      </div>
      <div class="m-con">
        <p class="gray-title">相关推荐</p>
        <div class="gray-con">
          <ul>
            <li>
              <img src="img/index/sp1.png" alt="" />
              <h3>胡萝卜</h3>
              <p>5斤</p>
              <div class="money">￥20 <span>元</span></div>
            </li>
            <li>
              <img src="img/index/sp2.png" alt="" />
              <h3>西红柿</h3>
              <p>5斤</p>
              <div class="money">￥20 <span>元</span></div>
            </li>
            <li>
              <img src="img/index/sp3.png" alt="" />
              <h3>油麦菜</h3>
              <p>5斤</p>
              <div class="money">￥20 <span>元</span></div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <div class="footer">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" dot />
        <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
        <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </main>
</template>
<style scoped>
.itme {
  width: 100%;
  height: 100%;
  background-size: cover;
}
.itme img {
  width: 100%;
}
.main {
  position: relative;
  padding: 10px 0;
  background: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-bottom: 50px;
}
.m-head {
  position: relative;
  padding-bottom: 10px;
  margin: 0 20px;
  white-space: nowrap;
}
.m-head h3 {
  text-align: left;
  font-size: 4vw;
  font-weight: 700;
}
.m-head .m-head-desc {
  background: #f2f2f2;
  border-radius: 20px;
  margin-top: 20px;
  width: 100%;
  padding: 20px 10px;
  box-sizing: border-box;
}
.m-head .m-head-desc h4 {
  font-size: 3.5vw;
}
.m-head .m-head-desc p {
  font-size: 2.5vw;
}
.desc-text {
  text-overflow: ellipsis;
  font-size: 3vw;
  width: 100%;
  padding: 20px 0px 0 10px;
  white-space: normal;
  overflow: hidden;
  box-sizing: border-box;
}
.m-head .go {
  font-size: 5vw;
  color: #f2f2f2;
  text-align: left;
  margin-top: 15px;
}
.weight {
  margin-top: 20px;
  text-align: left;
  width: 100%;
}
.weight span {
  padding: 10px 0;
  width: 20%;
  text-align: center;
  margin-right: 3vw;
  background: #f2f2f2;
  border-radius: 5px;
  font-weight: 700;
  font-size: 3.5vw;
}
.weight span:first-child {
  color: red;
}
.m-con {
  margin-top: 10px;
}
.gray-title {
  text-align: left;
  font-size: 5vw;
  font-weight: 600;
  padding: 20px;
}
.gray-con {
  overflow: hidden;
  width: 94%;
  margin: 0 20px;
}
.gray-con li {
  width: 31%;
  padding: 10px 0;
  background: #fff;
  border-radius: 10px;
  float: left;
  margin-top: 3vw;
  margin-right: 1vw;
}
.gray-con li:last-child {
  margin-right: 0;
}
.gray-con img {
  width: 100%;
}
.gray-con h3 {
  text-align: left;
  font-size: 3vw;
  padding: 0 10px;
}
.gray-con p {
  font-size: 2.5vw;
  margin-top: 3vw;
  padding: 1vw;
  text-align: center;
  border-radius: 5px;
  margin-left: 10px;
  width: 7vw;
  background: #f2f2f2;
}
.gray-con .money {
  text-align: left;
  color: red;
  font-size: 2.5vw;
  margin-top: 1vw;
  padding: 0 10px;
}
</style>