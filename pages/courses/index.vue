<template>
	<breadcrumb :links="links" />
</template>
<script setup>
import breadcrumb from '~/components/page/index/breadcrumb.vue'
import { ref } from 'vue'

const route = useRoute()
console.log(route.params.slug)

const links = ref([
	{
		title: 'courses',
		url: '/courses',
	},
])
</script>
<style lang="scss"></style>
