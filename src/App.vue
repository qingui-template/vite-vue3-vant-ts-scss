<template>
  <van-config-provider :theme-vars="themeVars">
    <router-view />
    <Tabbar />
    <van-number-keyboard safe-area-inset-bottom />
  </van-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Tabbar from './components/layout/tabbar.vue'

export default defineComponent({
  name: 'App',
  setup() {
    const themeVars = {}

    return { themeVars }
  },
  components: {
    Tabbar,
  },
})
</script>
