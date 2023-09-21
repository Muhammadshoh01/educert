<template>
	<div class="latest">
		<div>
			<img src="~/public/img/news-box.png" />
			<div class="latest__category">O’quvchilarimiz</div>
			<div class="latest__title">
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
			</div>
			<div class="latest__date">3 mart 2023-yil</div>
		</div>
	</div>
</template>
<script setup></script>
<style lang="scss">
@import '~/public/styles/css/vars.scss';
.latest {
	cursor: pointer;
	img {
		height: 250px;
		width: 100%;
		border-radius: 8px;
		object-fit: cover;
	}
	&__category {
		color: $green;
		font-family: 'gt-medium';
		font-size: 13px;
		font-weight: 500;
		padding: 12px 0 7px 0;
	}
	&__title {
		color: #242239;
		font-family: 'gt-medium';
		font-size: 17px;
		font-weight: 500;
		line-height: 26px;
		text-transform: capitalize;
	}
	&__date {
		color: $violet;
		font-size: 14px;
		padding-top: 7px;
	}
}
</style>
