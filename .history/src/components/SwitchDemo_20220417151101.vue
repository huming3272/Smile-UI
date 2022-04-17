<template>
  <div>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
    <p>
      {{ schedule }}
    </p>
    <ul>
      <li v-for="(content, index) of schedule" :key="index">
        <span>
          {{ content.obj }}
        </span>
        <Switch v-model:value="content.result" @click="edit()"></Switch>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { inject, Ref, ref, watch, getCurrentInstance } from "vue";
import Switch from "../lib/Switch.vue";
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'
import Button from "../lib/Button.vue";
import Demo from '../components/Demo.vue'
export default {
  name: "SwitchDemo",
  components: {
    Switch,
    Button,
  },
  data() {
    return {};
  },
  setup() {
    const that = getCurrentInstance().proxy;
    //改变this指向后可以使用vue2里的$forceUpdate()
    const bool = ref(true);
    let schedule = [
      { obj: "吃饭", result: false },
      { obj: "洗澡", result: false },
      { obj: "写作", result: true },
    ];
    const edit = () => {
      that.$forceUpdate();
    };
    return {
      bool,
      schedule,
      edit,
      Switch1Demo,
      Switch2Demo,
    };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
