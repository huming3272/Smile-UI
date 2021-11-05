<template lang="">
    <button>
        <slot></slot>
    </button>
</template>
<script>
export default {
    name:'Button',
    setup(props,context) {
        console.dir(context.attrs.proxy)
    },
}
</script>
