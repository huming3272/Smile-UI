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
            defaults.forEach((ele) => {
                if(ele.type !== tab)
            })
            console.log(defaults[0],'1')
            console.log(defaults[1],'2')
        },
        components:{
            Tab
        }
    }
</script>