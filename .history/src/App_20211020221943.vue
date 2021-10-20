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
    //定义初值
    
    provide('menuVisible',menuVisible)//set
    
  },
  mounted(){
      const some = ref(0)
      console.log('some',some)
  }
}
</script>
