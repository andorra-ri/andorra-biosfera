<template>
	<section class="home">
		<div class="landing">
			<nav class="topbar">
				<div class="topbar__right">
					<ul class="main-nav">
						<li v-for="(section, name) in nav" :key="name">
							<a v-smooth-scroll :href="`#${section}`">{{ $t(`nav.${name}`) }}</a>
						</li>
					</ul>
					<a :href="join" target="_blank" class="cta">{{ $t('nav.join') }}</a>
				</div>
			</nav>
			<slideshow
				v-slot="{ item }"
				:items="goals.items"
				:autoplay="goals.interval"
				controls>
				<img :src="item.image" class="cover">
				<div class="hero">
					<h1>{{ $t('title') }}</h1>
					<h4 class="tagline">{{ $t(`goals.${item.id}.tagline`) }}</h4>
					<p>{{ $t(`goals.${item.id}.description`) }}</p>
				</div>
			</slideshow>
		</div>
	</section>
</template>

<script>
import Slideshow from '../components/Slideshow.vue';
import { nav, join, goals } from '../config.yaml';

export default {
	name: 'Home',
	components: { Slideshow },
	data() {
		return {
			nav,
			join,
			goals,
		};
	},
};
</script>
