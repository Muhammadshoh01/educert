<template>
	<div class="courses">
		<breadcrumb :links="links" class="mb-90" />
		<div class="kurs">
			<div class="container">
				<div class="row">
					<div class="col-12 kurs__info">
						<span class="badge top">TOP</span>
						<h3>VueJS Frontend Dasturchi - 0 dan Ekspert gacha</h3>
						<p>
							Kursda VueJS freymvorkida UI interfeyslar yaratish hamda logistik
							hisob-kitobli tizimlarni yasashni o’rganasiz
						</p>
						<div class="kurs__stat">
							<div class="ratings">
								<div class="average">4.5</div>
								<div class="stars">
									<img src="/img/star_one.svg" />
									<img src="/img/star_one.svg" />
									<img src="/img/star_one.svg" />
									<img src="/img/star_one.svg" />
									<img src="/img/star_one.svg" />
								</div>
								<div class="all">(1991)</div>
							</div>
							<div class="stat">
								<img src="~/public/img/student_online.svg" />
								<h6>853 o’quvchi kursni yakunladi</h6>
							</div>
							<div class="stat">
								<img src="~/public/img/clock.svg" />
								<h6>11/2022 da yangilangan</h6>
							</div>
						</div>
						<div class="kurs__user">
							<img src="~/public/img/quote-user.png" />
							<h4>Alimov Kamol</h4>
						</div>
					</div>
				</div>
				<div class="kurs__right">
					<div class="video">
						<img src="~/public/img/video.png" />
					</div>
					<div class="video-center">
						<img src="~/public/img/play-btn.svg" />
					</div>
					<div class="kurs__data">
						<div class="kurs__price mb-30">
							<div class="kurs__newprice">700 ming so’m</div>
							<div class="kurs__oldprice">980 ming so’m</div>
						</div>
						<button class="more green">Kursni boshlash</button>
						<ul>
							<li>
								<img src="~/public/img/video-file.svg" />
								<p>Darslar</p>
								<span>20 ta</span>
							</li>
							<li>
								<img src="~/public/img/puzzle.svg" />
								<p>Topshiriqlar</p>
								<span>3 ta</span>
							</li>
							<li>
								<img src="~/public/img/clock.svg" />
								<p>Davomiyligi</p>
								<span>13 soat</span>
							</li>
							<li>
								<img src="~/public/img/bar-chart.svg" />
								<p>Darajaviyligi</p>
								<span>Chuqurlashtirilgan</span>
							</li>
							<li>
								<img src="~/public/img/translate.svg" />
								<p>Til</p>
								<span>O’zbekcha</span>
							</li>
							<li>
								<img src="~/public/img/badge.svg" />
								<p>Sertifikat</p>
								<span>Ha</span>
							</li>
							<li>
								<img src="~/public/img/infinity.svg" />
								<p>Kursga murojat</p>
								<span>Ha</span>
							</li>
						</ul>
						<div class="social__links">
							<a href="/">
								<img src="~/public/img/facebook.svg" />
							</a>
							<a href="/">
								<img src="~/public/img/telegram.svg" />
							</a>
							<a href="/">
								<img src="~/public/img/instagram.svg" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="kurs__body">
			<div class="container">
				<div class="row">
					<div class="col-16">
						<div class="kurs__tabs">
							<div
								:class="`kurs__tab ${tab == 'kurs-haqida' ? 'active' : ''}`"
								@click="tab = 'kurs-haqida'"
							>
								Kurs haqida
							</div>
							<div
								:class="`kurs__tab ${tab == 'mundarija' ? 'active' : ''}`"
								@click="tab = 'mundarija'"
							>
								Mundarija
							</div>
							<div
								:class="`kurs__tab ${tab == 'mentorlar' ? 'active' : ''}`"
								@click="tab = 'mentorlar'"
							>
								Mentorlar
							</div>
							<div
								:class="`kurs__tab ${tab == 'izohlar' ? 'active' : ''}`"
								@click="tab = 'izohlar'"
							>
								Izohlar
							</div>
						</div>
						<div class="kurs__about" v-if="tab == 'kurs-haqida'">
							<h2>Kurs haqida</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
								commodo ligula eget dolor. Aenean massa. Cum sociis natoque
								penatibus et magnis dis parturient montes, nascetur ridiculus
								mus.
							</p>
							<p>
								Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
								sem. Nulla consequat massa quis enim. Donec pede justo,
								fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
								rhoncus ut, imperdiet a, venenatis vitae, justo.
							</p>
							<p>
								Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
								Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
								eleifend tellus. Aenean leo ligula, porttitor eu, consequat
								vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
								viverra quis, feugiat a, tellus. Lorem ipsum dolor sit amet,
								consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
								Aenean massa. Cum sociis natoque penatibus et magnis dis
								parturient montes, nascetur ridiculus mus.
							</p>
							<p>
								Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
								sem. Nulla consequat massa quis enim. Donec pede justo,
								fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
								rhoncus ut, imperdiet a, venenatis vitae, justo.
							</p>
							<h2>Kurs orqali siz:</h2>
							<ul class="check mb-60">
								<li>HTML teglari bilan ishlash</li>
								<li>HTML teglari bilan ishlash</li>
								<li>HTML teglari bilan ishlash</li>
								<li>HTML teglari bilan ishlash</li>
								<li>HTML teglari bilan ishlash</li>
								<li>HTML teglari bilan ishlash</li>
								<li>HTML teglari bilan ishlash</li>
								<li>HTML teglari bilan ishlash</li>
								<li>HTML teglari bilan ishlash</li>
								<li>HTML teglari bilan ishlash</li>
								<li>HTML teglari bilan ishlash</li>
								<li>HTML teglari bilan ishlash</li>
							</ul>
							<h2>Talablar</h2>
							<ul class="radio">
								<li>Kompyuter boshlangich savodxonligi</li>
								<li>Kompyuter boshlangich savodxonligi</li>
								<li>Kompyuter boshlangich savodxonligi</li>
							</ul>
						</div>
						<div class="kurs__content" v-if="tab == 'mundarija'">
							<div class="head">
								<h3 class="head__title">Kurs mundarijasi</h3>
								<div class="head__length">
									<span>27 bo’limlar • 95 darslar</span>
									<span class="open">Barcha bo’limlarni ochish</span>
								</div>
							</div>
							<div
								:class="`collapse  ${collapse == index ? 'open' : ''}`"
								v-for="(item, index) in 8"
							>
								<div
									class="collapse__head"
									@click="collapse = collapse == index ? -1 : index"
								>
									<div>
										<img src="~/public/img/up.svg" />
										<p>JavaScript dasturlash tili</p>
									</div>
									<span>5 dars • 87 minut</span>
								</div>
								<div class="collapse__body">
									<ul>
										<li>
											<nuxt-link to="/" class="icon">
												<img src="~/public/img/video-play.svg" />
												Lorem ipsum dolor sit amet, consectetuer adipiscing
												elit.
											</nuxt-link>
											<span>
												<nuxt-link to="/" class="link green"
													>Tanishish</nuxt-link
												>
												<nuxt-link to="/" class="link black"
													>5 topshiriq</nuxt-link
												>
												<nuxt-link to="/" class="link time">03:56</nuxt-link>
											</span>
										</li>
										<li>
											<nuxt-link to="/" class="icon">
												<img src="~/public/img/video-doc.svg" />
												Loyiha: Topshiriqlar boshqaruvi
											</nuxt-link>
											<span>
												<nuxt-link to="/" class="link time">03:56</nuxt-link>
											</span>
										</li>
										<li>
											<nuxt-link to="/" class="icon">
												<img src="~/public/img/video-lock.svg" />
												Githubga loyihalarni yuklash
											</nuxt-link>
											<span>
												<nuxt-link to="/" class="link time">03:56</nuxt-link>
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="kurs__mentor" v-if="tab == 'mentorlar'">
							<h3>Mentor</h3>
							<div class="mentor__info">
								<div class="mentor__photo">
									<img src="~/public/img/mentor.png" />
								</div>
								<div>
									<h4>Farhodova Aziza</h4>
									<h5>Senior Frontend dasturchi</h5>
									<div class="mentor__stat">
										<div class="item">
											<img src="~/public/img/star_one.svg" />
											<span class="rate">4.5</span>
										</div>
										<div class="item">
											<img src="~/public/img/comment.svg" />
											<span>23,987 izohlar</span>
										</div>
										<div class="item">
											<img src="~/public/img/student.svg" />
											<span>692 o’quvchilari</span>
										</div>
										<div class="item">
											<img src="~/public/img/play.svg" />
											<span>15 Course</span>
										</div>
									</div>
								</div>
							</div>
							<p class="mb-30">
								Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
								Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
								eleifend tellus. Aenean leo ligula, porttitor eu, consequat
								vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
								viverra quis, feugiat a, tellus.
							</p>
							<p>
								Maecenas tempus, tellus eget condimentum rhoncus, sem quam
								semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam
								nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
								Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
								ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet
								orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
								mauris sit amet nibh. Donec sodales sagittis magna. Sed
								consequat, leo eget bibendum sodales, augue velit cursus nunc,
							</p>
						</div>
						<div class="kurs__comment" v-if="tab == 'izohlar'">
							<h3>Talabalar baholari</h3>
							<div class="comment__all">
								<div class="comment__left">
									<span>4.8</span>
									<div class="stars">
										<img src="~/public/img/star_one.svg" />
										<img src="~/public/img/star_one.svg" />
										<img src="~/public/img/star_one.svg" />
										<img src="~/public/img/star_one.svg" />
										<img src="~/public/img/star_one.svg" />
									</div>
									<p>Kurs bahosi</p>
								</div>
								<div class="comment__right">
									<div class="item">
										<div class="progress">
											<span style="width: 70%"></span>
										</div>
										<div class="stars">
											<img src="~/public/img/star_one.svg" />
											<img src="~/public/img/star_one.svg" />
											<img src="~/public/img/star_one.svg" />
											<img src="~/public/img/star_one.svg" />
											<img src="~/public/img/star_one.svg" />
										</div>
										<div class="percent">70%</div>
									</div>
									<div class="item">
										<div class="progress">
											<span style="width: 40%"></span>
										</div>
										<div class="stars">
											<img src="~/public/img/star_one.svg" />
											<img src="~/public/img/star_one.svg" />
											<img src="~/public/img/star_one.svg" />
											<img src="~/public/img/star_one.svg" />
											<img src="~/public/img/star_one.svg" />
										</div>
										<div class="percent">70%</div>
									</div>
									<div class="item">
										<div class="progress">
											<span style="width: 20%"></span>
										</div>
										<div class="stars">
											<img src="~/public/img/star_one.svg" />
											<img src="~/public/img/star_one.svg" />
											<img src="~/public/img/star_one.svg" />
											<img src="~/public/img/star_one.svg" />
											<img src="~/public/img/star_one.svg" />
										</div>
										<div class="percent">70%</div>
									</div>
									<div class="item">
										<div class="progress">
											<span style="width: 5%"></span>
										</div>
										<div class="stars">
											<img src="~/public/img/star_one.svg" />
											<img src="~/public/img/star_one.svg" />
											<img src="~/public/img/star_one.svg" />
											<img src="~/public/img/star_one.svg" />
											<img src="~/public/img/star_one.svg" />
										</div>
										<div class="percent">70%</div>
									</div>
									<div class="item">
										<div class="progress">
											<span style="width: 15%"></span>
										</div>
										<div class="stars">
											<img src="~/public/img/star_one.svg" />
											<img src="~/public/img/star_one.svg" />
											<img src="~/public/img/star_one.svg" />
											<img src="~/public/img/star_one.svg" />
											<img src="~/public/img/star_one.svg" />
										</div>
										<div class="percent">70%</div>
									</div>
								</div>
							</div>
							<h3>Izohlar</h3>
							<div class="review__container">
								<div class="review" v-for="comment in 3">
									<div class="review__user">A.T</div>
									<div>
										<div class="review__head">
											<h5>Aliev Tohir</h5>
											<div class="date">3/03/23 12:05</div>
										</div>
										<div class="stars">
											<img src="~/public/img/star_one.svg" />
											<img src="~/public/img/star_one.svg" />
											<img src="~/public/img/star_one.svg" />
											<img src="~/public/img/star_one.svg" />
											<img src="~/public/img/star_one.svg" />
										</div>
										<div class="review__title">Eng zo’r frontend kursi</div>
										<div class="review__text">
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
											natoque penatibus et magnis dis parturient montes,
											nascetur ridiculus mus.
										</div>
									</div>
								</div>
							</div>
							<div class="more_comment">
								<button>Barcha izohlar</button>
							</div>
							<h3>Izoh yozmoqchimisiz?</h3>
							<div class="kurs__form">
								<div class="item">
									<p>Bu kurs qancha ma’qul bo’ldi?</p>
									<div class="stars">
										<img
											:class="`${index <= img_count ? 'active' : ''}`"
											src="~/public/img/star_one.svg"
											v-for="(image, index) in 5"
											@click="img_count = index"
											:key="index"
										/>
									</div>
								</div>
								<div class="item">
									<p>Izoh sarlavhasi</p>
									<input type="text" placeholder="Judayam ajoyib" />
								</div>
								<div class="item">
									<p>Izoh matni</p>
									<textarea
										cols="30"
										rows="10"
										placeholder="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
									></textarea>
								</div>
								<button class="more green">Izohni jo’natish</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="kurs__others">
				<div class="title">Sizga ma’qul bo’lishi mumkin</div>
				<p class="mb-30">10,000 soatdan ortiq samarali kurslar</p>
				<div class="kurs__slider">
					<Swiper
						:modules="[SwiperAutoplay, SwiperEffectCreative]"
						:slides-per-view="4"
						:space-between="35"
						:loop="true"
						:autoplay="{
							delay: 4000,
							disableOnInteraction: true,
						}"
					>
						<SwiperSlide v-for="slide in 10" :key="slide">
							<cardVue class="small" />
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import breadcrumb from '~/components/page/index/breadcrumb.vue'
import cardVue from '~/components/page/course/card.vue'
import { ref } from 'vue'

const route = useRoute()
console.log(route.params.slug)

const tab = ref('kurs-haqida')
const collapse = ref(0)
const img_count = ref(0)

const links = ref([
	{
		title: 'courses',
		url: '/courses',
	},
	{
		title: 'Nodejs ',
		url: `/courses/nodejs`,
	},
	{
		title: route.params.slug,
		url: `/courses/nodejs/${route.params.slug}`,
	},
])
</script>
<style lang="scss">
@import '~/public/styles/css/courses/onecourse.scss';
</style>
