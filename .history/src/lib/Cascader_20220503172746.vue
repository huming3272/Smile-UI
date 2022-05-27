<template>
    <div>
        <h1>级联选择器</h1>
        <CascaderSelector/>
    </div>
</template>
<script lang="ts">
    import CascaderSelector from "./CascaderSelector.vue"
    export default {
        name: 'Cascader',
        components:{
            CascaderSelector
        }
    }
</script>