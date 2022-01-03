<template>
    <div>
        tabs组件
    </div>
</template>
<script lang="ts">
import Tab from './Tab.vue'
    export default {
        setup(props, context){
            let defaults = context.slots.default()
            console.log({
              ...context.slots.default()[0]
            },'扩展context')
        },
        components:{
            Tab
        }
    }
</script>