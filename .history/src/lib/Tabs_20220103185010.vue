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
                console.log(tag.type === )
                if(tag.type !== Tab){
                    throw new Error('Tabs子组件必须为Tab')
                }
            })
            console.log(defaults[0],'1')
            console.log(defaults[1],'2')
            return {
                defaults
            }
        },
        components:{
            Tab
        }
    }
</script>