<template>
  <div class="topnav">
    <router-link class="logo" to='/' > 
    </router-link>
    <router-link class="logo" to='/' > 
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-Smile"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">
          文档
        </router-link>
      </li>
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
      if(to.path==='/'){
        toggleAside.value = false
      }
       
    });
    return {toggleMenu,toggleAside}
  }
}
</script>
<style lang="scss" scoped>
$color: #007974;
.topnav {
  color: $color;
  // background: pink;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    >svg {
      width: 32px;
      height: 32px;
    }
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