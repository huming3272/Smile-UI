<template>
  <div>
    
  </div>
</template>
<script lang="ts">
  import Demo from '../components/'
  export default {
    components:{
      Button
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