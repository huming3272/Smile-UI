<template lang="">

        <!-- <button v-bind="$attrs"> -->
            <button v-bind="rest" class="gulu-button" :class="{[`gulu-theme-${theme}`]:theme}">
            <!-- 为button绑定rest得到的传入事件，两种都可以 -->
            <slot></slot>
        </button>


</template>
<script lang="ts">
export default {
  inheritAttrs: false,
  //inheritAttrs继承，默认是true，继承一切传入的事件，给template内的第一级元素
  name: "Button",
  props: {
    theme: {
      type: String,
      default: "button",
    },
  },
  setup(props, context) {
    //非响应式对象，等同于 $attrs
    const { size, ...rest } = context.attrs;
    //拿到了父传子的size参数和rest事件
    console.log(props.theme);
    return { size, rest };
  },
};
</script>
<style lang="scss">
div{
    
    $h: 32px;
    $border-color: #d9d9d9;
    $color: #333;
    $blue: #40a9ff;
    $radius: 4px;
    .gulu-button {
        box-sizing: border-box;
        height: $h;
        padding: 0 12px;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        background: white;
        color: $color;
        border: 1px solid $border-color;
        border-radius: $radius;
        box-shadow: 0 1px 0 fade-out(black, 0.95);
        & + & {
            margin-left: 8px;
            border:1px solid red;
        }
        &:hover,
        &:focus {
        color: $blue;
        border-color: $blue;
        }
        &:focus {
            outline: none;
        }
        &::-moz-focus-inner {
            border: 0;
        }
         &.gulu-theme-link{
            border-color: transparent;
            box-shadow: none;
            color: $blue;
        &:hover,&:focus{
            color: lighten($blue, 10%);
    }
  }
  &.gulu-theme-text{
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,&:focus{
      background: darken(white, 5%);;
    }
  }
    }
}
</style>
