<template>
  <div>
    <ul class="breadcrumb">
      <li>
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
    let breadcrumbList = []
    if(route.matched.length > 0){
      const currentPage = route.matched.map((ele) => {
        return ele
      })
      breadcrumbList = 
    }
    
    console.log(route) 
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