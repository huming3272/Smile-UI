<demo>
    使用
</demo>
<template>
    <div class="breadcrumbWrapper">
    <ul class="breadcrumb">
      <li>
        <router-link to="/">
          <span>首页</span>
        </router-link>
      </li>
      <li v-for="item in navList" :key="item">
        <router-link :to="item.path">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-arrow-double-right"></use>
          </svg>
          <span>{{ item.title }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
    import Breadcrumb from '../../lib/Breadcrumb.vue'
    export default{
        components: {
            Breadcrumb
        }
    }
</script>