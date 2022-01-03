<template>
    <div>
        Tabs组件22
    </div>
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