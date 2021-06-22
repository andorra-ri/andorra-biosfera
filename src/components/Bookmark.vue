<template>
	<a :href="href" target="blank" class="bookmark">
		<span>{{ $t('bookmark.contest') }}</span>
		<big>{{ $t('bookmark.logo') }}</big>
		<small>{{ $t('bookmark.join') }}</small>
	</a>
</template>

<script>
export default {
	name: 'Bookmark',
	props: ['href'],
};
</script>
