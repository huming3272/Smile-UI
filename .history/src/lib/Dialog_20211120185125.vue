<template>
<div class="gulu-dialog-overlay"></div>
<div class="gulu-dialog-wrapper">
  <div class="gulu-dialog">
    <header>标题 <span class="gulu-dialog-close"></span></header>
    <main>
      <p>第一行字</p>
      <p>第二行字</p>
    </main>
    <footer>
      <Button level="main">OK</Button>
      <Button>Cancel</Button>
    </footer>
  </div>
</div>
</template>
<script>
import Button from './Button.vue'
export default {
    components:{
        Button,
    }
}
</script>
<style lang="scss">
  
</style>