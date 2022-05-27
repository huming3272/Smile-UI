<template>
  <div v-for="item in util" :key="item">
      <template v-if="isArray()">
        
      </template>
      <!-- <CascaderSelector :source="item.children">
      </CascaderSelector> -->
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
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
    const data = [
      {
        value: "a",
        name: "动物",
        children: [
          {
            value: "a_1",
            name: "狮子",
          },
          {
            value: "a_2",
            name: "老虎",
          },
          {
            value: "a_3",
            name: "猫咪",
            children: [
              {
                value: "a_3_1",
                name: "黑猫",
              },
              {
                value: "a_3_2",
                name: "白猫",
              },
              {
                value: "a_3_3",
                name: "绿猫",
              },
            ],
          },
        ],
      },
      {
        value: "b",
        name: "昆虫",
        children: [
          {
            value: "b_1",
            name: "蚂蚁",
          },
          {
            value: "b_2",
            name: "蟑螂",
          },
          {
            value: "b_3",
            name: "甲虫",
          },
        ],
      },
    ];
    const recursionDate = () => {
      
    }
    const util = ref(data);
    return {
      util,
    };
  },
};
</script>
<style lang="scss" scoped>
div {
  border-bottom: 1px solid red;
  margin-left: 10px;
}
</style>