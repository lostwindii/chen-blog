<template>
  <Layout class="container">
    <Affix :offset-top="80">
      <Sider class="container-lf" width="320">
        <Info />
      </Sider>
    </Affix>
    <Content class="container-center">
      <ul class="articles-items">
        <li class="articles-item" v-for="(item, idx) in articleData" :key="idx">
          <div class="articles-item-lf">
            <p class="articles-title">{{ item.title }}</p>
            <p class="articles-description">{{ item.description }}</p>
            <p class="articles-content">{{ item.content }}</p>
            <ul class="articles-action">

              <li><Icon type="ios-star-outline" />{{ item.star }}</li>
              <li><Icon type="ios-thumbs-up-outline" />{{ item.like }}</li>
              <li><Icon type="ios-text-outline" />{{ item.comment }}</li>
            </ul>
          </div>
          <div class="articles-item-rt">
            <img :src="item.cover" alt="" />
          </div>
        </li>
      </ul>
    </Content>
    <Sider class="container-rt" width="140">
      <Timeline>
        <TimelineItem v-for="(item, idx) in articleData" :key="idx">2019/11/12</TimelineItem>
      </Timeline>
    </Sider>
    <BackTop :height="800" :bottom="40" :right="40">
      <div class="top">
        <Icon type="ios-arrow-up" />
      </div>
    </BackTop>
  </Layout>
</template>

<script>
import Info from "@/components/Info.vue";

export default {
  name: "home",
  data() {
    return {
      articleData: [
        {
          title: "This is title 1",
          star: 113,
          like: 3234,
          comment: 213,
          description:
            "This is description, this is description, this is description.",
          cover:
            "https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large",
          content:
            "This is the content, this is the content, this is the content, this is the content."
        },
        {
          title: "This is title 2",
          star: 113,
          like: 3234,
          comment: 213,
          description:
            "This is description, this is description, this is description.",
          cover:
            "https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large",
          content:
            "This is the content, this is the content, this is the content, this is the content."
        },
        {
          title: "This is title 3",
          star: 113,
          like: 3234,
          comment: 213,
          description:
            "This is description, this is description, this is description.",
          cover:
            "https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large",
          content:
            "This is the content, this is the content, this is the content, this is the content."
        },
        {
          title: "This is title 1",
          star: 113,
          like: 3234,
          comment: 213,
          description:
            "This is description, this is description, this is description.",
          cover:
            "https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large",
          content:
            "This is the content, this is the content, this is the content, this is the content."
        },
        {
          title: "This is title 2",
          star: 113,
          like: 3234,
          comment: 213,
          description:
            "This is description, this is description, this is description.",
          cover:
            "https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large",
          content:
            "This is the content, this is the content, this is the content, this is the content."
        },
        {
          title: "This is title 3",
          star: 113,
          like: 3234,
          comment: 213,
          description:
            "This is description, this is description, this is description.",
          cover:
            "https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large",
          content:
            "This is the content, this is the content, this is the content, this is the content."
        },
        {
          title: "This is title 1",
          star: 113,
          like: 3234,
          comment: 213,
          description:
            "This is description, this is description, this is description.",
          cover:
            "https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large",
          content:
            "This is the content, this is the content, this is the content, this is the content."
        },
        {
          title: "This is title 2",
          star: 113,
          like: 3234,
          comment: 213,
          description:
            "This is description, this is description, this is description.",
          cover:
            "https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large",
          content:
            "This is the content, this is the content, this is the content, this is the content."
        },
        {
          title: "This is title 3",
          star: 113,
          like: 3234,
          comment: 213,
          description:
            "This is description, this is description, this is description.",
          cover:
            "https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large",
          content:
            "This is the content, this is the content, this is the content, this is the content."
        },
        {
          title: "This is title 1",
          star: 113,
          like: 3234,
          comment: 213,
          description:
            "This is description, this is description, this is description.",
          cover:
            "https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large",
          content:
            "This is the content, this is the content, this is the content, this is the content."
        },
        {
          title: "This is title 2",
          star: 113,
          like: 3234,
          comment: 213,
          description:
            "This is description, this is description, this is description.",
          cover:
            "https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large",
          content:
            "This is the content, this is the content, this is the content, this is the content."
        },
        {
          title: "This is title 3",
          star: 113,
          like: 3234,
          comment: 213,
          description:
            "This is description, this is description, this is description.",
          cover:
            "https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large",
          content:
            "This is the content, this is the content, this is the content, this is the content."
        },
        {
          title: "This is title 1",
          star: 113,
          like: 3234,
          comment: 213,
          description:
            "This is description, this is description, this is description.",
          cover:
            "https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large",
          content:
            "This is the content, this is the content, this is the content, this is the content."
        },
        {
          title: "This is title 2",
          star: 113,
          like: 3234,
          comment: 213,
          description:
            "This is description, this is description, this is description.",
          cover:
            "https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large",
          content:
            "This is the content, this is the content, this is the content, this is the content."
        },
        {
          title: "This is title 3",
          star: 113,
          like: 3234,
          comment: 213,
          description:
            "This is description, this is description, this is description.",
          cover:
            "https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large",
          content:
            "This is the content, this is the content, this is the content, this is the content."
        }
      ]
    };
  },
  components: {
    Info
  }
};
</script>

<style scoped lang="less">
@import "../styles/Home.less";
</style>
