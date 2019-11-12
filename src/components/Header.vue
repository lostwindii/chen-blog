<template>
  <Menu class="header" mode="horizontal" active-name="1">
    <div class="header-lf">
      <a class="site-title" href="/">网站LOGO</a>
    </div>
    <div class="header-rt">
      <MenuItem name="1">
        <Icon type="ios-paper" />
        文章
      </MenuItem>
      <MenuItem name="4">
        <Icon type="ios-construct" />
        设置
      </MenuItem>
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-contact" />
          我的
        </template>
        <MenuGroup title="生活">
          <MenuItem name="3-1">音乐</MenuItem>
          <MenuItem name="3-2">厨艺</MenuItem>
          <MenuItem name="3-3">足球</MenuItem>
        </MenuGroup>
        <MenuGroup title="工作">
          <MenuItem name="3-4">技能</MenuItem>
          <MenuItem name="3-5">项目</MenuItem>
        </MenuGroup>
      </Submenu>
    </div>
  </Menu>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="less">
@import "../styles/Header.less";
</style>
