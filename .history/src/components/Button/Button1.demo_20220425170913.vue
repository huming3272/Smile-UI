<demo>
    常规使用
</demo>
<template>
  <div>
    <div>
      <Button @click="onClick" @focus="onClick" @mouseleave="onClick" >
        一个触发按钮
      </Button>
    </div>
    <div>
      <h1>示例1</h1>
      <Button>默认</Button>
      <Button theme="button">按钮类型</Button>
      <Button theme="link">链接类型</Button>
      <Button theme="text">文字类型</Button>
    </div>
    <div>
      <h1>示例2</h1>
      <Button size='big'>大按钮</Button>
      <Button>普通尺寸</Button>
      <Button size="small">小按钮</Button>
    </div>
    <div>
      <h1>示例3</h1>
      <Button theme="link" size="big">大大大</Button>
      <Button theme="link">普普通通</Button>
      <Button size="small" theme="link">小小小</Button>
    </div>
    <div>
      <h1>示例4</h1>
      <Button size="big" theme="text">大大大</Button>
      <Button theme="text">普普通通</Button>
      <Button size="small" theme="text">小小小</Button>
    </div>
    <div>
      <h1>示例5</h1>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="link" level="danger">危险文字按钮</Button>
      <Button theme="link" level="warnning">警告按钮</Button>
    </div>
    <div>
      <h1>示例6</h1>
      <Button disabled>禁用按钮</Button>
      <Button theme="link" disabled>禁用链接按钮</Button>
      <Button theme="text" disabled>禁用按钮</Button>
    </div>
    <div>
      <h1>示例7</h1>
      <Button loading>加载中</Button>
    </div>
  </div>
</template>
<script lang="ts">
  import Button from '@/lib/Button.vue'
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