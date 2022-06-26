<demo>
    使用
</demo>
<template>
  <div>
    <Cascader
      :message
    />
  </div>
</template>
<script lang="ts">
import Cascader from "../../lib/Cascader.vue";
import { ref,reactive } from "vue";
export default {
  components: {
    Cascader,
  },
};
</script>