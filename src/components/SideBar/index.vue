<template>
  <div id="side_bar">
    <div class="user">
      <img src="../../assets/images/avatar.jpg" alt="" class="avatar" />
    </div>
    <router-link to="/">首页</router-link>
    <router-link to="/user">个人</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#side_bar {
    overflow: hidden;
  .user {
      width: 100px;
      text-align: center;
      margin: 10px 0;
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  a {
      width: 100px;
    display: block;
    text-align: center;
    white-space: nowrap;
    font-size: 14px;
    line-height: 36px;
    font-weight: bold;
    &:hover {
      color: #000;
      background-color: #eee;
    }
  }
}
</style>