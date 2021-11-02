<template>
    <button>
        <span></span>
    </button>
</template>
<script lang="ts">
export default {
    
}
</script>
<style lang="scss" scoped>
    $h: 22px;
  $h2: $h - 4px;
  button{
    height: $h;
    width: $h*2;
    border: none;
    background: blue;
    border-radius: $h/2;
    position: relative;
  }
</style>