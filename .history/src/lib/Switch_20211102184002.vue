<template>
    <button @click="toggle" :class="{'checked':checked}">
        <span></span>
    </button>
</template>
<script lang="ts">
import {ref} from 'vue'
export default {
    props:['value'],
    setup(props,context){
        const checked = props.value
        const toggle = ()=>{
            
            // checked.value = !checked.value
            console.log('value')
        }
        return {checked,toggle}
    }
}
</script>
<style lang="scss" scoped>
    $h: 22px;
    $h2: $h - 4px;
  button{
    outline:none;
    height: $h;
    width: $h*2;
    border: none;
    background: grey;
    border-radius: $h/2;
    position: relative;
    transition: background-color 500ms;
    span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background:white;
    transition: left 250ms;
    border-radius: $h2 / 2;
    } 
  }
  button.checked{
      background: blue;
  }
  button.checked > span{
      left: calc(100% - #{$h2} - 2px);
  }

</style>