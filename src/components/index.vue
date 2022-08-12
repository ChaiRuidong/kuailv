<template>
  <main>
    <!-- 头部 -->
    <header>
      <div class="headbox">
        <div class="place top">
          <img src="../assets/img/index/place.png" alt="" />
          <span>广州市</span>
        </div>
        <div class="search">
          <input type="text" name="" id="" placeholder="搜索想要的商品" />
        </div>
        <div class="news top">
          <img src="../assets/img/index/news.png" alt="" />
          <span>消息</span>
        </div>
        <div class="service top">
          <img src="../assets/img/index/service.png" alt="" />
          <span>客服</span>
        </div>
      </div>
    </header>
    <!-- 菜单栏 -->
    <div class="con">
      <van-grid clickable :column-num="5" :border="false">
        <van-grid-item icon="img/index/t1.jpg" text="蔬菜水果" to="/sort" />
        <van-grid-item icon="img/index/t2.jpg" text="鲜肉禽水产" to="/" />
        <van-grid-item icon="img/index/t3.jpg" text="冻肉禽水产" to="/" />
        <van-grid-item icon="img/index/t4.jpg" text="米面油蛋" to="/" />
        <van-grid-item icon="img/index/t5.jpg" text="酒水饮料" to="/" />
        <van-grid-item icon="img/index/t6.jpg" text="调料调味品" to="/" />
        <van-grid-item icon="img/index/t7.jpg" text="熟食预制菜" to="/" />
        <van-grid-item icon="img/index/t8.jpg" text="豆腐豆制品" to="/" />
        <van-grid-item icon="img/index/t9.jpg" text="冷冻半成品" to="/" />
        <van-grid-item icon="img/index/t10.jpg" text="餐厨用品" to="/" />
      </van-grid>
    </div>
    <!-- 公告 -->
    <div class="notice">
      <van-notice-bar left-icon="volume-o" text="商城每天6:00就打烊了！" />
    </div>
    <!-- 轮播 -->
    <div class="roll">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="img/index/lb1.jpeg" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="img/index/lb2.jpeg" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="img/index/lb1.jpeg" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 商品 -->
    <section id="goods">
      <van-row class="g-row" type="flex" justify="space-between">
        <van-col span="12" class="g-col">
          <img src="img/index/sp1.png" alt="" />
          <h3>胡萝卜</h3>
          <p>5斤</p>
          <div class="money">￥20 <span>元</span></div>
        </van-col>
        <van-col span="12" class="g-col">
          <img src="img/index/sp2.png" alt="" />
          <h3>西红柿</h3>
          <p>5斤</p>
          <div class="money">￥20 <span>元</span></div>
        </van-col>
        <van-col span="12" class="g-col">
          <img src="img/index/sp3.png" alt="" />
          <h3>油麦菜</h3>
          <p>5斤</p>
          <div class="money">￥20 <span>元</span></div>
        </van-col>
        <van-col span="12" class="g-col">
          <img src="img/index/sp4.png" alt="" />
          <h3>海天酱油</h3>
          <p>5斤</p>
          <div class="money">￥20 <span>元</span></div>
        </van-col>
        <van-col span="12" class="g-col">
          <img src="img/index/sp5.png" alt="" />
          <h3>干张</h3>
          <p>2斤</p>
          <div class="money">￥20 <span>元</span></div>
        </van-col>
      </van-row>
      <div class="nomore">没有更多了哦...</div>
    </section>
  </main>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  data() {
    return {};
  },
};
</script>
<style>
* {
  margin: 0vw;
  padding: 0vw;
  list-style: none;
}
main {
  background: #f2f2f2;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
.con .van-grid-item__text {
  text-overflow: ellipsis;
  font-size: 2.5vw;
}
.my-swipe .van-swipe-item {
  color: #fff;
  /* font-size: 20px; */
  text-align: center;
  /* background-color: #39a9ed; */
}
</style>
<style scoped>
header {
  width: 100%;
  background: #fff;
  position: fixed;
  z-index: 200;
  left: 0;
  top: 0;
  color: #fff;
}
.headbox {
  position: relative;
  padding: 10px 10px;
  z-index: 1;
  overflow: hidden;
}
.headbox img {
  width: 50%;
}
.headbox .top {
  float: left;
  display: flex;
  width: 10%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.headbox .search {
  float: left;
  display: flex;
  align-items: center;
  width: 60%;
  margin: 0 4vw;
}
.headbox .search input {
  width: 100%;
  border-radius: 5vw;
  padding: 2vw 4vw;
}
.headbox span {
  font-size: 1vw;
  color: #333;
}
.con {
  margin: 15vw 20px 0;
}
.con .van-grid {
  padding: 3vw 0;
}
.notice {
  margin: 0 20px;
}
.roll {
  margin: 10px 20px 0;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 10px;
}
.roll img {
  width: 100%;
  height: 100%;
}
.g-row img {
  width: 100%;
}
.g-row {
  margin-bottom: 7vw;
}
#goods {
  margin: 0 20px;
  padding-bottom: 20vw;
}
.g-col {
  width: 48%;
  padding: 10px 0;
  background: #fff;
  border-radius: 10px;
  margin-top: 3vw;
}
.g-col h3 {
  text-align: left;
  font-size: 3vw;
  padding: 0 10px;
}
.g-col p {
  font-size: 2.5vw;
  margin-top: 3vw;
  padding: 1vw;
  text-align: center;
  border-radius: 5px;
  margin-left: 10px;
  width: 7vw;
  background: #f2f2f2;
}
.g-col .money {
  text-align: left;
  color: red;
  font-size: 2.5vw;
  margin-top: 1vw;
  padding: 0 10px;
}
</style>