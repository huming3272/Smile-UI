<demo>
    常规使用
</demo>
<template>
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
    <h1>示例2</h1>
    <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import {Dialog} from "../../lib/index";
import {Button} from "../../lib/index";
import {ref,h} from 'vue'
import { openDialog }from "../../lib/openDialog"
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
    const showDialog = ()=>{
      openDialog({
        title: h('strong',{},'标题'),
        content: '你好',
        ok(){
          console.log('ok')
        },
        cancel(){
          console.log('cancel')
        }
      })
    }
    return{
      x,toggle,f1,f2,showDialog
    }
  }
};
</script>