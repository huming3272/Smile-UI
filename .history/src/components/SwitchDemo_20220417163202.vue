<template>
  <div>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
  </div>
</template>
<script lang="ts">
import { inject, Ref, ref, watch, getCurrentInstance } from "vue";
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'
import Demo from '../components/Demo.vue'
export default {
  name: "SwitchDemo",
  components: {
    Button,
    Demo
  },
  data() {
    return {};
  },
  setup() {
    // const that = getCurrentInstance().proxy;
    // //改变this指向后可以使用vue2里的$forceUpdate()
    return {
      Switch1Demo,
      Switch2Demo,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
