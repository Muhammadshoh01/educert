<template>
	<div>
		<headerPart />

		<NuxtPage />

		<footerPart />
	</div>
</template>

<script setup>
import headerPart from './components/header.vue'
import footerPart from './components/footer.vue'
</script>

<style lang="scss">
@import '/public/styles/css/main.scss';
</style>
