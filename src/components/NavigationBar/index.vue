<template>
  <div id="navigation_bar">
    <div class="pc">
      <img
        class="logo"
        src="https://iph.href.lu/50x50?text=LOGO&fg=000000&bg=efefef"
        alt="logo"
        @click="()=>$router.push('/')"
      />
      <div class="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/user">个人</router-link>
      </div>
      <div class="user">
        <img src="../../assets/images/avatar.jpg" alt="" class="avatar">
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script> 

<style lang="less" scoped>
#navigation_bar {
  height: 64px;
  background-color: #24292e;
  display: flex;
  align-items: center;
  .pc {
    display: flex;
    width: 100%;
    align-items: center;
    .logo {
      margin: 0 25px;
    }
    .nav {
      flex: 1;
      a {
        padding: 20px 10px;
        font-size: 14px;
        font-weight: bold;
        &:hover {
          color: #fff;
        }
      }
    }
    .user {
      margin-right: 20px;
      .avatar{
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
      }
    }
  }
}
</style>