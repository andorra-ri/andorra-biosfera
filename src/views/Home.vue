<template>
	<section class="home">
		<div class="landing">
			<nav class="topbar">
				<div class="topbar__right">
					<ul class="main-nav">
						<li v-for="(section, name) in nav" :key="name">
							<a :href="`#${section}`">{{ $t(`nav.${name}`) }}</a>
						</li>
					</ul>
					<a :href="join" target="_blank" class="cta">{{ $t('nav.join') }}</a>
				</div>
			</nav>
		</div>
	</section>
</template>

<script>
import { nav, join } from '../config.yaml';

export default {
	name: 'Home',
	data() {
		return {
			nav,
			join,
		};
	},
};
</script>
