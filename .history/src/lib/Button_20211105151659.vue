<template lang="">
    <button>
        <slot></slot>
    </button>
</template>
<script>
export default {
    name:'Button',
    setup(props,context) {
        context.attrs.onClick()
        console.dir(context.attrs.onClick)
    },
}
</script>
