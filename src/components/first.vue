<template>
  <main>
    <!-- router-view放置跳转以后渲染的内容 -->
    <!-- <router-link>实现页面跳转 to跳转路径  router-link最终渲染成了a标签-->
    <router-view></router-view>
    <div class="box">
      <van-tabbar
        v-model="active"
        active-color="#ee0a24"
        inactive-color="#000"
        tabbar-height="70px"
      >
        <van-tabbar-item icon="home-o" to="/index">首页</van-tabbar-item>
        <van-tabbar-item icon="apps-o" to="/sort">分类</van-tabbar-item>
        <van-tabbar-item icon="cart-o" to="/shop">购物车</van-tabbar-item>
        <van-tabbar-item icon="orders-o" to="/order">订单</van-tabbar-item>
        <van-tabbar-item icon="manager-o" to="/my">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      active: "",
    };
  },
};
</script>
<style>
* {
  margin: 0px;
  padding: 0px;
  list-style: none;
}
.box .van-tabbar {
  height: 13vw;
}
.box .van-tabbar-item {
  font-size: 2vw;
}
</style>
<style scoped>
.box {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
}
</style>