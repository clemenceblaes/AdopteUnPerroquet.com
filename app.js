window.Vue = require('vue');

import vuetify from './vuetify';
import App from './App.vue';
import VueRouter from 'vue-router';
import Store from "./store";
import MainCarousel from "./components/Carousels/MainCarousel.vue";
import ParrotMenu from "./components/Views/ParrotMenuView.vue";
import ParrotsType from "./components/Views/ParrotsType.vue";
import Guide from "./components/Guide.vue";
import Auth from "./components/Auth.vue";
import NewAccount from "./components/newAccount.vue";


Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: MainCarousel,
    },
    {
        path: "/parrots",
        component: ParrotMenu,
    },
    {
        path: "/parrotsType",
        component: ParrotsType,
    },
    {
        path: "/guide",
        component: Guide,
    },
    {
        path: "/auth",
        component: Auth,
    },
    {
        path: "/newAccount",
        component: NewAccount,
    }
];

const router = new VueRouter({ routes });

const app = new Vue({
    vuetify,
    router: router,
    Store,
    el: '#app',
    render: h => h(App),
});
