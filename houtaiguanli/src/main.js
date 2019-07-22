// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import Mock from './mock'
Mock.bootstrap()
import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI);

import axios from 'axios'
Vue.prototype.$http=axios
import 'animate.css'

import commonComponent from './components/common'
for(var i in commonComponent){
  Vue.component(i,commonComponent[i]);

}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
