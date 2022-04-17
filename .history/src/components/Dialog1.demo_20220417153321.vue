<demo>
    常规用法
</demo>
<template>
    <div style="position: relative; z-index: 100">
    <Button @click="toggle">弹框显示</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2"
      @cancel="f2"
    >
    <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
      <template v-slot:content>
        <strong>嗨，某个人</strong>
        <div>
          你好啊
        </div>
      </template>
    </Dialog>
    <h1>示例2</h1>
    <Button @click="showDialog">show</Button>
  </div>
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
    const visible = ref(false)
    return {
      bool
    }
  }
}
</script>