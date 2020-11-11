<template>
	<section class="reserve">
		<i18n tag="p" class="big" path="reserve.description">
			<template #key_point>
				<strong>{{ $t('reserve.key_point') }}</strong>
			</template>
		</i18n>
		<p>{{ $t('reserve.functions') }}</p>
		<scrollama class="zoning" @step-enter="onStepEnter">
			<p class="zoning__intro">{{ $t('reserve.zoning.description') }}</p>
			<template #content>
				<div class="zoning__zones">
					<contours :highlight="activeZone" class="zoning__contours" />
				</div>
			</template>
			<div v-for="zone in zones" :key="zone" class="step">
				<h3>{{ $t(`reserve.zoning.${zone}.name`) }}</h3>
				<p>{{ $t(`reserve.zoning.${zone}.description`) }}</p>
				<p>{{ $t(`reserve.zoning.${zone}.andorra`) }}</p>
			</div>
		</scrollama>
		<div v-for="reason in reasons" :key="reason.id" :class="['parallax', reason.layout]">
			<p>{{ $t(`reserve.reasons.${reason.id}`) }}</p>
			<img
				v-for="(image, i) in reason.images"
				:key="image"
				v-parallax="reason.parallax[i]"
				:src="image">
		</div>
	</section>
</template>

<script>
import Parallax from '../utils/directive.parallax';
import Scrollama from '../components/Scrollama.vue';
import Contours from '../components/Contours.vue';

import { reasons } from '../config.yaml';

export default {
	name: 'Reserve',
	directives: { Parallax },
	components: { Scrollama, Contours },
	data() {
		return {
			zones: ['core', 'buffer', 'transition'],
			activeZone: undefined,
			reasons,
		};
	},
	methods: {
		onStepEnter(step) {
			this.activeZone = this.zones[step.index];
		},
	},
};
</script>
