<demo>
    常规使用
</demo>
<template>
  <div>
        <Tabs v-model:selected="x">
          <Tab 
            v-for="(item, index) in tabs" 
            :key="index" 
            :title="item.title">
            {{item.content}}
          </Tab>
        </Tabs>
  </div>
</template>
<script lang="ts">
  import { Tab } from '../../lib/index'
  import { Tabs } from '../../lib/index'
  import { ref } from 'vue'
  export default{
    components:{
      Tab,Tabs
    },
    setup(){
      const tabs = [
        {title:'tab1',content:'导航1'},
        {title:'tab2',content:'导航2'},
        {title:'tab3',content:'导航3'}
      ]
      const x = ref(tabs[0].title)
      return {tabs, x}
    }
  }
</script>