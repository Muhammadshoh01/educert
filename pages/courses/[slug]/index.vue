<template>
	<div class="courses">
		<breadcrumb :links="links" />
		<div class="container">
			<div class="page__head">
				<div class="title">Veb dasturlash kurslari</div>
				<p>Veb dasturlashni eng muhim tomonlarini o’rgatuvchi kurslar</p>
			</div>
			<div class="row">
				<div class="col-6">
					<div class="courses__filter">
						<div :class="`filter ${toggle ? 'open' : ''}`">
							<div class="filter__title" @click="toggle = !toggle">Turkum</div>
							<div :class="`filter__body`">
								<div class="filter__item">
									<input type="checkbox" id="turkum-1" />
									<label for="turkum-1" class="checkbox">
										<div class="value">Python</div>
										<p class="count">(18)</p>
									</label>
								</div>
								<div class="filter__item">
									<input type="checkbox" id="turkum-2" />
									<label for="turkum-2" class="checkbox">
										<div class="value">Python</div>
										<p class="count">(18)</p>
									</label>
								</div>
								<div class="filter__item">
									<input type="checkbox" id="turkum-3" />
									<label for="turkum-3" class="checkbox">
										<div class="value">Python</div>
										<p class="count">(18)</p>
									</label>
								</div>
								<div class="filter__item">
									<input type="checkbox" id="turkum-4" />
									<label for="turkum-4" class="checkbox">
										<div class="value">Python</div>
										<p class="count">(18)</p>
									</label>
								</div>
							</div>
						</div>

						<div :class="`filter ${toggle ? 'open' : ''}`">
							<div class="filter__title" @click="toggle = !toggle">Narxlar</div>
							<div :class="`filter__body`">
								<div class="filter__item">
									<input type="radio" id="turkum-11" name="turkum" />
									<label for="turkum-11" class="radio">
										<div class="value">Barchasi</div>
										<p class="count">(18)</p>
									</label>
								</div>
								<div class="filter__item">
									<input type="radio" id="turkum-22" name="turkum" />
									<label for="turkum-22" class="radio">
										<div class="value">Bepul</div>
										<p class="count">(18)</p>
									</label>
								</div>
								<div class="filter__item">
									<input type="radio" id="turkum-33" name="turkum" />
									<label for="turkum-33" class="radio">
										<div class="value">Pullik</div>
										<p class="count">(18)</p>
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
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
						<div class="col-8 col-md-12" v-for="card in 12">
							<card class="small" />
						</div>
					</div>
					<pagination />
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import breadcrumb from '~/components/page/index/breadcrumb.vue'
import pagination from '~/components/page/index/pagination.vue'
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

const toggle = ref(true)
</script>
<style lang="scss">
@import '~/public/styles/css/courses/courses.scss';
</style>
