<template>
	<div class="wrapper">
		<home />
		<candidacy id="candidatura" />
		<faq id="faqs" />
	</div>
</template>

<script>
import Home from './views/Home.vue';
import Candidacy from './views/Candidacy.vue';
import Faq from './views/FAQ.vue';

export default {
	name: 'App',
	components: {
		Home,
		Candidacy,
		Faq,
	},
};
</script>
