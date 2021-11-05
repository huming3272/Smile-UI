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
    name:'Button',
    setup(props,context) {
        const {size,...rest} = context.attrs
        //拿到了
    },
}
</script>
<style lang="scss" scoped>
    div{
        border:1px solid red;
    }
</style>
