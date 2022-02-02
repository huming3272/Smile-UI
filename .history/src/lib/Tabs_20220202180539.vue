<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div
        class="gulu-tabs-nav-item"
        v-for="(t, index) in titles"
        :key="index"
        :ref=""el =></div>
        @click="select(t)"
        :class="{ selected: t === selected }"
      >
        {{ t }}
      </div>
      <div class="gulu-tabs-nav-indicator"></div>
      <!-- 传入组件的title属性 -->
    </div>
    <div class="gulu-tabs-content">
      <component
        class="gulu-tabs-content-item"
        v-for="(content, index) in defaults"
        :is="content"
        :key="index"
        :class="{selected: content.props.title === selected}"
      ></component>
      <!-- 通过slot中插入的组件循环渲染 -->
    </div>
  </div>
</template>
<script lang="ts">
import Tab from './Tab.vue'
import { computed }from 'vue'
    export default {
        props:{
            selected: {
                type: String
            }
        },
        setup(props, context){
            // context.slots.default是个函数，运行后返回一个包含插槽中组件的数组
            let defaults = context.slots.default()
            // defaults.type是插槽中组件的类型
            defaults.forEach((tag) => {
                //  判断类型是否和引入的Tab组件一致
                console.log(tag.type, 'tag')
                if(tag.type !== Tab){
                    throw new Error('Tabs子组件必须为Tab')
                }
            })
            const titles = defaults.map((tag) => {
                return tag.props.title
            })
            const current = computed(() => {
                console.log('重新 return')
                    return defaults.filter((tag) => {
                        return tag.props.title === props.selected
                })[0]
            })
            const select = (title: string) => {
              console.log(title, 'title')
                context.emit('update:selected', title)
            }
            return {
                defaults,
                titles,
                current,
                select
            }
        },
        
    }
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      // display: none;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
    }
  }
  &-content {
    padding: 8px 0;

    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>