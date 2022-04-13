import { createApp } from 'vue';
import SmoothScroll from 'vue3-smooth-scroll';
import App from './App.vue';
import i18n from './i18n';

import 'reset-css';
import './styles/index.scss';

import { scroll } from './config.yaml';

/* eslint-disable no-new */

const app = createApp(App);
app.use(i18n);
app.use(SmoothScroll, scroll);
app.mount('#app');
