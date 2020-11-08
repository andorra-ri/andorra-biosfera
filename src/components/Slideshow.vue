<template>
	<div class="slideshow">
		<slot :item="items[current]" />
		<div v-if="counter" class="slideshow__counter">
			<span class="slideshow__counter-active">{{ current + 1 }}</span>
			<span class="slideshow__counter-total">{{ items.length }}</span>
		</div>
		<div v-if="controls" class="slideshow__controls">
			<button class="slideshow__prev" @click="prev">
				<img src="../assets/vectors/chevron-left.svg" alt="Prev">
			</button>
			<button class="slideshow__next" @click="next">
				<img src="../assets/vectors/chevron-right.svg" alt="Next">
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Slideshow',
	props: {
		items: { type: Array, required: true },
		autoplay: { type: Number, default: 0 },
		controls: { type: Boolean, default: false },
		counter: { type: Boolean, default: false },
	},
	data() {
		return {
			current: 0,
			interval: undefined,
		};
	},
	mounted() {
		const { autoplay, next } = this;
		if (autoplay) this.interval = setInterval(() => next(), autoplay * 1000);
	},
	beforeDestroy() {
		clearInterval(this.interval);
	},
	methods: {
		jump(index) {
			this.current = (this.items.length + index) % this.items.length;
		},
		prev() {
			this.jump(this.current - 1);
		},
		next() {
			this.jump(this.current + 1);
		},
	},
};
</script>
