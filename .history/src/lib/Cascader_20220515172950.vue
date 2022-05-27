<template>
  <div>
    <h1>级联选择器</h1>
    
    <CascaderSelector v-model:source="util" v-on:patch="onPatch" v-show="open" id="style" />
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
    let checkedValue = ref<string>('')
    let open = ref<boolean>(true)
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
            show: true,
            children: [
              {
                value: "a_3_1",
                name: "黑猫",
                show: true,
              },
              {
                value: "a_3_2",
                name: "白猫",
                show: true,
              },
              {
                value: "a_3_3",
                name: "绿猫",
                show: true,
              },
            ],
          },
        ],
      },
      {
        value: "b",
        name: "昆虫",
        show: true,
        children: [
          {
            value: "b_1",
            name: "蚂蚁",
            show: true,
          },
          {
            value: "b_2",
            name: "蟑螂",
            show: true,
            children: [
              {
                value: "b_2_1",
                name: "白蟑螂",
                show: true,
              },
              {
                value: "b_2_2",
                name: "黑蟑螂",
                show: true,
              },
              {
                value: "b_2_3",
                name: "红蟑螂",
                show: true,
              },
            ],
          },
          {
            value: "b_3",
            name: "甲虫",
            show: true,
          },
        ],
      },
    ];
    const onPatch = (val) => {
      checkedValue.value = val;
      open.value = false;
    }
    const util = ref(data);
    return {
      util,
    };
  },
};
</script>