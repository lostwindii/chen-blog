import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "view-design/dist/styles/iview.css";
import api from './api/api'
import {
  Message,
  Affix,
  Layout,
  Header,
  Sider,
  Content,
  Icon,
  Menu,
  MenuItem,
  MenuGroup,
  Submenu,
  Button,
  Card,
  Avatar,
  Rate,
  Carousel,
  CarouselItem,
  BackTop,
  Timeline,
  TimelineItem,
  Anchor,
  AnchorLink
} from "view-design";

Vue.component("Affix", Affix);
Vue.component("Layout", Layout);
Vue.component("Header", Header);
Vue.component("Content", Content);
Vue.component("Sider", Sider);
Vue.component("Icon", Icon);
Vue.component("Menu", Menu);
Vue.component("MenuItem", MenuItem);
Vue.component("MenuGroup", MenuGroup);
Vue.component("Submenu", Submenu);
Vue.component("Button", Button);
Vue.component("Card", Card);
Vue.component("Avatar", Avatar);
Vue.component("Rate", Rate);
Vue.component("Carousel", Carousel);
Vue.component("CarouselItem", CarouselItem);
Vue.component("BackTop", BackTop);
Vue.component("Timeline", Timeline);
Vue.component("TimelineItem", TimelineItem);
Vue.component("Anchor", Anchor);
Vue.component("AnchorLink", AnchorLink);
Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$Message = Message;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
