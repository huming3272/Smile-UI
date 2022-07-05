<template>
  <div class="topnav">
    <div class="logoWrapper">
      <router-link class="logo" to="/" v-if="menuVisible">
        <svg class="icon smile" aria-hidden="true">
          <use xlink:href="#icon-Smile"></use>
        </svg>
      </router-link>
    </div>
    <div class="breadWrapper">
      <Breadcrumb />
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc"> 文档 </router-link>
      </li>
    </ul>
    <svg
      class="icon toggleAside"
      aria-hidden="true"
      v-if="toggleAside"
      @click="toggleMenu"
    >
      <use xlink:href="#icon-shenLue"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import { inject, Ref, ref } from "vue";
import router from "../router/index";
export default {
    setup() {
        const menuVisible = inject<Ref<boolean>>("menuVisible"); //get
        const toggleAside = inject<Ref<boolean>>("toggleAside");
        //inject<Ref<boolean>>('menuVisible')
        //从全局引入menuVisible为boolean类型的Ref参数
        // menuVisible变量可以认为是data里的
        const toggleMenu = () => {
            // router.push('/doc')
            menuVisible.value = !menuVisible.value;
            // logoShow.value = !logoShow.value;
            //这里类似methods
        };
        router.afterEach((to, from) => {
            if (to.path === "/") {
                toggleAside.value = false;
                menuVisible.value = true;
            }
        });
        return { toggleMenu, toggleAside, menuVisible };
    },
    
};
</script>
<style lang="scss" scoped>
$color: rgb(114, 161, 211);
// #007974
.topnav {
  color: $color;
  // background: pink;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  > .logoWrapper {
    height: 37px;
    > .logo {
      max-width: 6em;
      margin-right: auto;
      > svg {
        width: 32px;
        height: 32px;
        box-shadow: 10px 0px 5px #888888;
      }
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 90%;
    transform: translateY(-50%);
    display: none;
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .toggleAside {
      display: block;
    }
    // .logoWrapper> .logo > .smileDoc {
    //   // margin: 0 auto;
    //   margin-left: 400%;
    // }
  }
}
</style> 