<template>
  <div>
    <Button @click="toggle">弹框显示</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2"></Dialog>
  </div>
</template>
<script lang='ts'>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {ref} from 'vue'
export default {
  components: {
    Dialog,
    Button,
  },
  setup(){
    const x = ref(false)
    const toggle = ()=>{
      x.value = !x.value
    }
    const f1 = ()=>{
      cosnole.log()
    }
    return{
      x,toggle
    }
  }
};
</script>