<template>
    <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
import {
  ref, onBeforeCreate
} from 'vue'
export default {
  props: {
    path: {
      type: String,
      required: true
    }
  },
  async setup(props) {
    const content = ref < string > (null)
    content.value = (await import(props.path).default
    // import(props.path).then(result => {
    //   content.value = result.default
    // //  异步用变量名当文件名加载文件

    // })
    return {
      content
    }
  }
}
</script>