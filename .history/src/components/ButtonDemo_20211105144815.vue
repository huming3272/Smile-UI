<template>
  <div>
    <ul>
      <Button @click="t">
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
    }
  }
</script>
<style lang="scss">
</style>