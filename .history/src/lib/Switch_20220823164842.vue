<template>
  <button
    class="gulu-switch"
    @click="toggle"
    :class="{ 'gulu-checked': value,'gulu-disabled': disabled }"
  >
    <span></span>
  </button>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  name: "Switch",
  props: {
    value: Boolean,
    disabled: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      props.disabled || context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>
<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.gulu-switch {
  outline: none;
  height: $h;
  width: $h * 2;
  border: none;
  background: #cccccc;
  border-radius: calc($h/2;
  position: relative;
  transition: background-color 500ms;
  cursor: pointer;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 1);
    transition: left 250ms;
    border-radius: $h2 / 2;
  }
  &.gulu-disabled{
    cursor: not-allowed;
  }
  &.gulu-checked {
    background: #2d8cf0;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &.gulu-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>