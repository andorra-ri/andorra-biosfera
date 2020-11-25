<template>
	<ul class="nav-social">
		<li v-for="(url, name) in social" :key="name">
			<a
				:href="url"
				:title="$t(`social.${name}`)"
				rel="external"
				target="_blank">
				<img :src="`vectors/social-${name}.svg`">
			</a>
		</li>
	</ul>
</template>

<script>
import { social } from '../config.yaml';

export default {
	name: 'NavSocial',
	data() {
		return { social };
	},
};
</script>
