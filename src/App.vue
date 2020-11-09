<template>
	<div id="app" class="wrapper">
		<go-top anchor="app" position="top-right" />
		<home />
		<candidacy id="candidatura" />
		<faq id="faqs" />
	</div>
</template>

<script>
import GoTop from './components/GoTop.vue';
import Home from './views/Home.vue';
import Candidacy from './views/Candidacy.vue';
import Faq from './views/FAQ.vue';

export default {
	name: 'App',
	components: {
		GoTop,
		Home,
		Candidacy,
		Faq,
	},
};
</script>
