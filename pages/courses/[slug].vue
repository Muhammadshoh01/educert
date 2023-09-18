<template>
	<div class="courses">
		<breadcrumb :links="links" />
		<div class="container">
			<div class="courses__head">
				<div class="title">Veb dasturlash kurslari</div>
				<p>Veb dasturlashni eng muhim tomonlarini o’rgatuvchi kurslar</p>
			</div>
			<div class="row">
				<div class="col-6"></div>
				<div class="col-18">
					<div class="courses__catalog">
						<div class="courses__number">
							<div>Umumiy kurslar <span>250</span> ta</div>
						</div>
						<div class="courses__sort">
							<span>Tartiblash</span>
							<select>
								<option value="">Eng ommabop</option>
							</select>
						</div>
					</div>
					<div class="row">
						<div class="col-8" v-for="card in 12">
							<card class="small" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import breadcrumb from '~/components/page/index/breadcrumb.vue'
import card from '~/components/page/course/card.vue'
import { ref } from 'vue'

const route = useRoute()
console.log(route.params.slug)

const links = ref([
	{
		title: 'courses',
		url: '/courses',
	},
	{
		title: route.params.slug,
		url: `/courses/${route.params.slug}`,
	},
])
</script>
<style lang="scss">
@import '~/public/styles/css/courses/courses.scss';
</style>
