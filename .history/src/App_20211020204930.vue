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
    
    provide('menuVisible',menuVisible)//set
  },
  mounted(){
      const some = ref()
  }
}
</script>
