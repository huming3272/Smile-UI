<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div
        class="gulu-tabs-nav-item"
        v-for="(t, index) in titles"
        :ref="(el) => {
          if (t === selected) { 
                selectedItem = el
                } 
        }"
        :key="index"
        @click="select(t)"
        :class="{ selected: t === selected }"
      >
        {{ t }}
      </div>
      <div class="gulu-tabs-nav-indicator" ref = "indicator"></div>
      <!-- 传入组件的title属性 -->
    </div>
    <div class="gulu-tabs-content">
      <!-- <component
        class="gulu-tabs-content-item"
        v-for="(content, index) in defaults"
        :is="content"
        :key="index"
        :class="{selected: content.props.title === selected}"
      ></component> -->
      <component class="gulu-tabs-content-item" :is="current" :key="current.props.title"/>
      <!-- 通过slot中插入的组件循环渲染 -->
    </div>
    
  </div>
</template>
<script lang="ts">
import Tab from './Tab.vue'
import { 
         ref,
         computed,
         watchEffect,
         onMounted,
        }from 'vue'
    export default {
        props:{
            selected: {
                type: String
            }
        },
        setup(props, context){
            const selectedItem = ref < HTMLDivElement >(null)
            // 用于获取被选中的tab组件
            const indicator = ref < HTMLDivElement >(null)
            // 滑竿
            const container = ref < HTMLDivElement >(null)
            // 容器
            onMounted(() => {
              // mount生命周期
              watchEffect(() => {
                // 类似watch监听器
                // 监听的数据有dom，所以放在mount生命周期里
               const { width } = selectedItem.value.getBoundingClientRect()
                indicator.value.style.width = width + 'px'
                const { left: left1 } = container.value.getBoundingClientRect() 
                const { left: left2 } = selectedItem.value.getBoundingClientRect()
                const left = left2 - left1
                indicator.value.style.left = left + 'px'
              })  
            })

            
            // context.slots.default是个函数，运行后返回一个包含插槽中组件的数组
            let defaults = context.slots.default()[0].children
            // defaults.type是插槽中组件的类型

            defaults.forEach((tag) => {
                //  判断类型是否和引入的Tab组件一致
                if(tag.type.name !== Tab.name){
                    throw new Error('Tabs子组件必须为Tab')
                }
            })
            const current = computed(() => {
                return defaults.find((tag) => {
                  return tag.props.title === props.selected
                  })
            })

            const titles = defaults.map((tag) => {
                return tag.props.title
            })
            const select = (title: string) => {
                context.emit('update:selected', title)
            }
            return {
                current,
                defaults,
                titles,
                select,
                selectedItem,
                indicator,
                container,
                // return出去的变量如果名字和模板中的ref名一致，
                // 会被同名ref赋值，调用变量能得到dom树     
                // 这个在vue3文档中被称为“模板引用”
            }
        }
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
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>