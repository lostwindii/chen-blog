<template>
  <Layout class="container">
    <Affix :offset-top="80">
      <Sider class="container-lf" width="320">
        <Info />
      </Sider>
    </Affix>
    <Content class="container-center">
      <ul class="articles-items">
        <li class="articles-item" v-for="(item, idx) in articleData" :key="idx" :id="item.id">
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
      <Card style="width:140px">
        <Timeline>
          <TimelineItem v-for="(item, idx) in articleData" :key="idx">2019/11/12</TimelineItem>
        </Timeline>
      </Card>
    </Sider>
    <BackTop :height="800" :bottom="60" :right="87">
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
          id: 1,
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
          id: 2,
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
          id: 3,
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
          title: "This is title 4",
          id: 4,
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
          title: "This is title 5",
          id: 5,
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
          title: "This is title 6",
          id: 6,
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
          title: "This is title 7",
          id: 7,
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
          title: "This is title 8",
          id: 8,
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
          title: "This is title 9",
          id: 9,
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
          title: "This is title 10",
          id: 10,
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
          title: "This is title 11",
          id: 11,
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
          title: "This is title 12",
          id: 12,
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
          title: "This is title 13",
          id: 13,
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
          title: "This is title 14",
          id: 14,
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
          title: "This is title 15",
          id: 15,
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
