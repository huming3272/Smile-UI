<template>
    <div class="gulu-tabs">
        <div class="gulu-tabs-nav">
            <div class="gulu-tabs-nav-item" v-for="t in titles" :key='t'>{{t}}</div>
        <!-- 传入组件的title属性 -->
        </div>
        <div class="gulu-tabs-content">
            <component class="gulu-tabs-content-item" v-for="(content,index) in defaults" :is="content" :key="index"></component>
            <!-- 通过slot中插入的组件循环渲染 -->
        </div>
    </div>
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
            const titles = defaults.map((tag) => {
                return tag.props.title
            })
            return {
                defaults,
                titles
            }
        },
    }
</script>
<style lang="scss" scoped>
    $blue: #40a9ff;
    $color: #333;
    $border-color: #d9d9d9;
    .gulu-tabs {
        &-nav{
            display: flex;
            color: $color;
            border-bottom:1px solid $border-color;
            
        }
    }
</style>