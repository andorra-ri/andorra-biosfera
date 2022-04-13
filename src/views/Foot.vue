<template>
  <footer class="foot">
    <section class="coordination">
      <p>{{ t('leading') }}</p>
      <img :src="`logos/${coordination.leader}.png`" class="logos__main">
      <p>{{ t('in_coordination') }}</p>
      <ul class="logos">
        <li v-for="fellow in coordination.fellows" :key="fellow">
          <img :src="`logos/${fellow}.png`">
        </li>
      </ul>
    </section>
    <div class="foot__bar">
      <div class="foot__left">
        <p class="copyright">&copy; 2020 &middot; {{ t('title') }}</p>
      </div>
      <div class="foot__right">
        <nav-social />
        <a :href="join" target="_blank" class="cta">{{ t('nav.join') }}</a>
      </div>
    </div>
  </footer>
</template>

<script>
import { useI18n } from 'vue-i18n';
import NavSocial from '../components/NavSocial.vue';
import { join, coordination } from '../config.yaml';

export default {
  name: 'Foot',
  components: { NavSocial },
  setup() {
    const { t } = useI18n();
    return { t, join, coordination };
  },
};
</script>
