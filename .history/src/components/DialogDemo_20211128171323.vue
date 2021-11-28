<template>
  <div style="position: relative">
    <Button @click="toggle">弹框显示</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2"
      @cancel="f2"
    >
    <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
      <template v-slot:content>
        <strong>嗨，某个人</strong>
        <div>
          你好啊
        </div>
      </template>
    </Dialog>
    <div style="background: red;height: 200px;width:100%;position: absolute;z-index:1020">
        大号遮罩
    </div>
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
      console.log('ok函数')
      return true
    }
    const f2 = ()=>{
      console.log('cancel函数')
    }
    return{
      x,toggle,f1,f2
    }
  }
};
</script>