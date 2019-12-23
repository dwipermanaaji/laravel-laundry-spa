import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import store from './store.js';
import indexOutlet from './pages/outlets/Index.vue';
import dataOutlet from './pages/outlets/Outlet.vue';
import addOutlet from './pages/outlets/Add.vue';
import editOutlet from './pages/outlets/Edit.vue';


Vue.use(Router);

const router = new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'home',
            component:Home,
            meta:{requiresAuth:true}
        },
        {
            path:'/login',
            name:'login',
            component:Login,
        },
        {
            path:'/outlets',
            component:indexOutlet,
            meta:{requiresAuth:true},
            children:[
                {
                    path:'',
                    name:'outlets.data',
                    component:dataOutlet,
                    meta:{
                        title:'Manage Outlets',
                    }
                },
                {
                    path:'add',
                    name:'outlets.add',
                    component:addOutlet,
                    meta:{
                        title:'Add New Outlet',
                    }
                },
                {
                    path:'edit/:id',
                    name:'outlets.edit',
                    component:editOutlet,
                    meta:{
                        title:'Edit Outlet'
                    }
                }
            ]
        },
    ],
});

router.beforeEach((to, from, next)=>{
    store.commit('CLEAR_ERRORS');
    if (to.matched.some(record => record.meta.requiresAuth)) {
        let auth = store.getters.isAuth
        if (!auth) {
            next({name:'login'});
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router