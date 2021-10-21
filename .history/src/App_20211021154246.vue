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
    //定义初值，类似vue2的data
    
    provide('menuVisible',menuVisible)//set
    //provide提供menuVisible给全局
  },

}
</script>
