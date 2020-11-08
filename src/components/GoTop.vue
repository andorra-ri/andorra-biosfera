<template>
	<a v-if="visible" v-smooth-scroll="options" :href="`#${anchor}`" :class="goTopClass" />
</template>

<script>
import { scroll } from '../config.yaml';

export default {
	name: 'GoTop',
	props: {
		anchor: { type: String, required: true },
		duration: { type: Number, default: scroll.duration || 1000 },
		easing: { type: Function, default: null },
		position: { type: String, default: 'bottom-right' },
	},
	data() {
		return { visible: false };
	},
	computed: {
		options() {
			const { duration, easing: easingFunction } = this;
			return { duration, easingFunction };
		},
		goTopClass() {
			return ['go-top', ...this.position.split('-')];
		},
	},
	mounted() {
		document.addEventListener('scroll', () => {
			this.visible = window.scrollY > window.innerHeight;
		});
	},
};
</script>

<style lang="scss">
.go-top {
	content: '';
	position: fixed;
	display: block;
	margin: 0.5rem;
	height: 2.5rem;
	width: 2.5rem;
	background: url('../assets/vectors/chevron-up.svg');

	&.bottom { bottom: 0; }
	&.top { top: 0; }
	&.left { left: 0; }
	&.right { right: 0; }
}
</style>
