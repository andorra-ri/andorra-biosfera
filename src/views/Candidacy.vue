<template>
  <section class="split reverse candidacy">
    <header>
      <h2>{{ t('candidacy.title') }}</h2>
      <p>{{ t('candidacy.download_files') }}</p>
      <ul class="files">
        <li v-for="file in files" :key="file.name">
          <img :src="`vectors/file-${file.icon}.svg`">
          <a :href="file.path" download>
            {{ t(`candidacy.files.${file.name}`) }}
          </a>
        </li>
      </ul>
    </header>
    <div class="content">
      <div class="video video--16_9">
        <iframe :src="video" allowfullscreen="true" />
      </div>
      <p>{{ t('candidacy.description') }}</p>
      <ul class="timeline">
        <li
          v-for="step in steps"
          :key="step.name"
          :class="{ 'is-started': step.started }">
          <em>{{ step.begin }}</em>
          <h4>{{ t(`candidacy.steps.${step.name}.name`) }}</h4>
          <p>{{ t(`candidacy.steps.${step.name}.description`) }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { candidacy } from '../config.yaml';

const EXTENSIONS = ['pdf', 'xlsx', 'docx', 'pptx', 'zip'];
const DATE_OPTIONS = { month: 'long', year: 'numeric' };
const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);

export default {
  name: 'Candidacy',
  setup() {
    const { t, locale } = useI18n();

    const steps = Object.entries(candidacy.steps).map(([name, epoch]) => {
      const date = new Date(epoch);
      const started = date < new Date();
      const begin = capitalize(date.toLocaleString(locale.value, DATE_OPTIONS));
      return { name, begin, started };
    });

    const files = Object.entries(candidacy.files).map(([name, path]) => {
      const extension = path.substring(path.lastIndexOf('.') + 1);
      const icon = EXTENSIONS.includes(extension) ? extension : 'file';
      return { name, path, icon };
    });

    return { t, ...candidacy, steps, files };
  },
};
</script>
