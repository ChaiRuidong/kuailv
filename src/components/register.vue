<template>
  <main>
    <div class="mobile">
      <div class="mobile-header">手机号注册</div>
      <div class="mobile-content">
        <form action="">
          <div class="mobile-field">
            <span class="input">
              <input
                class="field-input"
                type="tel"
                maxlength="11"
                placeholder="输入手机号码"
                value=""
              />
            </span>
          </div>
          <div class="policy-container">
            <div class="read">
              <input type="checkbox" name="policy" id="policy" />
              <label for="policy"
                >我已阅读并同意
                <router-link to="">《快驴商城服务条款》</router-link></label
              >
            </div>
            <button class="btnnext" type="submit" disabled>下一步</button>
          </div>
        </form>
      </div>
      <div class="mobile-footer">
        <router-link to="/login">已有账号，去<span>登录></span></router-link>
      </div>
    </div>
  </main>
</template>
<style scoped>
.mobile {
  padding: 36px 30px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  color: #333;
  background: #fff;
}
.mobile-header {
  font-size: 6vw;
  font-weight: 700;
  text-align: left;
  margin-bottom: 5vw;
}
.mobile-field {
  position: relative;
  border-bottom: 1px solid #666;
  padding: 8px 0;
  box-sizing: border-box;
  width: 100%;
}
.input {
  color: #333;
  border: 0 none;
  outline: none;
  box-sizing: border-box;
  appearance: none;
  position: relative;
}
.field-input {
  box-sizing: border-box;
  width: 100%;
  border: 0 none;
  font-size: 4vw;
  color: #333;
  outline: none;
}
.policy-container {
  padding-bottom: 20px;
  font-size: 2vw;
}
.read {
  text-align: left;
  padding: 10vw 0 0;
  display: flex;
  align-items: center;
}
.read input {
  margin-right: 1vw;
}
.read a {
  color: #3dc6b6;
}
.btnnext {
  font-size: 4vw;
  width: 100%;
  margin-top: 5vw;
  padding: 7px 15px;
}
.mobile-footer {
  width: 100%;
  text-align: left;
}
.mobile-footer a {
  font-size: 0.5vw;
  color: #999;
}
.mobile-footer span {
  color: rgb(255, 83, 56);
}
</style>