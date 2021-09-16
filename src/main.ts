import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import { createPinia } from 'pinia';

import './assets/style/main.scss';

import App from './App.vue';
import router from './router';
import i18n from './translations';

import 'virtual:svg-icons-register';
import 'virtual:windi.css';

createApp(App)
  .use(router)
  .use(i18n)
  .use(createHead())
  .use(createPinia())
  .mount('#app');
