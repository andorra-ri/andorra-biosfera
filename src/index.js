import Vue from 'vue';
import SmoothScroll from 'vue2-smooth-scroll';
import App from './App.vue';
import i18n from './i18n';

import 'reset-css';
import './styles/index.scss';

import { scroll } from './config.yaml';

Vue.use(SmoothScroll, scroll);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	i18n,
	render: h => h(App),
});
