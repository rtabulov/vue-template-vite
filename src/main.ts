import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import i18n from './translations';

import 'virtual:svg-icons-register';
import 'virtual:windi.css';

createApp(App).use(router).use(i18n).mount('#app');
