<template>
  <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Frank from './components/Frank.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,Frank
  }
}
</script>
