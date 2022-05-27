<template>
  <div class="father" @click.stop="choose(item, $event)" v-if="item.show" v-for="item in source" :key="item.value">
    <p>
      {{item.name}}
    </p>
      <template v-if="item?.children?.length>0">
        <CascaderSelector :source="item.children">
        </CascaderSelector>
      </template>
  </div>
</template>
<script lang="ts">

// import CascaderSelector from "./CascaderSelector.vue";
export default {
  // 参考https://wenku.baidu.com/view/179a1af130d4b14e852458fb770bf78a65293a67.html
  name: "CascaderSelector",
  components:{
    // CascaderSelector
  },
  props: {
      source: {
          type: Array,
      }
  },
  setup() {
    const choose = (item, event) => {
        item.show = !item.show
        console.dir(event)
    }
    return{
      choose
    }
  },
};
</script>
<style lang="scss" scoped>
.father{
  display: flex;
}
div {
  border-bottom: 1px solid red;
  margin-left: 10px;
}
</style>