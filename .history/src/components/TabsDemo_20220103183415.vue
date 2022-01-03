<template>
  <div>
    <ul>
      <li>
        <Tabs>
          <Tab>
          </Tab>
          <div>非tab</div>
        </Tabs>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
  import Tab from '../lib/Tab.vue'
  import Tabs from '../lib/Tabs.vue'
  export default{
    data(){
      return {

      }
    },
    components:{
      Tab,Tabs
    }
  }
</script>