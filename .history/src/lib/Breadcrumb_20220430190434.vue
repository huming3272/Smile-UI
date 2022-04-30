<template>
  <div>
    <ul class="breadcrumb">
      <li>
          
      </li>
      <li v-for="item in navList" :key="item">
        <router-link :to="item.path">
          <span>{{item}}</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-arrow-double-right"></use>
        </svg>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import router from "../router/index";
export default {
  setup(prop, content) {
    const route = router.currentRoute.value
    let navList
    if(route.matched.length > 0){
      navList = route.matched.map((ele) => {
        return {
          title: ele.meta.title,
          path: ele.path,
        }
      }) 
      console.log(route)
    }
    return {
      navList
    }
  },
};
</script>
<style lang="scss">
.breadcrumb {
  display: flex;
  justify-content: start;
  > li {
    margin-right: 5px;
    display: flex;
    align-items: center;
    >span{
      margin-right: 5px;
    }
    > .icon {
      width: 20px;
      height: 20px;
    }
  }
}
</style>