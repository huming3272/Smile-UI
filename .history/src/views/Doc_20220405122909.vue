<template>
  <div class="layout">
    <Topnav class="nav"></Topnav>
    <div class="content">
      <aside v-if="menuVisible">
        <h2>
          文档
        </h2>
        <ol>
          <li>
            <router-link to="/doc/intro">
              介绍
            </router-link>
          </li>
          <li>
            <router-link to="/doc/install">
              安装
            </router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">
              开始使用
            </router-link>
          </li>
        </ol>
        <h2>
          <router-link to='/doc'>
            组件列表
          </router-link>
        </h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import {inject,Ref,onMounted,onUnmounted} from 'vue'
import  router  from '../router/index';
export default {
  components: {
    Topnav,
  },
  setup(){
    //setup函数是处于 生命周期函数 beforeCreate 和 Created 两个钩子函数之前的函数,类似用函数定义vue2的data
    const menuVisible = inject<Ref<boolean>>('menuVisible') //get
    const toggleAside = inject<Ref<boolean>>('toggleAside')
    toggleAside.value = true
    //引入名为menuVisible
    
    const menuActive = () => {
          if (window.innerWidth > 500){
            menuVisible.value = true
          }
      }
    onMounted(() => {
      window.addEventListener('resize',menuActive)
    })
    onUnmounted(() => {
      window.removeEventListener('resive',menuActive)
    })
    
    router.afterEach((to, from) => {

      // menuVisible.value = false
    })
    
    return {menuVisible}
    // return 暴露出去，才能在这个文件中使用menuVisible
    
  },
  methods: {

  }
  
};
</script>
<style lang="scss" scoped>
.router-link-active {
  text-decoration: underline;
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  z-index: 10;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 53px;
    padding-left: 150px;
    @media (max-width: 500px) {
      padding-left: 0; 
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
    // position: relative;
    h2{
      >.router-link-active{
        background: rgba(0,0,0,0.2);
      }
    }
    >ol{
      .router-link-active{
        background: rgba(255, 81, 0, 0.5)
      }
    }
      
  }
  > main {
    flex-grow: 1;
    padding: 16px 0;
    background: lightgreen;
  }
}
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
      >a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }
    }
  }
  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
  }
}
main {
  overflow: auto;
}
</style>
