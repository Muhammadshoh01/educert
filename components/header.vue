<template>
	<header>
		<nuxt-link to="/" class="logo">
			<img src="/img/logo.png" />
		</nuxt-link>
		<ul class="links">
			<li>
				<nuxt-link to="/">Bosh sahifa</nuxt-link>
			</li>
			<li>
				<nuxt-link to="/">Biz haqimizda</nuxt-link>
			</li>
			<li>
				<nuxt-link to="/">Kurslar</nuxt-link>
			</li>
			<li>
				<nuxt-link to="/">Hamkorlar</nuxt-link>
			</li>
			<li>
				<nuxt-link to="/">Mijozlar</nuxt-link>
			</li>
			<li>
				<nuxt-link to="/">Yangiliklar</nuxt-link>
			</li>
			<li>
				<nuxt-link to="/">Aloqa</nuxt-link>
			</li>
		</ul>

		<button class="search">
			<img src="/img/search-icon.png" />
		</button>
		<div class="lang">
			<div class="current"><img src="/img/global-search.svg" /> O'zbekcha</div>
			<ul class="list">
				<li>Русский</li>
				<li>English</li>
			</ul>
		</div>
		<div>
			<nuxt-link to="/" class="login">Kirish</nuxt-link>
		</div>
	</header>
</template>

<style lang="scss">
@import '../public/styles/css/header.scss';
</style>
