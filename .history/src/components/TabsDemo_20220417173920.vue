<template>
  <div>
    
  </div>
</template>
<script lang="ts">
  import Demo from '../components/Demo.vue'
  import Tabs1Demo from '../components/Tabs1.demo.vue'
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