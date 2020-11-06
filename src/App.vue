<template>
	<div class="wrapper">
		<candidacy />
		<faq />
	</div>
</template>

<script>
import Candidacy from './views/Candidacy.vue';
import Faq from './views/FAQ.vue';

export default {
	name: 'App',
	components: {
		Candidacy,
		Faq,
	},
};
</script>
