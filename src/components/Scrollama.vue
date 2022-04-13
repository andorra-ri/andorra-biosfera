<template>
  <div class="scrollama">
    <div class="scrollama__sticky">
      <slot name="content" />
    </div>
    <div class="scrollama__steps">
      <slot />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';
import 'intersection-observer';
import Scrollama from 'scrollama';

export default {
  name: 'Scrollama',
  props: {
    step: { type: String, default: '.step' },
    offset: { type: [Number, String], default: 0.5 },
    threshold: { type: Number, default: 4 },
    once: { type: Boolean, default: false },
    order: { type: Boolean, default: false },
    progress: { type: Boolean, default: false },
  },
  setup(props, { emit }) {
    const scrollama = Scrollama();

    onMounted(() => {
      scrollama.setup(props);
      scrollama.onStepEnter(obj => emit('step-enter', obj));
      scrollama.onStepExit(obj => emit('step-exit', obj));
      scrollama.onStepProgress(obj => emit('step-progress', obj));
      window.addEventListener('resize', scrollama.resize);
    });

    onUnmounted(() => {
      scrollama.destroy();
      window.removeEventListener('resize', scrollama.resize);
    })

    return {};
  },
};
</script>

<style lang="scss">
.scrollama {
  &__sticky {
    position: sticky;
    top: 50%;
    padding: 1px;
  }

  &__steps {
    position: relative;
  }
}
</style>
