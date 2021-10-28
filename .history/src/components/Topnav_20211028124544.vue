<template>
  <div class="topnav">
    <div class="logo" >LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
      <li>菜单3</li>
    </ul>
    <span class="toggleAside" v-if="toggleAside"  @click="toggleMenu">333</span>
  </div>
</template>
<script lang="ts">
import {inject,Ref} from 'vue'
import router from '../router/index'
export default {
  setup(){
    
    const menuVisible = inject<Ref<boolean>>('menuVisible') //get
    const toggleAside = inject<Ref<boolean>>('toggleAside')
    //inject<Ref<boolean>>('menuVisible')
    //从全局引入menuVisible为boolean类型的Ref参数
    // menuVisible变量可以认为是data里的
    const toggleMenu = ()=>{
      // router.push('/doc')
      menuVisible.value = !menuVisible.value
      //这里类似methods
      
    }
    router.afterEach((to,from) => {
      if(to.path)
      // toggleAside.value = false
    });
    return {toggleMenu,toggleAside}
  }
}
</script>
<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
    
  }
  >.toggleAside {
    width: 24px;
    height: 24px;
    background: red;
    border:1px solid red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .toggleAside {
      display: block;
    }
    > .logo {
      margin: 0 auto;
    }
    
  }
}
</style> 