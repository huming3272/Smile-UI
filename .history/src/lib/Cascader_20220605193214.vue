<template>
  <div class="window">
    <div class="cascader">
      <div class="inputWrapper">
        <input
          type="text"
          @focus="handleClick('focus')"
          @blur="handleClick('blur')"
          v-model="checkedValue"
        />
        <img
          class="arrow"
          :class="{ rotateArrow: open }"
          src="../assets/arrow-down.png"
          alt=""
        />
      </div>
      <CascaderSelector
        class="CascaderSelector"
        v-model:source="util"
        @patch="onPatch"
        v-show="open"
        id="style"
      />
    </div>
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
    let checkedValue = ref<string>("");
    let open = ref<boolean>(false);
    const data = [
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
    const handleClick = (event) => {
      if (event === "focus") {
        open.value = true;
        // checkedValue.value = "";
      }
    };
    const onPatch = (val) => {
      let string = val.join("/");
      checkedValue.value = string;
      window.alert(`你选择了${string}`);
      open.value = false;
    };
    const util = ref(data);
    return {
      util,
      checkedValue,
      open,
      onPatch,
      handleClick,
    };
  },
};
</script>
<style lang="scss" scoped>
.cascader {
  // height: auto;
  // display: inline-flex;
  flex-direction: column;
  border: 1px solid black;
  position: relative;
}
.inputWrapper {
  display: flex;
  align-items: center;
  input {
    border: none;
    &:focus {
      border: none;
    }
  }
  .arrow {
    transition: all 0.5s;
    transform: rotate(0deg);
    width: 20px;
  }
}

.CascaderSelector {
  margin-left: 20px;
  border-left: 1px solid rgb(213, 213, 255);
  position: absolute;
  top: 20px;
}
.rotateArrow {
  transform: rotate(-180deg) !important;
}
</style>