declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
  } 
//   用于给ts编译器解析.vue文件
V