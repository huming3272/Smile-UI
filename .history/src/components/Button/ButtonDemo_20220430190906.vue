<template>
  <div>

    <Demo :component="Button1Demo"></Demo>
  </div>
</template>
<script lang="ts">
  import Demo from '../Demo.vue'
  import Button1Demo from './Button1.demo.vue'
  import Bread
  export default {
    components:{
      Button1Demo,
      Demo
    },
    setup(){
      const onClick = ()=>{
        console.log('被触发')
      }
      return {
        onClick,
        Button1Demo,
        Demo
      }
    }
  }
</script>
<style lang="scss">
</style>