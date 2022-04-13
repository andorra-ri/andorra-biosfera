<template>
	<div id="app" class="wrapper">
		<!--go-top anchor="app" position="top-right" /-->
		<home />
		<!--reserve id="reserve" /-->
		<candidacy id="candidatura" />
		<!--faq id="faqs" />
		<foot /-->
	</div>
</template>

<script>
// import GoTop from './components/GoTop.vue';
import Home from './views/Home.vue';
// import Reserve from './views/Reserve.vue';
import Candidacy from './views/Candidacy.vue';
// import Faq from './views/FAQ.vue';
// import Foot from './views/Foot.vue';

export default {
	name: 'App',
  components: {
		// GoTop,
		Home,
		// Reserve,
		Candidacy,
		// Faq,
		// Foot,
	},
};
</script>
