<template>
    <div>
        <Demo :component="Breadcrumb1Demo"></Demo>
    </div>
</template>
<script lang="ts">
    import Demo from '../Demo.vue'
    import CascaderDemo from './CascaderDemo.vue'
    export default{
        components: {
            Demo,
            Cascader
        }
    }
</script>