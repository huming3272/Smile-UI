<template>
  <!-- <div style="position: relative; z-index: 100">
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
  </div> -->
  <div>
      Dialog 示例
      <Demo :component="Dialog1Deom"></Demo>
  </div>
  
</template>
<script lang='ts'>
import Dialog1Demo from '../components/Dialog1.demo.vue'
import Demo from '../components/Demo.vue'
export default {
  name: "DialogDemo",
  components: {
    Demo
  },
  data() {
    return {};
  },
  setup() {
    // const that = getCurrentInstance().proxy;
    // //改变this指向后可以使用vue2里的$forceUpdate()
    return {
      Dialog1Demo
    };
  },
};
// import Dialog from "../lib/Dialog.vue";
// import Button from "../lib/Button.vue";
// import {ref,h} from 'vue'
// import { openDialog }from "../lib/openDialog"
// export default {
//   components: {
//     Dialog,
//     Button,
//   },
//   setup(){
//     const x = ref(false)
//     const toggle = ()=>{
//       x.value = !x.value
//     }
//     const f1 = ()=>{
//       console.log('ok函数')
//       return true
//     }
//     const f2 = ()=>{
//       console.log('cancel函数')
//     }
//     const showDialog = ()=>{
//       openDialog({
//         title: h('strong',{},'标题'),
//         content: '你好',
//         ok(){
//           console.log('ok')
//         },
//         cancel(){
//           console.log('cancel')
//         }
//       })
//     }
//     return{
//       x,toggle,f1,f2,showDialog
//     }
//   }
// };
</script>