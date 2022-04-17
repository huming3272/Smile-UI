<template>

  <div>
      Dialog 示例
  </div>
  <Demo :component="Dialog1Demo"></Demo>
  <!-- <Demo :component="Dialog2Demo"></Demo> -->
</template>
<script lang='ts'>
import Dialog1Demo from '../components/Dialog1.demo.vue'
import Dialog2Demo from '../components/Dialog2.demo.vue'
import Demo from '../components/Demo.vue'
export default {
  name: "DialogDemo",
  components: {
    Demo
  },
  data() {
    return {};
  },
  setup() {
    // const that = getCurrentInstance().proxy;
    // //改变this指向后可以使用vue2里的$forceUpdate()
    return {
      Dialog1Demo,
      // Dialog2Demo
    };
  },
};

</script>