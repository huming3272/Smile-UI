<template lang="">
    <div>
        <button>
            <slot></slot>
        </button>
    </div>
</template>
<script>
export default {
    inheritAttrs
    name:'Button',
    setup(props,context) {
        context.attrs.onClick()
        console.dir(context.attrs.onClick)
    },
}
</script>
<style lang="scss" scoped>
    div{
        border:1px solid red;
    }
</style>
