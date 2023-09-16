<template>
	<div class="category">
		<div class="container">
			<div class="title mb-50 text-center">Trenddagi turkumlar</div>
			<div class="row">
				<div class="col-6 mb-30" v-for="cat in 8">
					<div class="category-box">
						<div class="category-img">
							<img src="/img/category-1.png" />
						</div>
						<div class="category-data">
							<div class="category-title">Marketing</div>
							<div class="category-stat">573+ kurslar</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup></script>
<style lang="scss">
@import '~/public/styles/css/vars.scss';
.category {
	padding: 89px 0 120px 0;
	&-box {
		border-radius: 8px;
		border: 1px solid #ededed;
		background: #fff;
		display: flex;
		align-items: center;
		gap: 20px;
		cursor: pointer;
		&:hover {
			.category-img {
				background-color: $green;
				img {
					filter: brightness(0) invert(1);
				}
			}
			.category-title {
				color: $green;
			}
		}
		.category-img {
			margin: 10px;
			width: 80px;
			height: 80px;
			border-radius: 50%;
			background-color: #eef2f6;

			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	&-title {
		font-size: 17px;
		font-family: 'gt-medium';
		line-height: 26px;
		text-transform: capitalize;
		color: $blue;
	}
	&-stat {
		font-size: 13px;
		color: $violet;
	}
}
</style>
