import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeRoute from '@/views/home.vue'
import LoginRoute from '@/views/login.vue'
import CatalogRoute from '@/views/catalog.vue'
import TypeRoute from '@/views/type.vue'
import QuestionRoute from '@/views/question.vue'
import ErrorRoute from '@/views/error.vue'
import ForRoute from '@/views/for.vue'

Vue.use(VueRouter);
export default new VueRouter({
    mode: "hash",
    routes: [
        {
            path: "/",
            component: HomeRoute,
        },

        {
            path: "/api/oauth",
            component: () => import("@/api/oauth.vue")
        },
        {
            path: "/login",
            component: LoginRoute,
        },
        {
            path: "/oauth",
            component: LoginRoute,
        },
        {
            path: "/catalog",
            component: CatalogRoute,
        },
        {
            path: "/catalog/:key",
            component: CatalogRoute,
        },
        {
            path: "/type",
            component: TypeRoute,
        },
        {
            path: "/question",
            component: QuestionRoute,
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