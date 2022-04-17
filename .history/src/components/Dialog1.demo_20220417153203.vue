<demo>
    常规用法
</demo>
<template>
    <Dialog v-model:value="bool" />
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Dialog,
  },
  setup() {
    const bool = ref(false)
    return {
      bool
    }
  }
}
</script>