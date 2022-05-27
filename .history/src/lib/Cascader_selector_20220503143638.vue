<template>
  <div>
    <h2>选择器</h2>
    <ul>
      <li v-for=""></li>
    </ul>
  </div>
</template>
<script lang="ts">
import CascaderSelector from "./CascaderSelector.vue";
export default {
  name: "CascaderSelector",
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
    
  },
};
</script>
<style scoped>
</style>