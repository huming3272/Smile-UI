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
        context.attrs.onClick()
        console.dir(context.attrs.deleteProperty)
    },
}
</script>
<style lang="scss" scoped>
    div{
        border:1px solid red;
    }
</style>
