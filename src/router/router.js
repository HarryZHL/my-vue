/**
 * Created by zhanghelong on 17/5/9.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '../App.vue'
import Index from '../pages/index.vue'

import {Radio,RadioGroup,RadioButton}  from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.component(Radio.name, Radio);
Vue.component(RadioGroup.name, RadioGroup);
Vue.component(RadioButton.name, RadioButton);

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[{
        path: '/',
        component: App,
        children:[{
            path: '/',
            name:'start',
            component: Index
        }]
    }]
});

export default router;