import Vue from "vue";
import VueRouter from "vue-router";

// 디폴트로 선언되었기 때문에 {중괄호} 없이 바로 import하는 것이고
// {router}는 const로 선언하였기 때문에 main.js에서 중괄호로 감싸서 import 해야 한다
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";

Vue.use(VueRouter);

// export 해줘야 main.js에서 import로 참조할 수 있음
export const router = new VueRouter({
  // mode history 쓰면 url에 # 사라짐
  mode: "history",

  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      component: NewsView,
    },
    {
      path: "/ask",
      component: AskView,
    },
    {
      path: "/jobs",
      component: JobsView,
    },
    {
      path: "/item",
      component: ItemView,
    },
    {
      path: "/user",
      component: UserView,
    },
  ],
});
