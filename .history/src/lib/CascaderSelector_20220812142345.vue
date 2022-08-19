<template>
  <div class="cascaderSelector">
    <div class="item">
        <li v-for="item,index in source" @click="choose(index, $event)" :key="item.label"
          :class="[index==actId? 'active':'']"
        >
          <span>
            {{item.name}}
          </span>
          <img v-show="item.children && item.children.length > 0" class="rightArrow" src="../assets/arrow-down.png" alt="">
        </li>
    </div>
      <div class="selector" v-if="actId>-1 && source[actId].children">
        <IniCascader  v-model:source="source[actId].children" :activeId="actId" @patch="onPatch" :selected="selected">
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
    // IniCascader: defineAsyncComponent(() => import('./CascaderSelector.vue'))
  },
  props: {
      source: {
          type: Array,
          default: () => {
            return []
          }
      },
      activeId: {
          type: Number,
      },
      selected: {
         type: Array,
         default: ()=>{
           return []
         }
      },
  },
  setup(props, content) {
    // console.log(props.activeId, '传递子索引')
    let iniIndex = ref<number>()
    let actId = ref<number>()
    let copyItem = ref([])
    let selected = ref([])
    const choose = (index, event) => {
        actId.value = index
        // console.log(props.source[actId.value].children, 'choose')
        // console.log(props.source[actId].children)
        // copyItem.value = copyItem.value.concat(props.itemGroud)
        selected.value = [props.source[actId.value].name]
        if (!props.source[actId.value].children) {
          // console.log('name', props.source[actId.value])
          // console.log(copyItem, '数组')
          // content.emit("patch", props.source[actId.value].name)
          content.emit("patch", selected.value )
        }
        // console.dir(event)
    }
    const onPatch = (val) => {
      // if (props.source[props.activeId]?.name) {
        // let checkedVal = props?.source?.[props.activeId]?.name + '/' + val;
        let checkedVal = []
        checkedVal = selected.value.concat(val)
        // copyItem.value.push(props.source[actId.value].name)
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
      choose, onPatch, actId, copyItem, selected
    }
  },
};
</script>
<style lang="scss" scoped>
.cascaderSelector{
  display: flex;
  background: white;
.item{
  border-right: 1px solid rgb(213, 213, 255);
  border-top: 1px solid rgb(213, 213, 255);
  border-bottom: 1px solid rgb(213, 213, 255);
}
.rightBorder{
  border-right: 1px solid rgb(213, 213, 255);
}
  li{
    padding:0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 100px;
    user-select: none;
    &:hover{
      background: rgb(207, 207, 255);
    }
    .rightArrow{
      transform: rotate(-90deg);
      width: 10px;
    }
  }
}
div {
  // margin-left: 10px;
}
.active{
  background: rgb(164, 164, 255);
}
.selector{

}
</style>