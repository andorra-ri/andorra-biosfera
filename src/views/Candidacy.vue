<template>
	<section class="split candidacy">
		<header>
			<h2>{{ $t('candidacy.title') }}</h2>
		</header>
		<div class="content">
			<p>{{ $t('candidacy.description') }}</p>
			<ul class="timeline">
				<li
					v-for="(begin, name) in steps"
					:key="name"
					:class="{ 'is-started': begin < new Date() }">
					<em>{{ begin | date | capitalize }}</em>
					<h4>{{ $t(`candidacy.steps.${name}.name`) }}</h4>
					<p>{{ $t(`candidacy.steps.${name}.description`) }}</p>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
import { candidacy } from '../config.yaml';

const { steps } = candidacy;

export default {
	name: 'Candidacy',
	filters: {
		date: epoch => new Date(epoch).toLocaleString('ca', { month: 'long', year: 'numeric' }),
		capitalize: text => text.charAt(0).toUpperCase() + text.slice(1),
	},
	data() {
		return { steps };
	},
};
</script>
