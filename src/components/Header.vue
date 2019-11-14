<template>
  <Menu class="header" mode="horizontal" @on-select="menuChange" :active-name="activeName">
    <div class="header-lf">
      <a class="site-title" href="/">网站LOGO</a>
    </div>
    <div class="header-rt">
      <MenuItem name="/" to="/">
        <Icon type="ios-home" />
        首页
      </MenuItem>
      <MenuItem name="/sport" to="/sport">
        <Icon type="ios-football" />
        运动
      </MenuItem>
      <MenuItem name="/movie" to="/movie">
        <Icon type="ios-film" />
        电影
      </MenuItem>
      <MenuItem name="4">
        <Icon type="ios-book" />
        阅读
      </MenuItem>
      <MenuItem name="5">
        <Icon type="ios-restaurant" />
        美食
      </MenuItem>
      <MenuItem name="6">
        <Icon type="ios-musical-note" />
        音乐
      </MenuItem>
      <MenuItem name="7">
        <Icon type="ios-construct" />
        工具
      </MenuItem>
      <Submenu name="8">
        <template slot="title">
          <Icon type="ios-contact" />
          个人
        </template>
        <MenuItem name="8-1"><Icon type="ios-podium" />图表</MenuItem>
        <MenuItem name="8-2"><Icon type="ios-settings" />设置</MenuItem>
        <MenuItem name="8-3"><Icon type="ios-log-out" />退出</MenuItem>
      </Submenu>
    </div>
  </Menu>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return{
          activeName:this.$route.path
      }
    },
    mounted() {
        console.log(this.$store.state)
    },
    methods: {
        menuChange(e){
            this.$store.commit('changeNameWithParams',{
                name:e
            });
            console.log(this.$store.state)
        },
    },
    watch: {
        '$route'(){
            this.activeName = this.$route.path
        }
    }
  };
</script>

<style scoped lang="less">
@import "../styles/Header.less";
</style>
