<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-link to="/">Frank1</router-link>
  <router-link to="/xxx">Frank2</router-link>
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
