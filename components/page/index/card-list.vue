<template>
	<section class="card__full">
		<div class="card__list">
			<div class="title text-center">Eng mashhur kurslarimiz</div>
			<p class="text-center mb-50">10,000+ soatga ega kurslarimiz</p>
		</div>
		<div class="card__slider">
			<Swiper
				:modules="[SwiperAutoplay, SwiperEffectCreative]"
				:slides-per-view="4"
				:space-between="50"
				:loop="true"
				:autoplay="{
					delay: 4000,
					disableOnInteraction: true,
				}"
			>
				<SwiperSlide v-for="slide in 10" :key="slide">
					<cardVue />
				</SwiperSlide>
			</Swiper>
		</div>
		<div class="text-center card__btn">
			<NuxtLink to="/" class="more">
				Barcha kurslarimiz
				<img src="~/public/img/send.svg" />
			</NuxtLink>
		</div>
	</section>
</template>
<script setup>
import cardVue from '../course/card.vue'
</script>
<style lang="scss">
.card__full {
	background-color: #eef2f6;
	padding: 120px 0;
	overflow: hidden;

	// display: flex;
	// flex-direction: column;
}
.card__slider {
	margin-left: -150px;
	margin-right: -150px;
}
.card__btn {
	margin-top: 60px;
}
</style>
