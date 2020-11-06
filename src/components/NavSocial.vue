<template>
	<ul class="nav-social">
		<li v-for="(url, name) in social" :key="name">
			<a
				:href="url"
				:title="$t(`social.${name}`)"
				rel="external"
				target="_blank">
				<svg><use :xlink:href="`vectors/social.svg#${name}`" /></svg>
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
