import Vue from 'vue';

import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import {
  MdButton, MdContent, MdTabs, MdField,
} from 'vue-material/dist/components';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdField);
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
