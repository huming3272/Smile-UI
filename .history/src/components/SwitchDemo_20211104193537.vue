<template>
  <div>
    <ul>
      <Switch v-model:value="bool" />
    </ul>
    <hr>
    <p>
      {{schedule}}
    </p>
    <ul>
      <li v-for="content,index of schedule" :key="index" >
        <span>
          {{content.obj}}
        </span>
        <Switch v-model:value="content.result"   @click="edit()"></Switch>
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
      const that = getCurrentInstance().proxy
      //改变this指向后可以使用vue2里的$forceUpdate()
      const bool = ref(true)
      const schedule = [
        {obj:'吃饭',
        result:false},
        {obj:'洗澡',
        result:false},
        {obj:'写作',
        result:true}
        ]
    const edit = ()=>{
      // that.$forceUpdate()
      schedule.slice()
    }
    return{
      bool,schedule,edit
    }
  },
  watch:{
    'y':function(){
      console.log('y',this.y)
    }
  }
};
</script>