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
      cosnt onClick = ()=>{
        console.log('被触发')
      }
    }
  }
</script>
<style lang="scss">
</style>