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
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 500 ? false : true);
    //定义初值，类似vue2的data
    
    provide('menuVisible',menuVisible)//set
    //provide提供menuVisible给全局
  },

}
</script>
