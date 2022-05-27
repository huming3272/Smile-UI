<template>
  <div class="block">
    <li v-for="item in source" @click.stop="choose(item, $event)" :key="item.value"
    :class="[index==activeId? 'active':'']"
    >
    {{item.name}}
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
      
  },
  setup() {
    const choose = (item, event) => {
        item.show = !item.show
        console.dir(event)
    }
    let activeId2 = ref(0)
    return{
      choose, activeId2
    }
  },
};
</script>
<style lang="scss" scoped>
.block{
  display: flex;
}
div {
  border-bottom: 1px solid red;
  margin-left: 10px;
}
.active{
  border: 1px solid green;
}
</style>