<template>
    <div>
        tabs组件
    </div>
</template>
<script lang="ts">
import Tab from './Tab.vue'
    export default {
        setup(props, context){
            console.log({
              ...context.slots.default()
            },'扩展context')
        },
        components:{
            Tab
        }
    }
</script>