<template>
  <div class="block">
    <li v-for="item,index in source" @click="choose(index, $event)" :key="item.label"
    :class="[index==actId? 'active':'']"
    >
    <span>
      {{item.name}}
    </span>
    </li>
      <div class="cas" v-if="actId>-1 && source[actId].children">
        <IniCascader  v-model:source="source[actId].children" :activeId="actId" @patch="onPatch" :itemGroup="copyItem">
        </IniCascader>
      </div>
  </div>
</template>
<script lang="ts">
import {defineAsyncComponent, ref, reactive} from 'vue'

export default {
  // 参考https://wenku.baidu.com/view/179a1af130d4b14e852458fb770bf78a65293a67.html
  // https://dandelioncloud.cn/article/details/1488173854068690945
  // https://dandelioncloud.cn/article/details/1426183821665615874
  name: "CascaderSelector",
  components:{
    IniCascader: defineAsyncComponent(() => import('./CascaderSelector.vue'))
  },
  props: {
      source: {
          type: Array,
      },
      activeId: {
          type: Number,
      },
      itemGroup: {
         type: Array,
         default: ()=>{
           return []
         }
      }
  },
  setup(props, content) {
    // console.log(props.activeId, '传递子索引')
    let iniIndex = ref<number>()
    let actId = ref<number>()
    let copyItem = ref([])
    let once = ref<boolean>(true)
    const choose = (index, event) => {
        actId.value = index
        console.log(index, 'li索引')
        // console.log(props.source[actId.value].children, 'choose')
        // console.log(props.source[actId].children)
        copyItem.value = copyItem.value.concat(props.itemGroud)
        if (!props.source[actId.value].children) {
          // console.log('name', props.source[actId.value])
          // console.log(copyItem, '数组')
          // content.emit("patch", props.source[actId.value].name)
          content.emit("patch", copyItem.value)
        }
        // console.dir(event)
    }
    const onPatch = (val) => {
      // if (props.source[props.activeId]?.name) {
        // let checkedVal = props?.source?.[props.activeId]?.name + '/' + val;
        let checkedVal = val
        copyItem.value.push(props.source[actId.value].name)
        // console.log(props.activeId, 'id', event)
      // content.emit('patch', checkedVal)
      // console.log(1)
        content.emit('patch', checkedVal)
      // console.log(2)
      // console.log(props.activeId, 'patch')
      //点击之后下一个组件显示，activeId初始化-1
      // }
    }
    return{
      choose, onPatch, actId, copyItem
    }
  },
};
</script>
<style lang="scss" scoped>
.block{
  // display: flex;
  li{
    span{
      border:1px solid blue;
    }
  }
}
div {
  border-bottom: 1px solid red;
  margin-left: 10px;
}
.active{
  border: 1px solid green;
}
.cas{
  background: grey;
}
</style>