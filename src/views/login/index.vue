<template>
  <div class="login-container">
    <van-nav-bar class="app-nav-bar"
      title="登录"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- 登录表单 -->
    <van-cell-group>
      <van-field
        v-model="user.mobile"
        left-icon="shouji"
        icon-prefix="blairtt"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="user.code"
        clearable
        left-icon="yanzhengma"
        icon-prefix="blairtt"
        placeholder="请输入验证码"
      >
        <template #button>
          <van-button class="send-btn" size="small" type="info" round>发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <div class="login-btn-wrap">
      <van-button
        @click="OnLogin"
        class="login-btn" 
        block type="primary"
        >登录</van-button>
    </div>
  </div>
</template>

<script>
/**
* author        范勤晗
* time          2021-9-1 9:06:40 ?F10: PM?
* description
*/
export default {
  name: 'LoginIndex',
  comments: {},
  props: {},
  data () {
    return {
      user: {
        mobile: "",
        code: ""
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {
    OnLogin(){
      
    }
  }
}
</script>

<style scoded lang='less'>
  .login-container {
    .login-btn-wrap {
      padding: 26px 16px;
      .login-btn{
        background-color: #6db4fb;
        border: none;
        .van-button__text{
          font-size: 15px;
        }
      }
    }
    .send-btn{
      width: 76px;
      height: 25px;
      background-color: #ededed;
      border: none;
      .van-button__text {
          font-size: 11px;
          color: #666666;
        }
      }
  }


</style>
