<template>
  <div>
    <ul>
      <Switch :/>
    </ul>
  </div>
</template>
<script lang="ts">
import {inject,Ref} from 'vue'
import Switch from '../lib/Switch.vue'
export default {
  name: "switch",
  components:{
    Switch
  }
};
</script>