<template>
  <div>
    <Card class="info-card" style="width:320px">
      <div style="text-align:center">
        <Avatar
          class="info-avatar"
          src="https://i.loli.net/2017/08/21/599a521472424.jpg"
          size="large"
        />
        <h3 class="info-name">名字</h3>
        <p class="info-synopsis">
          介绍：没有谁是永久的神，也没有谁一定要怎么样。正如真理的是一定条件下的真理。
          神是一个版本，一段时期的神。
          瓜皮打了七个赛季，五次s赛，三次冠军，一次亚军，一次四强。够了，真的够了，这个记录在撸啊撸史上算是不可超越了。
          前无古人，也怕是后无来者。看看吧，和瓜皮同期的选手还有多少？
          大师兄，命运不齐，仕途多舛。笨鸡也转到了教练，猪让则泯然与众人，大木倒是还能在场上。
          三星蓝白，也就剩下马塔和戴先生还在赛场上了。
          omg和皇族早已烟消云散。对了，faker，还记得那个ryu吗？还记得那个劫吗？
          那个夕阳下的奔跑，是我们逝去的青春
        </p>
      </div>
    </Card>
    <Card class="skill-card" style="width:320px">
      <Carousel autoplay dots="none" arrow="never" :autoplay-speed="4000">
        <CarouselItem>
          <div v-for="(item, idx) in skillData" :key="idx">
            <span class="skill-name">{{ item.name }}：</span>
            <Rate allow-half disabled v-model="item.level" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div v-for="(item, idx) in skillData2" :key="idx">
            <span class="skill-name">{{ item.name }}：</span>
            <Rate allow-half disabled v-model="item.level" />
          </div>
        </CarouselItem>
      </Carousel>
    </Card>
  </div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      skillData: [
        { name: "Html5", level: 4.5 },
        { name: "Css", level: 4.5 },
        { name: "Javascript", level: 4.5 },
        { name: "Jquery", level: 4 },
        { name: "Vue", level: 4 },
        { name: "Bootstrap", level: 3 }
      ],
      skillData2: [
        { name: "Css3", level: 4 },
        { name: "Es6", level: 4 },
        { name: "React", level: 3.5 },
        { name: "Node", level: 3.5 },
        { name: "Echarts", level: 4.5 },
        { name: "Typescript", level: 2.5 }
      ]
    };
  }
};
</script>

<style scoped lang="less">
@import "../styles/Info.less";
</style>
