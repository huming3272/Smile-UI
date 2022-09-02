<template>
  <div class="cascader" @click.stop="">
    <div class="inputWrapper">
      <input type="text" v-model="checkedValue" @focus="handleClick()" />
      <div class="arrowWrapper" :class="{ rotateArrow: open }">
          <svg class="icon arrow" aria-hidden="true">
            <use xlink:href="#icon-arrow-down"></use>
          </svg>
        </div>
    </div>
    <CascaderSelector
      class="CascaderSelector"
      v-model:source="util"
      @patch="onPatch"
      v-show="open"
      id="style"
    />
  </div>
</template>
<script lang="ts">
import CascaderSelector from "./CascaderSelector.vue";
import { ref } from "vue";
export default {
  name: "Cascader",
  props: {
    sourceData:{
      type: Array,
      default: () => {
        return []
      }
    }
  },
  components: {
    CascaderSelector,
  },

  setup(props, content) {
    let checkedValue = ref<string>("");
    let open = ref<boolean>(false);
    const util = props.sourceData
    document.addEventListener("click", function (e) {
      open.value = false;
    });
    const handleClick = () => {
      open.value = true;
    };
    const onPatch = (val) => {
      let string = val.join("/");
      checkedValue.value = string;
      window.alert(`你选择了${string}`);
      open.value = false;
    };
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
.window {
  // height: 100vh;
}
.cascader {
  // height: auto;
  width: 200px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(213, 213, 255);
  border-radius: 5px;
  position: relative;
}
.inputWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    border: none;
    width: 170px;
    padding-left: 10px;
    &:focus {
      outline: none;
    }
  }
  .arrowWrapper {
    transition: all 0.25s;
    transform: rotate(0deg);
    display: flex;
    align-items: center;
    justify-content: center;
    .arrow{
      width: 20px;
      height: 20px;  
    }
  }
}

.CascaderSelector {
  margin-left: 20px;
  border-left: 1px solid rgb(213, 213, 255);
  position: absolute;
  top: 25px;
}
.rotateArrow {
  transform: rotate(-180deg) !important;
}
</style>