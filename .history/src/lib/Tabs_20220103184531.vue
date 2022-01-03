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
            defaults.forEach((tag) => {
                if(ele.type !== Tab){
                    throw new Error('标签不为Tab')
                }
            })
            console.log(defaults[0],'1')
            console.log(defaults[1],'2')
        },
        components:{
            Tab
        }
    }
</script>