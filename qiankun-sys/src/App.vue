<script setup>
import { RouterLink, RouterView, useRoute  } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import { onMounted } from 'vue'
import { start } from 'qiankun'
import { injectMicroApps } from './qiankun-config/index'
onMounted(() => {
  if (!window.qiankunStarted) {
    // 是否启用qiankun
    window.qiankunStarted = true
    injectMicroApps()
    // 开启qiankun
    start({
      prefetch: 'all'
      // sandbox: {
      //   sandbox: { strictStyleIsolation: true }, // 严格隔离
      //   experimentalStyleIsolation: true // 样式隔离
      // }
    })
  }
})


const route = useRoute()
console.log(route)

</script>

<template>
  <div class="wrapper">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/app-vue3">app1</RouterLink>
      <RouterLink to="/app-vue3/about">app1 about</RouterLink>
  </div>

  <RouterView />
  
  <div id="app-vue3"></div>
  <!--  这里是子应用的入口容器，需要跟subApps 中子项的container对应 -->


</template>

<style scoped>
.wrapper{
  height: 32px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  a {
    margin-right: 16px;
  }
}
</style>
