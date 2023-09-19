<template>
	<div>
		<breadcrumbs :links="links" />
		<div class="xabar">
			<div class="container">
				<div class="page__head">
					<div class="title">Yangiliklar</div>
					<p>EduCert platformasida ro’y berayotgan yangiliklar</p>
				</div>
				<div class="xabar__list" v-for="news in 4">
					<newsBox />
				</div>
				<pagination />
			</div>
		</div>
	</div>
</template>
<script setup>
import breadcrumbs from '~/components/page/index/breadcrumb.vue'
import newsBox from '~/components/page/course/news-box.vue'
import pagination from '~/components/page/index/pagination.vue'
const links = ref([
	{
		title: 'Yangiliklar',
		url: '/news',
	},
])
</script>
<style lang="scss">
@import '~/public/styles/css/components/news_page.scss';
</style>
