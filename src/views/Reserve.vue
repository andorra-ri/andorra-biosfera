<template>
  <section class="reserve">
    <div if="what" class="definition">
      <h2>{{ t('reserve.title') }}</h2>
      <i18n-t tag="p" class="main" keypath="reserve.description">
        <template #key_point>
          <strong>{{ t('reserve.key_point') }}</strong>
        </template>
      </i18n-t>
      <p>{{ t('reserve.functions') }}</p>
      <p>{{ t('reserve.is_not') }}</p>
    </div>

    <!-- Scrollama -->
    <scrollama class="zoning" @step-enter="onStepEnter">
      <p class="zoning__intro">{{ t('reserve.zoning.description') }}</p>
      <template #content>
        <div class="zoning__zones">
          <contours class="zoning__contours" :active="activeZone" />
        </div>
      </template>
      <div v-for="zone in zones" :key="zone" :class="stepClass(zone)">
        <h4>{{ t(`reserve.zoning.${zone}.name`) }}</h4>
        <p>{{ t(`reserve.zoning.${zone}.description`) }}</p>
        <p>{{ t(`reserve.zoning.${zone}.andorra`) }}</p>
      </div>
    </scrollama>

    <!-- Justification -->
    <div id="why">
      <h2>{{ t('reserve.why.title') }}</h2>
      <div v-for="reason in why" :key="reason.id" :class="['parallax', reason.layout]">
        <h3>{{ t(`reserve.why.${reason.id}.title`) }}</h3>
        <i18n-t
          v-for="paragraph in reason.paragraphs"
          :key="paragraph"
          :keypath="`reserve.why.${reason.id}.text.${paragraph - 1}`"
          tag="p">
          <template v-for="(link, anchor) in external" #[anchor]>
            <a
              :key="anchor"
              :href="link"
              rel="external"
              target="_blank">
              {{ t(`external.${anchor}`) }}
            </a>
          </template>
        </i18n-t>
        <img
          v-for="(image, i) in reason.images"
          :key="image"
          v-parallax="reason.parallax[i]"
          :src="image">
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Parallax from '../utils/directive.parallax';
import Scrollama from '../components/Scrollama.vue';
import Contours from '../components/Contours.vue';

import { why, external } from '../config.yaml';

export default {
  name: 'Reserve',
  directives: { Parallax },
  components: { Scrollama, Contours },
  setup() {
    const { t } = useI18n();
    const zones = ['core', 'buffer', 'transition'];
    const activeZone = ref(undefined);

    const onStepEnter = step => {
      activeZone.value = zones[step.index];
    };

    const stepClass = zone => ['step', { active: zone === activeZone.value }];

    return { t, why, external, zones, activeZone, onStepEnter, stepClass };
  },
};
</script>
