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
import router from "../router/index";
import { ref } from "vue";
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
    // 获取用于vue2的route的对象
    let route = router.currentRoute.value;
    let navList = ref([])
    if (route.matched.length > 0) {
      navList.value = getRouteList(route)
    }
    router.afterEach((to, from) => {
        navList.value = getRouteList(to)
        // routeList = to
        console.log('路由守卫')
      });
    return {
      navList
    };
  },
};
</script>
<style lang="scss">
.breadcrumbWrapper{
  border: 1px so
.breadcrumb {
  display: flex;
  justify-content: start;
  > li {
    margin-right: 5px;
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