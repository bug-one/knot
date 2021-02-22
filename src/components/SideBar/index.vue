<template>
  <div id="side_bar">
    <div class="user">
      <img src="../../assets/images/avatar.jpg" alt="" class="avatar" />
    </div>
    <a @click="switchPage('/')">首页</a>
    <a @click="switchPage('/user')">个人</a>
  </div>
</template>

<script>
export default {
    methods: {
        switchPage(path){
            this.$router.push(path).catch(()=>{})
            this.$emit('switchSidebarState',false)
        }
    },
};
</script>

<style lang="less" scoped>
#side_bar {
    overflow: hidden;
  .user {
      width: 100px;
      text-align: center;
      margin: 12px 0 8px;
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
    cursor: pointer;
    &:hover {
      color: #000;
      background-color: #eee;
    }
  }
}
</style>