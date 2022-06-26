<template>
    <div>
        <Demo :component="Cascader1Demo"></Demo>
    </div>
</template>
<script lang="ts">
    import Demo from '../Demo.vue'
    import Cascader1Demo from './Cascader1.Demo.vue'
    export default{
        components: {
            Demo,
            Cascader1Demo
        },
        setup(){
            return {
                Cascader1Demo
            }
        }
    }
</script>