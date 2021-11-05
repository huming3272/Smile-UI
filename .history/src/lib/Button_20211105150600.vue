<template lang="">
    <button>
        <slot></slot>
    </button>
</template>
<script>
export default {
    name:'Button',
    setup(props,context) {
        console.log(context.at)
    },
}
</script>
