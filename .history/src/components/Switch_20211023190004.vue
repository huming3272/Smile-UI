<template>
  <div>
    <ul>
      <li>Switch文档</li>
      <li>Switch文档</li>
      <li>Switch文档</li>
      <li>Switch文档</li>
      <li>Switch文档</li>
      <li>Switch文档</li>
      <li>Switch文档</li>
      <li>Switch文档</li>
      <li>Switch文档</li>
      <li>Switch文档</li>
      <li>Switch文档</li>
      <li>Switch文档</li>
      <li>Switch文档</li>
      <li>Switch文档</li>
      <li>Switch文档</li>
      <li>Switch文档</li>
      <li>Switch文档</li>
      <li>Switch文档</li>
    </ul>
  </div>
</template>
<script>
import {inject} from 'vue'
export default {

  name: "switch",
  setup() {
    const mV = inject <Ref<boolean>>("menuVisible");
    
    console.log("mv", mV);
  },
  beforeCreate() {
    console.log("bCreated");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("bMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("bUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("bDestroy");
  },
  destroyed() {
    console.log("destroy");
  },
};
</script>