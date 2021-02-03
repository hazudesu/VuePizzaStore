import Vue from 'vue';
import Router from 'vue-router';
import homepage from './components/homepage.vue';
import orderForm from './components/orderform.vue';
import sales from './components/sales.vue';

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
    {
        path:'/sales' ,
        name: 'sales' ,
        component: sales,
    }
];

const router = new Router({
    mode: 'history' ,
    routes,
})

export default router;
