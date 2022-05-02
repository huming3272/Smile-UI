<template>
    <div>
        <Demo :component="Breadcrumb1Demo"></Demo>
    </div>
</template>
<script lang="ts">
    import Demo from '../Demo.vue'
    import Breadcrumb1Demo from './Breadcrumb1.demo.vue'
    export default{
        components:{
            Demo,
            Breadcrumb1Demo
        }
    }
</script>