<template>
  <router-view/>
</template>

<script lang='ts'>
import {ref,provide} from 'vue'

export default {
  name: 'App',
  components: {

  },
  setup(){
    const menuVisible = ref(false)
    console.log('menuVisible22',menuVisible)
    provide('menuVisible',menuVisible)//set
  },
  mounted(){

  }
}
</script>
