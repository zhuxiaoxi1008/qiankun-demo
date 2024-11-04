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
    <h1 class="green">This is app1</h1>
    <button type="primary" @click="ck">Primary Button</button>
  </div>
</template>
