<template>
  <div>
    <h1>级联选择器</h1>
    <input type="text" @focus = "handleClick('focus')" @blur= "handleClick('blur')" v-model="checkedValue" />
    <CascaderSelector v-model:source="util" @patch="onPatch" v-if="open" id="style" :level="level" :activeId=""/>
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
    let level = ref<number>(0)
    const data = [
      {
        label: "a",
        name: "动物",
        show: true,
        children: [
          {
            label: "a_1",
            name: "狮子",
            show: true,
          },
          {
            label: "a_2",
            name: "老虎",
            show: true,
          },
          {
            label: "a_3",
            name: "猫咪",
            show: true,
            children: [
              {
                label: "a_3_1",
                name: "黑猫",
                show: true,
              },
              {
                label: "a_3_2",
                name: "白猫",
                show: true,
              },
              {
                label: "a_3_3",
                name: "绿猫",
                show: true,
              },
            ],
          },
        ],
      },
      {
        label: "b",
        name: "昆虫",
        show: true,
        children: [
          {
            label: "b_1",
            name: "蚂蚁",
            show: true,
          },
          {
            label: "b_2",
            name: "蟑螂",
            show: true,
            children: [
              {
                label: "b_2_1",
                name: "白蟑螂",
                show: true,
              },
              {
                label: "b_2_2",
                name: "黑蟑螂",
                show: true,
              },
              {
                label: "b_2_3",
                name: "红蟑螂",
                show: true,
              },
            ],
          },
          {
            label: "b_3",
            name: "甲虫",
            show: true,
          },
        ],
      },
    ];
    const handleClick = (event)=>{
      if(event === 'focus') {
        open.value = true
        checkedValue.value = ""
      }
      // else{
      //   open.value = false
      // }
    }
    const onPatch = (val) => {
      checkedValue.value = val;
      open.value = false;
      console.log(val, 'onpatch')
    }
    const util = ref(data);
    return {
      util, checkedValue, open, onPatch, handleClick, level
    };
  },
};
</script>