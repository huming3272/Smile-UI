<template>
  <div class="layout">
    <Topnav class="nav"></Topnav>
    <div class="content">
      <aside v-if="menuVisible">
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
import {inject,Ref} from 'vue'
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
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
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
    h2{
      >.router-link-active{
        background: rgba(0,0,0,0.2);
      }
    }
    >.router-link-active{
      background: rgba()
    }  
  }
  > main {
    flex-grow: 1;
    padding: 16px;
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
  }
  > ol {
    > li {
      padding: 4px 0;
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
