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
            组件列表
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
          <li>
            <router-link to="/doc/breadcrumb">Breadcrumb 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/cascader">Cascader 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <Breadcrumb/>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import {inject,Ref,onMounted,onUnmounted} from 'vue'
import  router  from '../router/index';
import Breadcrumb from "../lib/Breadcrumb.vue";
export default {
  components: {
    Topnav,
    Breadcrumb
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
    position: relative;
    z-index: 21;
  }
  > .content {
    flex-grow: 1;
    padding-left: 200px;
    @media (max-width: 500px) {
      padding-left: 0; 
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
    position: absolute;
    z-index: 20;
    top: 0;
    h2{
      >.router-link-active{
        // background: rgba(0,0,0,0.2);
      }
    }
    >ol{
      .router-link-active{
        // background: rgba(255, 81, 0, 0.5)
      }
    }
      
  }
  > main {
    flex-grow: 1;
    padding: 20px 10px;
    // background: lightgreen;
    
  }
}
aside {
  // background: lightblue;
  // background: rgba(140, 196, 255, 0.5);
  background: #c5e1ff;
  width: 200px;
  // padding: 16px 0 16px 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  // z-index: 20;
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
      .router-link-active{
        background: white;
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
