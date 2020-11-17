<template>
	<section class="reserve">
		<div class="definition">
			<i18n tag="p" class="main" path="reserve.description">
				<template #key_point>
					<strong>{{ $t('reserve.key_point') }}</strong>
				</template>
			</i18n>
			<p class="functions">{{ $t('reserve.functions') }}</p>
		</div>
		<scrollama class="zoning" @step-enter="onStepEnter">
			<p class="zoning__intro">{{ $t('reserve.zoning.description') }}</p>
			<template #content>
				<div class="zoning__zones">
					<contours :class="['zoning__contours', 'contours', activeZone]" />
				</div>
			</template>
			<div v-for="zone in zones" :key="zone" :class="stepClass(zone)">
				<h4>{{ $t(`reserve.zoning.${zone}.name`) }}</h4>
				<p>{{ $t(`reserve.zoning.${zone}.description`) }}</p>
				<p>{{ $t(`reserve.zoning.${zone}.andorra`) }}</p>
			</div>
		</scrollama>
		<div v-for="reason in why" :key="reason.id" :class="['parallax', reason.layout]">
			<h3>{{ $t(`reserve.why.${reason.id}.title`) }}</h3>
			<i18n
				v-for="(paragraph, i) in $t(`reserve.why.${reason.id}.text`)"
				:key="i"
				:path="`reserve.why.${reason.id}.text[${i}]`"
				tag="p">
				<template v-for="(link, anchor) in external" #[anchor]>
					<a
						:key="anchor"
						:href="link"
						rel="external"
						target="_blank">
						{{ $t(`external.${anchor}`) }}
					</a>
				</template>
			</i18n>
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

import { why, external } from '../config.yaml';

export default {
	name: 'Reserve',
	directives: { Parallax },
	components: { Scrollama, Contours },
	data() {
		return {
			zones: ['core', 'buffer', 'transition'],
			activeZone: undefined,
			why,
			external,
		};
	},
	methods: {
		onStepEnter(step) {
			this.activeZone = this.zones[step.index];
		},
		stepClass(zone) {
			return ['step', { active: zone === this.activeZone }];
		},
	},
};
</script>
