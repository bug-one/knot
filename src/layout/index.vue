<template>
  <div id="layout">
    <div
      :class="{
        sidebar_wrap: true,
        active: isActiveSidebar,
      }"
    >
      <SideBar @switchSidebarState="switchSidebarState"/>
    </div>
    <div class="main_wrap" @click="()=>isActiveSidebar = false">
      <NavigationBar
        :sidebarState="isActiveSidebar"
        @switchSidebarState="switchSidebarState"
      />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavigationBar from "../components/NavigationBar";
import SideBar from "../components/SideBar";
export default {
  components: {
    NavigationBar,
    SideBar,
  },
  data() {
    return {
      isActiveSidebar: false,
    };
  },
  methods: {
    switchSidebarState(state) {
      this.isActiveSidebar = state;
    },
  },
};
</script>

<style lang="less" scoped>
#layout {
  display: flex;
  .sidebar_wrap {
    width: 0px;
    min-height: 100vh;
    background-color: #24292e;
    display: none;
    transition: all 0.4s;
    &.active {
      width: 100px;
    }
  }
  .main_wrap {
    width: 100%;
    overflow: hidden;
    min-height: 100vh;
  }
}
@media screen and (max-width: 539px) {
  .sidebar_wrap {
    display: block !important;
  }
}
</style>