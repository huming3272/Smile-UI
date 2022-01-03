<template>
    <Tab></Tab>
</template>
<script lang="ts">
import Tab from './Tab.vue'
    export default {
        setup(props, context){
            console.log({
              ...context  
            },'扩展context')
        }
    }
</script>