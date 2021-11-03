<template>
  <div>
    <ul>
      <Switch :value="y" @input="y = $event"/>
    </ul>
    <hr>
    <ul>
      <li v-for="content,index of schedule" :key="index" >
        <span>
          {{content.obj}}
        </span>
        <Switch :value="content.result"  @input="content.result = $event" @click="edit()"></Switch>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import {inject,Ref,ref, watch,getCurrentInstance} from 'vue'
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
        {obj:'写作',
        result:true}
        ]
    const edit = ()=>{
      console.log(schedule)
      let {ctx:taht} = getCurrentInstance()
      that.$forceUpdate()
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