<template>
  <ul class="breadcrumb">
    <li>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-arrow-double-right"></use>
      </svg>
    </li>
  </ul>
</template>
<script lang="ts">
import setup
import router from "../router/index";
export default {
  setup(prop,content) {
     console.log(1111)
  },
};
</script>
<style lang="scss">
    .breadcrumb{
        display: flex;
        justify-content: start;
        >li{
            >.icon{
                width: 32px;
                height: 32px;
            }
        }
    }
</style>