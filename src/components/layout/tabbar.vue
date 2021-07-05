<template>
  <van-tabbar v-model="activeNavbar" class="navbar">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="shop-collect-o">商城</van-tabbar-item>
    <van-tabbar-item icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'navbar',
  setup: () => {
    let activeNavbar = ref(0)

    return {
      activeNavbar,
    }
  },
})
</script>
