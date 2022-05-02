<template>
  <div>
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
    <button @click="add">
      摁下去
    </button>
  </div>
</template>
<script lang="ts">
import router from "../router/index";
import { computed,watch,watchEffect,ref,reactive } from "vue";
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
    let navList = reactive([])
    let count = ref(1)
    if (route.matched.length > 0) {
      navList = getRouteList(route)
    }
    router.afterEach((to, from) => {
        navList. = getRouteList(to)
        // routeList = to
        console.log('路由守卫')
      });
      const add = ()=>{
        count.value++
      }
      watch(count,(now,pre)=> {
        console.log('监听属性', count)
      })
      // watchEffect(()=>{
      //     // navList = getRouteList(routeList)
      //     // console.log('监听属性')
      //     console.log('监听属性', routeList)
      // },)
    // navList = computed(() => {
    //   console.log("computed")
    //   return getRouteList(routeList)
    // })
    return {
      navList,add
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
      margin-left: 5px;
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
</style>