<template>
  <div id="app">
    <Affix>
      <Header>
        <Header />
      </Header>
    </Affix>
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Index",
  components: {
    Header
  }
};
</script>

<style lang="less">
@import "styles/Global.less";
</style>
