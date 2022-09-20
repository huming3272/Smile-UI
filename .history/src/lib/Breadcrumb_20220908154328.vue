<template>
  <div class="breadcrumbWrapper">
    <ul class="breadcrumb">
      <li>
        <router-link to="/">
          <span>首页</span>
        </router-link>
      </li>
      <li v-for="item in navList" :key="item">
        <router-link :to="item.path">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-arrow-double-right"></use>
          </svg>
          <span>{{ item.title }}</span>
        </router-link>
      </li> 
    </ul>
  </div>
</template>
<script lang="ts">

import { useRouter, useRoute } from 'vue-router'
import { ref } from "vue";
export default {
  setup(prop, content) {
    if (!useRouter?.() || !useRoute?.()){
      
    }
    const getRouteList = (target) => {
      return target.matched.map((ele) => {
        return {
          title: ele.meta.title,
          path: ele.path,
        };
      });
    };
    // 获取用于vue2的route的对象
    let route = useRoute()
    let navList = ref([]);
    if (route.matched.length > 0) {
      navList.value = getRouteList(route);
    }
    useRouter().afterEach((to, from) => {
      navList.value = getRouteList(to);
      // 获取进入的页面的path
    });
    return {
      navList,
    };
  },
};
</script>
<style lang="scss">
.breadcrumbWrapper {
  display: inline-flex;
  border: 1px solid #add8e6;
  border-radius: 5px;
  .breadcrumb {
    display: flex;
    justify-content: start;
    > li {
      margin-right: 5px;
      display: flex;
      align-items: center;
      > a {
        text-decoration: none;
        display: flex;
        align-items: center;
        > span {
          margin-left: 5px;
        }
        > .icon {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}
</style>