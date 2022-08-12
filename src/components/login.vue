<template>
  <main>
    <div class="loginbox">
      <van-tabs v-model="activeName">
        <van-tab title="账号密码登录" name="a">
          <div class="content">
            <div class="container">
              <form action="">
                <div class="field">
                  <input
                    class="input1"
                    type="text"
                    name=""
                    id=""
                    placeholder="输入账号"
                  />
                  <label for=""><van-icon name="contact" /></label>
                </div>
                <div class="field">
                  <input type="password" name="" id="" placeholder="输入密码" />
                  <label for=""></label>
                </div>
                <button type="submit" class="btnlogin">登录</button>
              </form>
            </div>
          </div>
          <div class="footer">
            <div class="container">
              <router-link to="/register"
                ><button class="btnpost">暂无账号，去注册</button></router-link
              >
              <p>忘记账号/密码</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="手机验证登录" name="b"
          ><div class="content">
            <div class="container">
              <form action="">
                <div class="field">
                  <input
                    class="input1"
                    type="text"
                    name=""
                    id=""
                    placeholder="手机号"
                  />
                  <label for=""><van-icon name="contact" /></label>
                </div>
                <div class="group">
                  <div class="field field-2">
                    <input type="tel" name="" id="" placeholder="验证码" />
                  </div>
                  <button class="btn-m">发送验证码</button>
                </div>
                <button type="submit" class="btnlogin">登录</button>
              </form>
            </div>
          </div>
          <div class="footer">
            <div class="container">
              <router-link to="/register"
                ><button class="btnpost">暂无账号，去注册</button></router-link
              >
              <p>忘记账号/密码</p>
            </div>
          </div></van-tab
        >
      </van-tabs>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      activeName: "a",
    };
  },
};
</script>
<style>
.loginbox .van-tab__text--ellipsis {
  font-size: 18px;
}
</style>
<style scoped>
.loginbox {
  margin: 20px 0;
}
.content {
  padding: 15px 0 12px;
}
.container {
  margin: 0 20px;
}
.field {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 15px;
}
.field-2 {
  padding-right: 150px;
}
.group {
  position: relative;
}
.field input {
  border: 1px solid #ccc;
  font-size: 14px;
  line-height: 24px;
  color: #333;
  outline: none;
  padding: 9px 32px 5px;
  width: 100%;
  box-sizing: border-box;
}
.field label {
  position: absolute;
  left: 10px;
  top: 13px;
}
.btnlogin {
  color: #ffffff !important;
  border-color: #fa553c !important;
  background-color: #fa553c !important;
  padding: 7px 15px;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid transparent;
  cursor: pointer;
  outline: none;
  font-size: 14px;
}
.btn-m {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  outline: none;
  border: 1px solid transparent;
  font-size: 14px;
  line-height: 24px;
  padding: 7px 15px;
  color: #666;
  border-color: #d9d9d9;
  background-color: #e5e5e5;
  width: 145px;
}
.footer {
  padding-bottom: 20px;
  overflow: hidden;
}
.btnpost {
  color: #fa553c !important;
  border-color: #fa553c !important;
  background-color: #ffffff !important;
  padding: 7px 15px;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid transparent;
  cursor: pointer;
  outline: none;
  font-size: 14px;
}
.footer p {
  color: rgb(250, 85, 60);
  float: right;
  font-size: 12px;
  padding-top: 10px;
}
</style>