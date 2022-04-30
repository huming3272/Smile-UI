<template>
  <div>
    <ul class="breadcrumb">
      <li v-for="navList" >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-arrow-double-right"></use>
        </svg>
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
        return ele.meta.title
      }) 
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
    > .icon {
      width: 32px;
      height: 32px;
    }
  }
}
</style>