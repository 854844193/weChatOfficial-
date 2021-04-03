// 引入样式重置的样式表和适配方案
import './assets/js/rem'
import './assets/style/reset.css'
import './assets/style/vant.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import { Form, Button, Cascader, Icon, Calendar, Popup } from 'vant';


Vue.config.productionTip = false
Vue.use(Form).use(Button).use(Cascader).use(Icon).use(Calendar).use(Popup);


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})