<template>
  <section class="wrapper split reverse testimonials">
    <header>
      <h2>{{ t('testimonials.title') }}</h2>
      <p>{{ t('testimonials.caption') }}</p>
    </header>
    <div class="content">
      <blockquote v-for="({ name, file }, id) in testimonials" :key="name">
        <p class="quote">{{ t(`testimonials.quotes.${id}`) }}</p>
        <p>
          <a :href="`/docs/${file}`" target="blank">
            {{ t('testimonials.read', { name }) }} &rarr;
          </a>
        </p>
      </blockquote>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { testimonials } from '/@/config.yaml';

export default {
  name: 'Testimonials',
  setup() {
    const { t } = useI18n();
    return { t, testimonials };
  },
};
</script>
