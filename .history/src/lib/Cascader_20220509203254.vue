<template>
  <div>
    <h1>级联选择器</h1>
    <CascaderSelector :source="util" />
  </div>
</template>
<script lang="ts">
import CascaderSelector from "./CascaderSelector.vue";
import { ref } from "vue";
export default {
  name: "Cascader",
  components: {
    CascaderSelector,
  },
  setup() {
    const data = [
      {
        value: "a",
        name: "动物",
        show: true,
        children: [
          {
            value: "a_1",
            name: "狮子",
            show: true,
          },
          {
            value: "a_2",
            name: "老虎",
            show: true,
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
    const recursionDate = () => {};
    const util = ref(data);
    return {
      util,
    };
  },
};
</script>