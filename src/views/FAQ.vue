<template>
	<section class="split faq">
		<header>
			<h2>{{ $t('faq.title') }}</h2>
			<div class="contact">
				<h4>{{ $t('faq.more_doubts') }}</h4>
				<i18n tag="p" path="faq.contact">
					<template #email>
						<a :href="`mailto:${email}`">{{ $t('faq.email') }}</a>
					</template>
				</i18n>
				<nav-social />
			</div>
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
import NavSocial from '../components/NavSocial.vue';
import { mails } from '../config.yaml';

export default {
	name: 'FAQ',
	components: { NavSocial },
	data() {
		return { email: mails.inquiry };
	},
	computed: {
		questions() {
			return this.$t('faq.questions');
		},
	},
};
</script>
