<template>
	<div class="stats">
		<div class="container">
			<div class="stats__list">
				<div class="stats__item">
					<div class="stats__title">1,320+</div>
					<div class="stats__text">o’quvchilarimiz</div>
				</div>
				<div class="stats__item">
					<div class="stats__title">496,000+</div>
					<div class="stats__text">soat kurslar ko’rilgan</div>
				</div>
				<div class="stats__item">
					<div class="stats__title">19,000+</div>
					<div class="stats__text">Ijobiy izohlar</div>
				</div>
				<div class="stats__item">
					<div class="stats__title">120+</div>
					<div class="stats__text">Kurslarimiz</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup></script>
<style lang="scss">
@import '~/public/styles/css/vars.scss';
.stats {
	padding: 58px 0;
	background-color: #fefbf4;
	text-align: center;
	&__list {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 160px;
		.stats__title {
			color: $blue;
			font-family: 'gt-bold';
			font-size: 35px;
			font-weight: 700;
		}
		.stats__text {
			color: $violet;
			font-size: 15px;
			line-height: 26px; /* 173.333% */
		}
	}
}
</style>
