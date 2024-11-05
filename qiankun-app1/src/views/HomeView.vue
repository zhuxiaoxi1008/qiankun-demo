<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'


const router = useRouter()
const ck = () => {
  console.log('ck')
  router.push('/about')
}
</script>

<template>
  <div>
    <h1 class="green">This is app1 home page</h1>
    <el-button type="primary"  @click="ck">Primary Button</el-button>
  </div>
</template>
