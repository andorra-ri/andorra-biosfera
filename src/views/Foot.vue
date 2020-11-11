<template>
	<footer class="foot">
		<div class="foot__left">
			<p class="copyright">&copy; 2020 &middot; {{ $t('title') }}</p>
		</div>
		<div class="foot__right">
			<nav-social />
			<a :href="join" target="_blank" class="cta">{{ $t('nav.join') }}</a>
		</div>
	</footer>
</template>

<script>
import NavSocial from '../components/NavSocial.vue';
import { join } from '../config.yaml';

export default {
	name: 'Foot',
	components: { NavSocial },
	data() {
		return { join };
	},
};
</script>
