import Vue from 'vue';
import Router from 'vue-router';
import homepage from './components/homepage.vue';
import orderForm from './components/orderform.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'base',
        component: homepage,
    },
    {
        path: '/order' ,
        name: 'order' ,
        component: orderForm,
    },
];

const router = new Router({
    mode: 'history' ,
    routes,
})

export default router;
