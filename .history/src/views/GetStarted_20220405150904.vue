<template>
  <article class="markdown-body" v-html="md">
  </article>
</template>
<script lang="js">
import md from '../markdown/get-started.md'
export default {
  name: "GetStarted",
  data(){
      return {
          md
      }
  }
};
</script>