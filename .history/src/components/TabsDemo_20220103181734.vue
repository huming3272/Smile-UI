<template>
  <div>
    <ul>
      <li>
        <Tabs>
          <div>
            鸡毛
          </div>
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