<template>
	<div>
		<ul class="pagination">
			<li>
				<button>
					<img src="~public/img/left.svg" />
				</button>
			</li>
			<li>
				<button>1</button>
			</li>
			<li>
				<button class="current">2</button>
			</li>
			<li>
				<button>3</button>
			</li>
			<li>
				<button>...</button>
			</li>
			<li>
				<button>67</button>
			</li>
			<li>
				<button>
					<img src="~public/img/right.svg" />
				</button>
			</li>
		</ul>
	</div>
</template>
<script></script>
<style lang="scss">
@import '~/public/styles/css/vars.scss';
.pagination {
	display: flex;
	align-items: center;
	justify-content: center;
	button {
		width: 37px;
		height: 37px;
		border-radius: 50%;
		border: unset;
		display: flex;
		align-items: center;
		justify-content: center;
		background: unset;
		font-size: 14px;
		color: $blue;
		font-family: 'gt-medium';
		font-weight: 500;
		&.current {
			color: $green;
			text-decoration: underline;
		}
		&:hover {
			background: $green;
			color: #fff;
		}
	}
	li:first-child,
	li:last-child {
		button {
			background-color: $green;
			margin-right: 25px;
			width: 37px;
			height: 37px;
		}
	}
	li:last-child {
		button {
			margin-right: unset;
			background-color: #e5f0fd;
			margin-left: 25px;
		}
	}
}
</style>
