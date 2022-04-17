<template>
  <div>
    
  </div>
</template>
<script lang="ts">
  import Demo from '../components/Button1.demo.vue'
  import Button1Demo from ''
  export default {
    components:{
      Button,
      Demo
    },
    setup(){
      const onClick = ()=>{
        console.log('被触发')
      }
      return {
        onClick
      }
    }
  }
</script>
<style lang="scss">
</style>