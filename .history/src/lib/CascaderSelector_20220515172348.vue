<template>
  <div class="block">
    <li v-for="item,index in source" @click.stop="choose(index, $event)" :key="item.value"
    :class="[index==activeId? 'active':'']"
    >
    <span>
      {{item.name}}
    </span>
    </li>
      <div v-if="activeId>-1 && source[activeId].children">
        <CascaderSelector v-model:source="source[activeId].children" :activeId="activeId2" v-on:patch="onPatch">
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
    let activeId2 = ref(0)
    const choose = (index, event) => {
        activeId2.value = 1;
        let activeId = index
        if (!props.source[activeId].children) {
          content.emit("patch", props.source[activeId].name)
        }
        // console.dir(event)
    }
    const onPatch = (val) => {
      let checkedVal = props.source[props.activeId].name + '/' + val;
      content.emit('patch', checkedVal)
      //点击之后下一个组件显示，activeId初始化-1
    }
    return{
      choose, activeId2, onPatch
    }
  },
};
</script>
<style lang="scss" scoped>
.block{
  // display: flex;
  li{
    span{
      border:1px solid green;
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
</style>