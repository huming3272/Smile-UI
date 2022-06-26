<demo>
    使用
</demo>
<template>
  <div>
    <Cascader  :a="[1,2,3,4]" />
  </div>
</template>
<script lang="ts">
import Cascader from "../../lib/Cascader.vue";
import { ref } from "vue";
export default {
  components: {
    Cascader,
  },
  setup() {
    const util = [
      {
        label: "a",
        name: "动物",

        children: [
          {
            label: "a_1",
            name: "狮子",
          },
          {
            label: "a_2",
            name: "老虎",
          },
          {
            label: "a_3",
            name: "猫咪",

            children: [
              {
                label: "a_3_1",
                name: "俄罗斯蓝猫",
              },
              {
                label: "a_3_2",
                name: "暹罗猫",
              },
              {
                label: "a_3_3",
                name: "田园猫",
              },
            ],
          },
        ],
      },
      {
        label: "b",
        name: "昆虫",

        children: [
          {
            label: "b_1",
            name: "蚂蚁",
          },
          {
            label: "b_2",
            name: "蟑螂",

            children: [
              {
                label: "b_2_1",
                name: "白蟑螂",
              },
              {
                label: "b_2_2",
                name: "黑蟑螂",
              },
              {
                label: "b_2_3",
                name: "红蟑螂",
              },
            ],
          },
          {
            label: "b_3",
            name: "甲虫",
          },
        ],
      },
    ];
    const data = ref(util)
    return data
  },
};
</script>