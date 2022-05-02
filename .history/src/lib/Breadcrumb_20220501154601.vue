<template>
  <div>
    <ul class="breadcrumb">
      <li>
        <router-link to="/">
          <span>首页</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-arrow-double-right"></use>
          </svg>
        </router-link>
      </li>
      <li v-for="item in navList" :key="item">
        <router-link :to="item.path">
          <span>{{ item.title }}</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-arrow-double-right"></use>
          </svg>
        </router-link>
      </li>
    </ul>
    <div>
      {{navList}}
    </div>
  </div>
</template>
<script lang="ts">
import router from "../router/index";
import { computed } from "vue";
export default {
  setup(prop, content) {
    const getRouteList = (target) => {
      return target.matched.map((ele) => {
        return {
          title: ele.meta.title,
          path: ele.path,
        };
      });
    };
    const route = router.currentRoute.value;
    // 获取用于vue2的route的对象
    let routeList
    // if (route.matched.length > 0) {
    //   navList = getRouteList(route)
    // }
    let routeList
    router.afterEach((to, from) => {
        routeList = to
      });
    
    return {
      navList,
    };
  },
};
</script>
<style lang="scss">
.breadcrumb {
  display: flex;
  justify-content: start;
  > li {
    margin-right: 5px;
    > a {
      text-decoration: none;
      margin-right: 5px;
      display: flex;
      align-items: center;
      > span {
        margin-right: 5px;
      }
      > .icon {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>