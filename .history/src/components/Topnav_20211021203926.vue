<template>
  <div class="topnav">
    <div class="logo" >LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
      <li>菜单3</li>
      <span class="toggleAside" @click="toggleMenu"></span>
    </ul>
  </div>
</template>
<script lang="ts">
import {inject,Ref} from 'vue'
export default {
  setup(){
    
    const menuVisible = inject<Ref<boolean>>('menuVisible') //get
    //inject<Ref<boolean>>('menuVisible')
    //从全局引入menuVisible为boolean类型的Ref参数
    // menuVisible变量可以认为是data里的
    const toggleMenu = ()=>{
      menuVisible.value = !menuVisible.value
      //这里类似methods
      
    }
    return {toggleMenu}
  }
}
</script>
<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  position: relative;
  z-index: 10;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    cursor: pointer;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    display: none;
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width:500px) {
    > .menu{display: none;} 
    > .logo{margin: 0 auto;}
    >.toggleAside{
      display: inline-block;
    }
  }
}
</style> 