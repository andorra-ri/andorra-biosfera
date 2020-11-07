<template>
	<section class="split candidacy">
		<header>
			<h2>{{ $t('candidacy.title') }}</h2>
			<p>{{ $t('candidacy.download_files') }}</p>
			<ul class="files">
				<li v-for="(path, name) in files" :key="name">
					<svg><use :xlink:href="`vectors/files.svg#${extension(path)}`" /></svg>
					<a :href="path" download>{{ $t(`candidacy.files.${name}`) }}</a>
				</li>
			</ul>
		</header>
		<div class="content">
			<div class="video video--16_9">
				<iframe :src="video" allowfullscreen="true" />
			</div>
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

const { video, steps, files } = candidacy;

export default {
	name: 'Candidacy',
	filters: {
		date: epoch => new Date(epoch).toLocaleString('ca', { month: 'long', year: 'numeric' }),
		capitalize: text => text.charAt(0).toUpperCase() + text.slice(1),
	},
	data() {
		return {
			steps,
			files,
			video,
		};
	},
	methods: {
		extension(path) {
			const extensions = ['pdf', 'xlsx', 'docx', 'pptx', 'zip'];
			const extension = path.substring(path.lastIndexOf('.') + 1);
			return extensions.includes(extension) ? extension : 'file';
		},
	},
};
</script>
