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
  async setup(props) {
    let content = ref < string > (null)
    content = await import(props.path)
    // import(props.path).then(result => {
    //   content.value = result.default
    //   // 尝试async和await
    // })
    return {
      content
    }
  }
}
</script>