<template lang="">
    <div>
        <button>
            <slot></slot>
        </button>
    </div>
</template>
<script>
export default {
    inheritAttrs:true,
    //inheritAttrs继承，默认是true，继承一切传入的事件，给template内的第一级元素
    name:'Button',
    setup(props,context) {
        const {size,...rest} = context.attrs
        //拿到了父传子的size参数和rest事件
    },
}
</script>
<style lang="scss" scoped>
    div{
        border:1px solid red;
    }
</style>
