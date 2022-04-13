
import { createI18n } from 'vue-i18n';
import messages from '@intlify/vite-plugin-vue-i18n/messages'; // eslint-disable-line import/no-unresolved
// import config from '/@/config.yaml';

// const { default_locale: locale } = config.localization;

export default createI18n({
  locale: 'ca',
  fallbackLocale: 'ca',
  messages,
});
