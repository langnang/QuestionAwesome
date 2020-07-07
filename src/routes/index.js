import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeRoute from './../views/home.vue'
import LoginRoute from './../views/login.vue'
import ErrorRoute from './../views/error.vue'

import ForRoute from '@/views/for.vue';

Vue.use(VueRouter);
export default new VueRouter({
    mode: "hash",
    routes: [
        {
            path: "/",
            component: HomeRoute,
        },
        {
            path: "/login",
            component: LoginRoute,
        },
        {
            path: "/for/:type",
            component: ForRoute,
        },
        {
            path: "*",
            component: ErrorRoute,
        }
    ]
})