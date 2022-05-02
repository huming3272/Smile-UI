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
import { computed,watchEffect,ref } from "vue";
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
    let routeList = router.currentRoute.value;
    let navList = ref([])
    // if (route.matched.length > 0) {
    //   navList = getRouteList(route)
    // }
    router.afterEach((to, from) => {
        routeList = to
        console.log('路由守卫')
      });
      watchEffect(()=>{
          // navList = getRouteList(routeList)
          // console.log('监听属性')
          console.log('监听属性')
      })
    // navList = computed(() => {
    //   console.log("computed")
    //   return getRouteList(routeList)
    // })
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