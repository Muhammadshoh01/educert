<template>
	<div class="card">
		<nuxt-link to="/courses/nodejs/32" class="card__img">
			<span class="badge top">TOP</span>
			<img src="~/public/img/card-photo.png" />
		</nuxt-link>
		<div class="card__body">
			<div class="ratings">
				<div class="average">4.5</div>
				<div class="stars">
					<img src="/img/star.svg" />
				</div>
				<div class="all">(1991)</div>
			</div>
			<nuxt-link to="/courses/nodejs/32" class="card__title">
				Zero dan Expertgacha Intensiv Python backend dasturlash
			</nuxt-link>
			<div class="card__info">
				<div class="items">
					<img src="~/public/img/document.svg" />
					<span>16 dars</span>
				</div>
				<div class="items">
					<img src="~/public/img/clock.svg" />
					<span>+4 soat</span>
				</div>
				<div class="items">
					<img src="~/public/img/bar-chart.svg" />
					<span>Boshlang'ich</span>
				</div>
			</div>
			<div class="line"></div>
			<div class="card__footer">
				<div class="card__user">
					<img src="~/public/img/user.png" />
					Sardor Komilov
				</div>
				<div class="card__price">700 ming so’m</div>
			</div>
		</div>
	</div>
</template>
<script setup></script>
<style lang="scss">
@import '~/public/styles/css/card.scss';
</style>
