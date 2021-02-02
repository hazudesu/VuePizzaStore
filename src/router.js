import Vue from 'vue';
import Router from 'vue-router';
import homepage from './components/homepage.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'base',
        component: homepage,
    },
];

const router = new Router({
    mode: 'history' ,
    routes,
})

export default router;
