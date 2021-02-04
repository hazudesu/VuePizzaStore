import Vue from 'vue';
import Router from 'vue-router';
import homepage from './components/homepage.vue';
import orderForm from './components/orderform.vue';
import sales from './components/sales.vue';
import salestop from './components/salesxtop.vue';
import salessize from './components/salessxsize.vue';

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
    },
    {
        path:'/salesxtop',
        name: 'salesxtop' ,
        component: salestop,
    },
    {
        path:'/salesxsize' ,
        name: 'salesxsize' ,
        component: salessize,
    }
];

const router = new Router({
    mode: 'history' ,
    routes,
})

export default router;
