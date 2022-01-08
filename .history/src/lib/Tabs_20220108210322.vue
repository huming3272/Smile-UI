<template>
    <component v-for="(com,index) in defaults" :is="com" key="com"></component>
</template>
<script lang="ts">
import Tab from './Tab.vue'
    export default {
        setup(props, context){
            // context.slots.default是个函数，运行后返回一个包含插槽中组件的数组
            let defaults = context.slots.default()
            // defaults.type是插槽中组件的类型
            defaults.forEach((tag) => {
                //  判断类型是否和引入的Tab组件一致
                if(tag.type !== Tab){
                    throw new Error('Tabs子组件必须为Tab')
                }
            })
            return {
                defaults
            }
        },
    }
</script>