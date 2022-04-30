<template>
  <router-view/>
</template>

<script lang='ts'>
import {ref,provide} from 'vue'
import router from './router/index'
export default {
  name: 'App',

  setup(){
    const width = document.documentElement.clientWidth;
    //获取窗口宽度
    const menuVisible = ref(width <= 500 ? false : true);
    const toggleAside = ref(false)
    

    //检测窗口宽度
    //定义初值，类似vue2的data
    
    provide('menuVisible',menuVisible)//set
    //provide提供menuVisible给全局
    provide('toggleAside',toggleAside)

    
    const route = router.currentRoute.value
    // const currentPath = route.matched[route.matched.length-1].path
    const breadcrumbList = currentPath.split('/')
    console.log(breadcrumbList) 
  },
  

}
</script>
<style lang="scss">
  *{
    padding: 0;
    margin: 0;
    list-style: none;
    
  }
</style>
