<template>
  <div>
    <ul>
      <Switch :value="y" @input="y = $event"/>
    </ul>
    <hr>
    <ul>
      <li></li>
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
  data(){
    return {
      
    }
  },
    setup(){
    const y = ref(true)
    const schedule = [
        {data:{'吃饭':false}},
        {data:{'洗澡':false}},
        {data:{'写作':true}}
        ]
    const edit = ()=>{
      console.log(schedule)
    }
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