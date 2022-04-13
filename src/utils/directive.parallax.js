export default {
	mounted(el, binding) {
		const { value: scale = 1 } = binding;
		el.onScroll = () => {
			const { innerHeight } = window;
			const { top } = el.getBoundingClientRect();
			const delta = top - innerHeight / 2;
			el.style.transform = `translateY(${delta * scale}px)`;
		};
		document.addEventListener('scroll', el.onScroll);
	},
	unmounted(el) {
		document.removeEventListener('scroll', el.onScroll);
	},
};
