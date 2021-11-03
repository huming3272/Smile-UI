<template>
  <div>
    <ul>
      <Switch :value="y" @input="y = $event"/>
    </ul>
    <hr>
    <ul>
      <li v-for="content,index of schedule" :key="index" >
        <span>
          {{content}}
        </span>
        <Switch :value="content"
      </li>
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
        {obj:'吃饭',
        result:false},
        {obj:'洗澡',
        result:false},
        {obj:'写作'true}}
        ]
    const edit = ()=>{
      console.log(schedule)
    }
    return{
      y,schedule,edit
    }
  },
  watch:{
    'y':function(){
      console.log('y',this.y)
    }
  }
};
</script>