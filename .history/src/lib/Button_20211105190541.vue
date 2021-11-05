<template lang="">
    <div :size='size'>
        <!-- <button v-bind="$attrs"> -->
            <button v-bind="rest" class="gulu-button" :class="{[`theme-${theme}`]:theme}">
            <!-- 为button绑定rest得到的传入事件，两种都可以 -->
            <slot></slot>
        </button>
    </div>
</template>
<script>
export default {
    inheritAttrs:false,
    //inheritAttrs继承，默认是true，继承一切传入的事件，给template内的第一级元素
    name:'Button',
    setup(props,context) {
        //非响应式对象，等同于 $attrs
        const {size,...rest} = context.attrs
        //拿到了父传子的size参数和rest事件
        return {size,rest}
    },
}
</script>
<style lang="scss" scoped>
    div{
        border:1px solid red;
    }
</style>
