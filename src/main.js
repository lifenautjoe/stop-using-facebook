import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import 'bulma/bulma.sass'
import '@fortawesome/fontawesome-free/css/all.css';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import 'animate.css/animate.css';
var SocialSharing = require('vue-social-sharing');

Vue.use(SocialSharing);
Vue.use(Buefy);
var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo, {
    offset: -90
});

Vue.config.productionTip = false;

new Vue({
    router,
    render: function (h) {
        return h(App)
    }
}).$mount('#app');
