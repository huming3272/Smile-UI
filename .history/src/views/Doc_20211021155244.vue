<template>
  <div>
    222
    <Topnav></Topnav>
    <div class="content">
      <aside v-if="menuVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/swich">Switch 组件</router-link>
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
      <main>主内容</main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import {inject,Ref} from 'vue'
export default {
  components: {
    Topnav,
  },
  setup(){
    //setup做的事情有点像用函数定义vue2的data
    const menuVisible = inject<Ref<boo>>('menuVisible') //get
    //引入名为menuVisible
    return {menuVisible}
    // return 暴露出去，才能在这个文件中使用menuVisible
  }
};
</script>
<style lang="scss" scoped>
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top:70px;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
}
</style>
