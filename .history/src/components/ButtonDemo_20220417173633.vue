<template>
  <div>
    <!-- <Demo :component="Button1Demo"></Demo> -->
  </div>
</template>
<script lang="ts">
  import Demo from '../components/Demo.vue'
  import Button1Demo from '../components/Button1.demo.vue'
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
      }
    }
  }
</script>
<style lang="scss">
</style>