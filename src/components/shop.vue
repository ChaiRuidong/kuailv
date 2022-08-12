<template>
  <main>
    <div class="box">
      <div class="head">
        <p><span>购物车（3）</span><span>降价</span><span>常购</span></p>
      </div>
      <div class="warn">
        <van-notice-bar
          left-icon="volume-o"
          text="请正确填写收货地址，在6:00前下单"
        />
      </div>
    </div>
    <div class="con">
      <ul>
        <li>
          <div class="top">X家菜园子</div>
          <van-card
            num="3"
            tag="2元一斤"
            price="6.00"
            desc="无"
            title="金针菇"
            thumb="img/sort/s1.png"
            origin-price="10.00"
          />
        </li>
        <li>
          <div class="top">百味优选</div>
          <van-card
            num="2"
            tag="特价"
            price="6.00"
            desc="描述信息"
            title="胡萝卜"
            thumb="img/sort/s2.png"
            origin-price="10.00"
          />
        </li>
        <li>
          <div class="top">X家菜园子</div>
          <van-card
            num="6"
            tag="活动"
            price="10.00"
            desc="3元一斤"
            title="西红柿"
            thumb="img/sort/s3.png"
            origin-price="18.00"
          />
        </li>
        <li>
          <div class="top">X家菜园子</div>
          <van-card
            num="2"
            tag="标签"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="img/sort/s1.png"
            origin-price="10.00"
          />
        </li>
      </ul>
    </div>
    <div class="bottom">
      <van-submit-bar :price="3050" button-text="去结算">
        <van-checkbox>全选</van-checkbox>
        <template #tip>
          你的收货地址不支持同城送,
          <span>修改地址</span>
        </template>
      </van-submit-bar>
    </div>
  </main>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.con .van-card__content {
  text-align: left;
}
.con .van-card__title {
  line-height: 3vw;
}
.bottom .van-submit-bar {
  position: fixed;
  left: 0;
  bottom: 13vw;
}
</style>
<style scoped>
.box {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100%;
  padding-bottom: 10px;
  background: #fff;
}
.head {
  margin: 0 20px;
  padding: 20px 0;
  text-align: left;
  width: 100%;
  /* background: #fff; */
}
.warn {
  margin: 0 20px;
  border-radius: 10px;
  width: 90%;
  box-sizing: border-box;
}
.head p {
  font-size: 4vw;
}
.head p span {
  margin-right: 1vw;
}
.con {
  margin: 130px 20px;
  padding: 10px 0;
  /* width: 100%; */
  box-sizing: border-box;
}
.con li {
  margin-top: 10px;
  background: #fff;
  padding: 3vw 2vw;
  border-radius: 10px;
}
.con .van-card {
  background: #fff;
  font-size: 2.5vw;
}
.con .top {
  text-align: left;
  font-size: 4vw;
  font-weight: 400;
}
</style>