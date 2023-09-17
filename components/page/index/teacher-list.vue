<template>
	<div class="teachers">
		<div class="container">
			<div class="row">
				<div class="col-7">
					<div>
						<div class="title mb-20">O’z ishining mutaxassis mentorlar</div>
						<p class="teachers__text">
							Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
							Felis donec massa aliquam id dolor .
						</p>
						<div>
							<NuxtLink to="/" class="more red">
								Barchasi
								<img src="~/public/img/send_red.svg" />
							</NuxtLink>
						</div>
					</div>
				</div>
				<div class="col-2"></div>
				<div class="col-15">
					<div class="teacher__slider">
						<Swiper
							:modules="[SwiperAutoplay, SwiperEffectCreative]"
							:slides-per-view="3"
							:space-between="60"
							:loop="true"
							:autoplay="{
								delay: 4000,
								disableOnInteraction: true,
							}"
						>
							<SwiperSlide v-for="slide in 10" :key="slide">
								<teacher />
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import teacher from '../course/teacher.vue'
</script>
<style lang="scss">
@import '~/public/styles/css/vars.scss';
.teachers {
	padding: 130px 0 120px 0;
	&__text {
		margin-bottom: 31px;
		color: $violet;
		font-size: 15px;
		line-height: 26px; /* 173.333% */
	}
	.more {
		margin-left: 0;
		&:hover {
			background-color: #e8543e;
			color: #fff;
			img {
				filter: brightness(0) invert(1);
			}
		}
	}
}
</style>
