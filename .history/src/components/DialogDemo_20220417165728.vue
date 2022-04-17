<template>

  <div>
      Dialog 示例
  </div>
  <Demo :component="Dialog1Demo"></Demo>
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