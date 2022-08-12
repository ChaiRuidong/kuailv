<template>
  <main>
    <div class="content">
      <!-- 设置按钮 -->
      <div class="tool-bar">
        <van-icon name="setting-o" size="6vw" />
        <van-icon name="chat-o" size="6vw" />
      </div>
      <!-- 头像 -->
      <div class="no-login">
        <div class="avatar">
          <van-image src="img/tx.png" />
        </div>
        <router-link to="/login"><span>请登录 ></span></router-link>
        <router-link to="/register"
          ><div class="register">还没账号，去注册 ></div></router-link
        >
      </div>
      <!-- 我的钱包 -->
      <div class="purse">
        <div class="purse-title">
          <span>我的钱包</span>
          <div class="go-purse">进入钱包 ></div>
        </div>
        <div class="purse-con">
          <van-row gutter="5%">
            <van-col span="8" class="p-col">
              <div class="col-top"><span>0.00</span><span>张</span></div>
              <p>优惠券</p>
            </van-col>
            <van-col span="8" class="p-col">
              <div class="col-top"><span>0.00</span><span>元</span></div>
              <p>余额</p>
            </van-col>
            <van-col span="8" class="p-col">
              <div class="col-top"><span>0.00</span><span>元</span></div>
              <p>需补金额</p>
            </van-col>
          </van-row>
        </div>
      </div>
      <div class="moudlebox">
        <!-- 常用服务 -->
        <div class="moudle">
          <div class="moudle-title">常用服务</div>
          <div class="moudle-con">
            <van-row gutter="5%">
              <van-col span="6">
                <img src="../../public/img/my/11.png" alt="" />
                <p>退押金</p>
              </van-col>
              <van-col span="6">
                <img src="../../public/img/my/12.png" alt="" />
                <p>退货/售后</p></van-col
              >
              <van-col span="6"
                ><img src="../../public/img/my/13.png" alt="" />
                <p>开发票</p></van-col
              >
              <van-col span="6"
                ><img src="../../public/img/my/14.png" alt="" />
                <p>账单</p></van-col
              >
            </van-row>
          </div>
        </div>
        <!-- 帮助中心 -->
        <div class="moudle">
          <div class="moudle-title">帮助中心</div>
          <div class="moudle-con">
            <van-row gutter="5%">
              <van-col span="6">
                <img src="../../public/img/my/21.png" alt="" />
                <p>联系客服</p>
              </van-col>
              <van-col span="6">
                <img src="../../public/img/my/22.png" alt="" />
                <p>销售经理</p></van-col
              >
              <van-col span="6"
                ><img src="../../public/img/my/23.png" alt="" />
                <p>常见问题</p></van-col
              >
              <van-col span="6"
                ><img src="../../public/img/my/24.png" alt="" />
                <p>售后规则</p></van-col
              >
              <van-col span="6"
                ><img src="../../public/img/my/25.png" alt="" />
                <p>防炸预警</p></van-col
              >
            </van-row>
          </div>
        </div>
        <!-- 更多工具 -->
        <div class="moudle">
          <div class="moudle-title">更多工具</div>
          <div class="moudle-con">
            <van-row gutter="5%">
              <van-col span="6">
                <img src="../../public/img/my/31.png" alt="" />
                <p>堂食合作</p>
              </van-col>
              <van-col span="6">
                <img src="../../public/img/my/32.png" alt="" />
                <p>美团收银</p></van-col
              >
              <van-col span="6"
                ><img src="../../public/img/my/33.png" alt="" />
                <p>生意贷</p></van-col
              >
              <van-col span="6"
                ><img src="../../public/img/my/34.png" alt="" />
                <p>扫码点餐</p></van-col
              >
            </van-row>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
main {
  background: #f2f2f2;
}
.content {
  padding: 0 20px;
  overflow: hidden;
}
.tool-bar {
  width: 100%;
  padding: 20px 0;
  box-sizing: border-box;
  overflow: hidden;
}
.tool-bar .van-icon {
  float: right;
  margin-right: 2vw;
}
.tool-bar .van-icon:first-child {
  margin-right: 0;
}
.no-login {
  font-size: 4vw;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
}
.no-login .avatar {
  float: left;
  width: 16vw;
  height: 18vw;
  margin-right: 5vw;
}
.no-login span {
  font-size: 6vw;
  float: left;
  color: #222;
  display: block;
  font-weight: 500;
}
.no-login .register {
  margin-top: 10vw;
  float: left;
  margin-left: -23vw;
  color: #999;
  font-size: 3vw;
}
.purse {
  margin: 4vw 0 3vw;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding: 2vw;
  width: 100%;
  box-sizing: border-box;
}
.purse-title {
  padding-top: 4vw;
}
.purse span {
  float: left;
  font-size: 4vw;
  font-weight: 400;
  color: #222;
  width: 70%;
  text-align: left;
}
.purse .go-purse {
  float: right;
  font-size: 3vw;
  color: #999;
  width: 30%;
  text-align: right;
}
.purse-con {
  width: 100%;
  margin: 10vw 0 3vw;
}
.p-col {
  width: 33%;
  text-align: center;
  overflow: hidden;
}
.col-top {
  width: 100%;
  overflow: hidden;
  text-align: center;
  padding: 4vw 4vw 2vw;
  box-sizing: border-box;
}

.p-col span:first-child {
  width: 70%;
  font-size: 6vw;
  text-align: right;
}
.p-col span:last-child {
  width: 30%;
  font-size: 3vw;
  padding-top: 2vw;
  text-align: center;
}
.p-col p {
  font-size: 3.5vw;
  text-align: center;
}
/* 常用服务 */
.moudlebox {
  margin: 1vw 0 25vw;
  border-radius: 10px;
  background: #fff;
}
.moudlebox .moudle {
  padding: 2vw 0;
}
.moudle .van-col {
  padding-bottom: 25px;
}
.moudle .moudle-title {
  margin-left: 2vw;
  padding-bottom: 3vw;
  width: 100%;
  text-align: left;
  font-size: 4vw;
  color: #222;
  font-weight: 400;
}
.moudle .moudle-con {
  padding-top: 3vw;
}
.moudle-con img {
  width: 30%;
}
.moudle-con p {
  font-size: 3vw;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>