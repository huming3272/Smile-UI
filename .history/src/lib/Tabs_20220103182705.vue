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
            console.log(defaults[0])
            defaults[1]
            
        },
        components:{
            Tab
        }
    }
</script>