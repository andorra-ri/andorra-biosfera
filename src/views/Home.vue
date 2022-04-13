<template>
  <section class="home">
    <!-- Top bar -->
    <nav class="topbar">
      <div class="topbar__content">
        <h1 class="logo">Reserva de la Biosfera</h1>
        <div class="topbar__right">
          <input id="open-menu" type="checkbox">
          <label for="open-menu"><span /></label>
          <ul class="main-nav">
            <li v-for="(section, name) in nav" :key="name">
              <a v-smooth-scroll :href="`#${section}`">{{ t(`nav.${name}`) }}</a>
            </li>
            <li>
              <a :href="join" target="_blank" class="cta">{{ t('nav.join') }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Landing -->
    <div class="wrapper landing">
      <slideshow
        v-slot="{ item }"
        :items="goals.items"
        :autoplay="goals.interval"
        controls>
        <figure class="cover">
          <img :src="item.image" :alt="item.image">
          <figcaption v-if="item.image_attr">{{ item.image_attr }}</figcaption>
        </figure>
        <div class="hero">
          <h1>{{ t('title') }}</h1>
          <h4 class="tagline">{{ t(`goals.${item.id}.tagline`) }}</h4>
          <p>{{ t(`goals.${item.id}.description`) }}</p>
        </div>
      </slideshow>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n';
import Slideshow from '../components/Slideshow.vue';
import { nav, join, goals } from '../config.yaml';

export default {
  name: 'Home',
  components: { Slideshow },
  setup() {
    const { t } = useI18n();
    return { t, nav, join, goals };
  },

};
</script>
