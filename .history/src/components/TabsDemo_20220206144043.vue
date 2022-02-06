<template>
  <div>
    <ul>
      <li>
        <Tabs v-model:selected="x">
          <Tab title="tab1">导航1</Tab>
          <Tab title="tab2">导航2</Tab>
          <Tab title="tab3">导航3</Tab>
        </Tabs>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
  import Tab from '../lib/Tab.vue'
  import Tabs from '../lib/Tabs.vue'
  import { ref } from 'vue'
  export default{
    components:{
      Tab,Tabs
    },
    setup(){
      const tabs = [
        {title:'tab1',content:'导航1'},
        {title:'tab2',content:'导航2'},
        {title:'tab1',content:'导航1'}
      ]
      const x = ref('tab1')
      return {x}
    }
  }
</script>