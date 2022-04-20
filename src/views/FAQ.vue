<template>
  <section class="wrapper split faq">
    <aside>
      <input
        v-model="search"
        :placeholder="t('faq.search')"
        type="text"
        class="search">
    </aside>
    <header>
      <h2>{{ t('faq.title') }}</h2>
      <div class="contact">
        <h4>{{ t('faq.more_doubts') }}</h4>
        <i18n-t tag="p" keypath="faq.contact">
          <template #email>
            <a :href="`mailto:${mails.inquiry}`">{{ t('faq.email') }}</a>
          </template>
        </i18n-t>
        <nav-social />
      </div>
    </header>
    <div class="content">
      <details v-for="question in questions" :key="question.question">
        <summary>{{ question.question }}</summary>
        <p>{{ question.answer }}</p>
      </details>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import NavSocial from '../components/NavSocial.vue';
import { mails } from '../config.yaml';

const QUESTIONS = 17;

const normalize = str => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const find = (str, texts) => texts.reduce((acc, txt) => acc || normalize(txt).includes(str), false);

export default {
  name: 'Faq',
  components: { NavSocial },
  setup() {
    const { t } = useI18n();
    const search = ref('');

    const questions = computed(() => {
      const needle = search.value && normalize(search.value);
      return [...Array(QUESTIONS).keys()]
        .map(i => ({
          question: t(`faq.questions.${i}.question`),
          answer: t(`faq.questions.${i}.answer`),
        }))
        .filter(({ question, answer }) => (
          needle ? find(needle, [question, answer]) : true
        ));
    });

    return { t, search, questions, mails };
  },
};
</script>
