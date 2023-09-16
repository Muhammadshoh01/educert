<template>
	<div class="partners">
		<div class="container partner">
			<img src="/img/logos/amazon.png" />
			<img src="/img/logos/amd-logo.png" />
			<img src="/img/logos/cisco.png" />
			<img src="/img/logos/dropcam.png" />
			<img src="/img/logos/logitech.png" />
			<img src="/img/logos/Spotify.png" />
		</div>
	</div>
</template>

<style lang="scss">
@import '~/public/styles/css/vars.scss';
.partners {
	background-color: $gray;
	padding: 39px 0;
	.partner {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
}
</style>
