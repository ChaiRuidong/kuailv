<template>
  <main>
    <!-- 搜索框 -->
    <div class="head">
      <van-search v-model="value" placeholder="请输入商品名称" />
    </div>
    <!-- 菜单栏 -->
    <div class="level">
      <van-tabs>
        <van-tab title="蔬菜水果" name="a">
          <van-tree-select
            height="200vw"
            :items="items1"
            :main-active-index.sync="active"
          >
            <template #content>
              <div class="con" v-if="active === 0">
                <ul>
                  <router-link to="/detail">
                    <li>
                      <div class="c-left">
                        <div class="imgbox">
                          <img src="img/sort/s1.png" alt="" />
                        </div>
                      </div>
                      <div class="c-right">
                        <h3>金针菇</h3>
                        <div class="specs">
                          <span>常规</span><span>|</span><span>15cm</span>
                        </div>
                        <div class="warn">
                          <img src="" alt="" />
                          近七天客诉较高
                        </div>
                        <p>5斤</p>
                        <div class="price">
                          <span>￥20元</span
                          ><img src="../../public/img/join.png" alt="" />
                        </div>
                        <div class="shop">
                          <div class="shop-name">百味优选</div>
                          <div class="go-shop">进店></div>
                        </div>
                      </div>
                    </li>
                  </router-link>
                  <li>
                    <div class="c-left">
                      <div class="imgbox">
                        <img src="img/sort/s2.png" alt="" />
                      </div>
                    </div>
                    <div class="c-right">
                      <h3>胡萝卜</h3>
                      <div class="specs">
                        <span>常规</span><span>|</span><span>15cm</span>
                      </div>
                      <div class="warn">
                        <img src="" alt="" />
                        近七天客诉较高
                      </div>
                      <p>4斤</p>
                      <div class="price">
                        <span>￥18元</span
                        ><img src="../../public/img/join.png" alt="" />
                      </div>
                      <div class="shop">
                        <div class="shop-name">X家菜园子</div>
                        <div class="go-shop">进店></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="c-left">
                      <div class="imgbox">
                        <img src="img/sort/s3.png" alt="" />
                      </div>
                    </div>
                    <div class="c-right">
                      <h3>西红柿</h3>
                      <div class="specs">
                        <span>常规</span><span>|</span><span>5cm</span>
                      </div>
                      <div class="warn">
                        <img src="" alt="" />
                        近七天客诉较高
                      </div>
                      <p>3斤</p>
                      <div class="price">
                        <span>￥9元</span
                        ><img src="../../public/img/join.png" alt="" />
                      </div>
                      <div class="shop">
                        <div class="shop-name">百味优选</div>
                        <div class="go-shop">进店></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="con" v-if="active === 1">223</div>
            </template>
          </van-tree-select>
        </van-tab>
        <van-tab title="鲜肉禽水产"> 22</van-tab>
        <van-tab title="冻肉禽水产">33 </van-tab>
        <van-tab title="米面油蛋"> 55</van-tab>
        <van-tab title="酒水饮料"> </van-tab>
        <van-tab title="调料调味品"> 33</van-tab>
        <van-tab title="熟食预制菜"> 33</van-tab>
        <van-tab title="豆腐豆制品"> 33</van-tab>
        <van-tab title="冷冻半成品"> </van-tab>
        <van-tab title="餐厨用品"> </van-tab>
      </van-tabs>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      active: 0,
      items1: [
        { text: "爆品" },
        { text: "叶菜类" },
        { text: "椒类" },
        { text: "根茎类" },
        { text: "泡菜/花菜" },
        { text: "豆芽/豆类" },
        { text: "茄果瓜类" },
        { text: "姜葱蒜" },
      ],
    };
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.head .van-search {
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
}
.level .van-tab {
  font-size: 4vw;
}
.head .van-search__content {
  border-radius: 10px;
}
.head .van-search .van-cell {
  padding: 12px 0;
}
.head .van-cell {
  font-size: 3vw;
}
.level .van-tabs--line .van-tabs__wrap {
  /* position: fixed; */
  top: 65px;
}
.level .van-tabs__content {
  padding-top: 8px;
}
.level .van-sidebar-item {
  font-size: 22px;
}
.level .van-tree-select__nav-item {
  padding: 35px 0;
}
</style>
<style scoped>
.level {
  margin-top: 0;
}
.con {
  padding: 15px;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
}
.con li {
  margin-top: 10px;
  overflow: hidden;
  background: #f2f2f2;
}
.c-left {
  float: left;
  width: 30%;
  padding: 2vw 0 0 2vw;
}
.c-left .imgbox {
  float: left;
}
.c-left .imgbox img {
  width: 100%;
}
.c-right {
  float: right;
  width: 65%;
}
.c-right h3 {
  text-align: left;
  font-size: 4vw;
  font-weight: 400;
}
.c-right .specs {
  text-align: left;
  /* font-size: 2vw; */
}
.c-right .specs span {
  font-size: 2vw;
  margin-right: 2vw;
  font-size: 2.5vw;
}
.c-right .warn {
  text-align: left;
  color: red;
  font-size: 2.5vw;
}
.c-right p {
  text-align: center;
  width: 7vw;
  font-size: 2.5vw;
  border-radius: 2vw;
  background: #f2f2f2;
}
.c-right .price {
  width: 100%;
  overflow: hidden;
}
.c-right .price span {
  float: left;
  font-size: 2.5vw;
  color: red;
}
.c-right .price img {
  width: 12%;
  float: right;
}
.shop {
  overflow: hidden;
}
.shop-name {
  float: left;
  font-size: 3vw;
}
.go-shop {
  float: right;
  font-size: 3vw;
}
</style>