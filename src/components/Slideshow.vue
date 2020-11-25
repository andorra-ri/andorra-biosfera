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
			timeout: undefined,
		};
	},
	mounted() {
		this.jump(0);
	},
	beforeDestroy() {
		clearTimeout(this.timeout);
	},
	methods: {
		jump(index) {
			this.current = (this.items.length + index) % this.items.length;
			if (this.autoplay) {
				clearTimeout(this.timeout);
				this.timeout = setTimeout(() => this.next(), this.autoplay * 1000);
			}
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
