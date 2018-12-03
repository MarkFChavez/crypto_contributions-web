import Vue from "vue";
import Router from "vue-router";
import BitcoinPage from "./views/BitcoinPage.vue";
import EthereumPage from "./views/EthereumPage.vue";
import StellarPage from "./views/StellarPage.vue";

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
      path: "/stellar",
      name: "stellar",
      component: StellarPage,
    },
  ]
});
