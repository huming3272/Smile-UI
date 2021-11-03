<template>
  <div>
    <ul>
      <Switch :value="y" @input="y = $event"/>
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
        <Switch :value="content.result"  @input="content.result = $event" @click="edit()"></Switch>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import {inject,Ref,ref, watch,defineComponent,getCurrentInstance} from 'vue'
import Switch from '../lib/Switch.vue'
export default defineComponent({
  name: "SwitchDemo",
  components:{
    Switch
  },
  data(){
    return {
      
    }
  },
    setup(){
      const {proxy:that} = getCurrentInstance()
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
      console.log(that)
      
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
});
</script>