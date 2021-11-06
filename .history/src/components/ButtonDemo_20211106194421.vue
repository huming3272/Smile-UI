<template>
  <div>
    
      <!-- <Button @click="onClick" @focus="onClick" @mouseleave="onClick" size='large'>
        一个按钮
      </Button> -->
    <div>
      <h1>shili</h1>
      <Button>默认</Button>
      <Button theme="button">按钮1</Button>
      <Button theme="link">按钮2</Button>
      <Button theme="text">按钮3</Button>
    </div>
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