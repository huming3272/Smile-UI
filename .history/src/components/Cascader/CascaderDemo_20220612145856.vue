<template>
    <div>
        <Demo :component="Breadcrumb1Demo"></Demo>
    </div>
</template>
<script lang="ts">
    import Demo from '../Demo.vue'
    import Cascader1Demo from './CascaderDemo.vue'
    export default{
        components: {
            Demo,
            CascaderDemo
        },
        setup(){
            return {
                CascaderDemo
            }
        }
    }
</script>