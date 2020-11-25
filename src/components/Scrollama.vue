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
import 'intersection-observer';
import scrollama from 'scrollama';

export default {
	name: 'Scrollama',
	props: {
		offset: { type: [Number, String], default: 0.5 },
		threshold: { type: Number, default: 4 },
		once: { type: Boolean, default: false },
		order: { type: Boolean, default: false },
		progress: { type: Boolean, default: false },
	},
	data() {
		return { scrollama: undefined };
	},
	mounted() {
		this.scrollama = scrollama();
		this.scrollama.setup({
			step: '.step',
			offset: this.offset,
			threshold: this.threshold,
			once: this.once,
			order: this.order,
			progress: this.progress,
		});

		this.scrollama.onStepEnter(obj => this.$emit('step-enter', obj));
		this.scrollama.onStepExit(obj => this.$emit('step-exit', obj));
		this.scrollama.onStepProgress(obj => this.$emit('step-progress', obj));

		window.addEventListener('resize', this.scrollama.resize);
	},
	beforeDestroy() {
		this.scrollama.destroy();
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
