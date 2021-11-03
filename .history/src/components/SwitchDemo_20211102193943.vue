<template>
  <div>
    <ul>
      <Switch :value="y" @input="y = $event"/>
    </ul>
  </div>
</template>
<script lang="ts">
import {inject,Ref,ref, watch} from 'vue'
import Switch from '../lib/Switch.vue'
export default {
  name: "SwitchDemo",
  components:{
    Switch
  },
  setup(){
    const y = ref(true)
    return{
      y
    }
  },
  watch:{
    'y':function(){
      console.log('y',this.y)
    }
  }
};
</script>