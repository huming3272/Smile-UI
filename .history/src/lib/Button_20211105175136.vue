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
    //inheritAttrs继承，默认是true
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
