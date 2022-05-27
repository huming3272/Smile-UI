<template>
    <div>
        <h1>级联选择器</h1>
        <Cascader_selector/>
    </div>
</template>
<script lang="ts">
    import CascaderSelector from "./Cascader_selector.vue"
    export default {
        name: 'Cascader',
        components:{
            CascaderSelector
        }
    }
</script>