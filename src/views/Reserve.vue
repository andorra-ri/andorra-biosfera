<template>
	<section class="reserve">
		<i18n tag="p" class="big" path="reserve.description">
			<template #key_point>
				<strong>{{ $t('reserve.key_point') }}</strong>
			</template>
		</i18n>
		<p>{{ $t('reserve.functions') }}</p>
	</section>
</template>

<script>
export default {
	name: 'Reserve',
};
</script>
