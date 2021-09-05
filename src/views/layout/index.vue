<template>
  <view class="layout-container">
    <!-- 子路由出口 -->
    <router-view></router-view>
    <!-- /子路由出口 -->
    <!-- 底部导航栏 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="comment-o" to="/qa">问答</van-tabbar-item>
      <van-tabbar-item icon="video-o" to="/video">视频</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
    <!-- /底部导航栏 -->
  </view>
</template>

<script>
/**
* author        范勤晗
* time          2021-9-5 11:19:01 ?F10: AM?
* description
*/

export default {
  name: 'LayouIndex',
  data () {
    return {
      active: 0
    }
  },
  comments: {},
  props: {},
  computed: {},
  watch: {},
  created () {},
  methods: {
  }
}
</script>

<style lang="less" scoped>

</style>
