<template>
  <div>
    <Demo :component="Tabs1Demo">
    </Demo>
  </div>
</template>
<script lang="ts">
  import Demo from '../components/Demo.vue'
  import Tabs1Demo from '../components/Tabs1.demo.vue'
  export default{
    components:{
      Tabs1Demo,
      Demo
    },
    setup(){
      return {
        Tabs1Demo
      }
    }
  }
</script>