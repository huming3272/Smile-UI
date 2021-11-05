<template>
  <div>
    <ul>
      <Button @click="onClick">
        一个按钮
      </Button>
    </ul>
  </div>
</template>
<script lang="ts">
  import Button from '../lib/Button.vue'
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