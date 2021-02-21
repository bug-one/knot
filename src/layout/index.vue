<template>
  <div id="layout">
    <div class="sidebar_wrap"></div>
    <div class="main_wrap">
      <NavigationBar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavigationBar from "../components/NavigationBar";
export default {
  components: {
    NavigationBar,
  },
};
</script>

<style lang="less" scoped>
#layout {
  display: flex;
  .sidebar_wrap {
    width: 100px;
    min-height: 100vh;
    background-color: #24292e;
  }
  .main_wrap {
    width: 100%;
    min-height: 100vh;
  }
}
</style>