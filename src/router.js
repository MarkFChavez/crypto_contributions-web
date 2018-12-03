import Vue from "vue";
import Router from "vue-router";
import BitcoinPage from "./views/BitcoinPage.vue";
import EthereumPage from "./views/EthereumPage.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "root",
      component: BitcoinPage,
    },
    {
      path: "/ethereum",
      name: "ethereum",
      component: EthereumPage,
    },
    {
      path: "/bitcoin",
      redirect: { name: "root" },
    }
  ]
});
