<template>
    <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
import {
  ref
} from 'vue'
export default {
  props: {
    path: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const content = ref < string > (null)
    onBeforeCreate(async()=>{
        
    })
    import(props.path).then(result => {
      content.value = result.default
    //  异步用变量名当文件名加载文件

    })
    return {
      content
    }
  }
}
</script>