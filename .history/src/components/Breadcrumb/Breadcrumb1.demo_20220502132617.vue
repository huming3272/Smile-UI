<demo>
    使用
</demo>
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
import router from "../../router/index";
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
    // 获取用于vue的route的对象
    let route = router.currentRoute.value;
    let navList = ref([])
    if (route.matched.length > 0) {
      navList.value = getRouteList(route)
    }
    router.afterEach((to, from) => {
        navList.value = getRouteList(to)
        // routeList = to
      });
    return {
      navList
    };
  },
};
</script>