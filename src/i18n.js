import Vue from 'vue';
import VueI18n from 'vue-i18n';

import cat from './locales/cat.yaml';

Vue.use(VueI18n);

export default new VueI18n({
	locale: 'cat',
	messages: { cat },
});
