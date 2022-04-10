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
    content.value = (await import(props.path)).default
    // import(props.path).then(result => {
    //   content.value = result.default
    //   // 尝试async和await
    // })
    console.log(content.value)
    this.$force()
    return {
      content
    }
  }
}
</script>