<template>
	<section class="split faq">
		<header>
			<h2>{{ $t('faq.title') }}</h2>
		</header>
		<div class="content">
			<details v-for="question in questions" :key="question.question" open>
				<summary>{{ question.question }}</summary>
				<p>{{ question.answer }}</p>
			</details>
		</div>
	</section>
</template>

<script>
export default {
	name: 'FAQ',
	computed: {
		questions() {
			return this.$t('faq.questions');
		},
	},
};
</script>
