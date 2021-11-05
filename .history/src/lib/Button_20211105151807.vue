<template lang="">
    <div>
        <button>
            <slot></slot>
        </button>
    </div>
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
