import Vue from 'vue'
import './plugins/axios'
import './plugins/vue_confirm'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import router from './router'
import VueLogger from 'vuejs-logger';
import VueSelectImage from 'vue-select-image'
// add stylesheet
require('vue-select-image/dist/vue-select-image.css')
const VueUploadComponent = require('vue-upload-component')


Vue.config.productionTip = false

const isProduction = process.env.NODE_ENV === 'production';
 
const options = {
    isEnabled: true,
    logLevel : isProduction ? 'error' : 'debug',
    stringifyArguments : false,
    showLogLevel : true,
    showMethodName : true,
    separator: '|',
    showConsoleColors: true
};

Vue.component('file-upload', VueUploadComponent)

Vue.use(VueSelectImage)

Vue.use(VueLogger, options);

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
