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
            // context.slots.default是个函数，运行后返回一个数组，
            defaults.forEach((tag) => {
                console.log(tag.type === Tab)
                if(tag.type !== Tab){
                    throw new Error('Tabs子组件必须为Tab')
                }
            })
            return {
                defaults
            }
        },
        components:{
            Tab
        }
    }
</script>