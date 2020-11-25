<template>
	<section class="split faq">
		<aside>
			<input
				v-model="search"
				:placeholder="$t('faq.search')"
				type="text"
				class="search">
		</aside>
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
			<details v-for="question in questions" :key="question.question">
				<summary>{{ question.question }}</summary>
				<p>{{ question.answer }}</p>
			</details>
		</div>
	</section>
</template>

<script>
import NavSocial from '../components/NavSocial.vue';
import { mails } from '../config.yaml';

const normalize = str => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const find = (str, texts) => texts.reduce((acc, txt) => acc || normalize(txt).includes(str), false);

export default {
	name: 'FAQ',
	components: { NavSocial },
	data() {
		return {
			search: '',
			group: undefined,
			email: mails.inquiry,
		};
	},
	computed: {
		questions() {
			const search = this.search && normalize(this.search);
			return this.$t('faq.questions').filter(({ group, question, answer }) => {
				const inGroup = this.group ? group === this.group : true;
				const isFound = search ? find(search, [question, answer]) : true;
				return inGroup && isFound;
			});
		},
	},
};
</script>
