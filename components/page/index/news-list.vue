<template>
	<div class="newslist">
		<div class="title">So’nggi yangiliklar</div>
		<p>Platformamiz olib borilayotgan faoliyatdan lavhalar</p>
		<div class="container">
			<div class="newslist__slider">
				<Swiper
					:modules="[SwiperAutoplay, SwiperEffectCreative]"
					:slides-per-view="4"
					:space-between="30"
					:loop="true"
					:autoplay="{
						delay: 4000,
						disableOnInteraction: true,
					}"
					:breakpoints="{
						1024: {
							slidesPerView: 3,
						},
						768: {
							slidesPerView: 2,
						},
					}"
				>
					<SwiperSlide v-for="slide in 10" :key="slide">
						<news />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	</div>
</template>
<script setup>
import news from '../course/news.vue'
</script>
<style lang="scss">
@import '~/public/styles/css/components/news.scss';
</style>
