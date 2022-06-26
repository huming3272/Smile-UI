<demo>
    使用
</demo>
<template>
  <div>
    <Cascader
      :sourceData="sourceData"
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
  setup(props, content){
    
    return {
      
    }
  }
};
</script>