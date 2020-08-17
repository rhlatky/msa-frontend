<template>
  <ul>
    <li><router-link :to="'/'">Home</router-link></li>
    <li><router-link :to="'value'">Value</router-link></li>
  </ul>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>
