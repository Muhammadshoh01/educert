<template>
	<div class="quote__list">
		<div class="title quote__title">EduCert haqida bitiruvchilarimiz</div>
		<div class="quote__listtext">
			1230+ ortiq muvaffaqiyatli yakunlagan o’quvchilarimiz
		</div>
		<div class="quote__slider">
			<Swiper
				:modules="[SwiperAutoplay, SwiperEffectCreative]"
				:slides-per-view="4"
				:space-between="30"
				:loop="true"
				:autoplay="{
					delay: 4000,
					disableOnInteraction: true,
				}"
			>
				<SwiperSlide v-for="slide in 10" :key="slide">
					<quoteVue />
				</SwiperSlide>
			</Swiper>
		</div>
	</div>
</template>
<script setup>
import quoteVue from '../course/quote.vue'
</script>
<style lang="scss">
@import '~/public/styles/css/vars.scss';
.quote__list {
	background-color: $blue;
	padding: 120px 0;
	text-align: center;
	overflow: hidden;

	.quote__title {
		color: #fff;
	}
	.quote__listtext {
		color: #fff;
		margin: 10px 0 60px 0;
	}
	.quote__slider {
		margin-left: -330px;
		margin-right: -330px;
	}
}
</style>
