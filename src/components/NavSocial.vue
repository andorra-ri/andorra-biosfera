<template>
  <ul class="nav-social">
    <li v-for="(url, name) in social" :key="name">
      <a
        :href="url"
        :title="t(`social.${name}`)"
        rel="external"
        target="_blank">
        <img :src="`vectors/social-${name}.svg`">
      </a>
    </li>
  </ul>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { social } from '../config.yaml';

export default {
  name: 'NavSocial',
  setup() {
    const { t } = useI18n();
    return { t, social };
  },
};
</script>
