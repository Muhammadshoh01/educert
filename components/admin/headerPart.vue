<template>
	<header class="header">
		<button>
			<img src="/img/admin/sidebar.svg" class="admin__logo" />
		</button>
		<nuxt-link to="/admin">
			<img src="/img/logo.png" />
		</nuxt-link>
		<div class="header__right">
			<button>
				<img src="/img/admin/dark.svg" />
			</button>
			<button>
				<img src="/img/admin/full.svg" />
			</button>
			<button>
				<img src="/img/admin/email.svg" />
			</button>
			<button>
				<img src="/img/admin/notification.svg" />
			</button>
			<nuxt-link to="/admin">
				<img src="/img/admin/user.png" />
			</nuxt-link>
		</div>
	</header>
</template>
<script setup></script>
<style lang="scss" scoped>
.header {
	&.admin__logo {
		height: 46px;
		margin-right: 0;
	}
	width: 100%;
	// height: auto;
	padding: 23px 30px;
	display: flex;
	align-items: center;
	gap: 27px;
	button {
		background: unset;
		border: none;
	}
	&__right {
		margin-left: auto;
		display: flex;
		gap: 20px;
		align-items: center;
		button {
			width: 50px;
			height: 50px;
			border-radius: 16px;
			display: flex;
			align-items: center;
			justify-content: center;
			&:hover {
				background-color: #f7f8fb;
			}
		}
	}
}
</style>
