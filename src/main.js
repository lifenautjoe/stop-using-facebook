import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import 'bulma/bulma.sass'
import '@fortawesome/fontawesome-free/css/all.css';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy);
var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo);


Vue.config.productionTip = false;

new Vue({
    router,
    render: function (h) {
        return h(App)
    }
}).$mount('#app');
