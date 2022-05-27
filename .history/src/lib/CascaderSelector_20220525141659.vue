<template>
  <div class="block">
    <li v-for="item,index in source" @click="choose(index, $event)" :key="item.value"
    :class="[index==actId? 'active':'']"
    >
    <span>
      {{item.name}}
    </span>
    </li>
      <div class="cas" v-if="actId>-1 && source[actId].children">
        <CascaderSelector  v-model:source="source[actId].children" :activeId="activeId2" @patch="onPatch">
        </CascaderSelector>
      </div>
  </div>
</template>
<script lang="ts">
import {ref} from 'vue'

export default {
  // 参考https://wenku.baidu.com/view/179a1af130d4b14e852458fb770bf78a65293a67.html
  // https://dandelioncloud.cn/article/details/1488173854068690945
  // https://dandelioncloud.cn/article/details/1426183821665615874
  name: "CascaderSelector",
  components:{

  },
  props: {
      source: {
          type: Array,
      },
      activeId: {
          type: Number,
      },
  },
  setup(props, content) {
    // console.log(props.activeId)
    let activeId2 = ref<number>()
    let actId = ref<number>()
    const choose = (index, event) => {
        activeId2.value = index;
        actId.value = index
        // console.log(index, 'li索引')
        console.log(props.source[actId.value].children, 'choose')
        // console.log(props.source[actId].children)
        if (!props.source[actId.value].children) {
          console.log('name', props.source[actId.value])
          // content.emit("patch", props.source[actId.value].name)
          content.emit("patch", props.source[actId.value].name, event)
        }
        // console.dir(event)
    }
    const onPatch = (val, event) => {
      if (props.source[props.activeId]?.name) {
        let checkedVal = props.source[props.activeId].name + '/' + val;
        // console.log(props.activeId, 'id', event)
      // content.emit('patch', checkedVal)
        content.emit('patch', checkedVal+ '/' + val)
      // console.log(props.activeId, 'patch')
      //点击之后下一个组件显示，activeId初始化-1
      }
    }
    return{
      choose, activeId2, onPatch, actId
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