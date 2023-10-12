import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueYtframe from 'vue3-ytframe';

createApp(App).use(store).use(router).use(VueYtframe).mount('#app');
