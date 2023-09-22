<template>
	<header>
		<nuxt-link to="/" class="logo">
			<img src="/img/logo.png" />
		</nuxt-link>
		<div class="menu" @click="menu__toggle = !menu__toggle">
			<span></span>
		</div>
		<ul :class="`links ${menu__toggle ? 'active' : ''}`">
			<li>
				<nuxt-link to="/">Bosh sahifa</nuxt-link>
			</li>
			<li>
				<nuxt-link to="/">Biz haqimizda</nuxt-link>
			</li>
			<li>
				<nuxt-link to="/courses">Kurslar</nuxt-link>
			</li>
			<li>
				<nuxt-link to="/">Hamkorlar</nuxt-link>
			</li>
			<li>
				<nuxt-link to="/">Mijozlar</nuxt-link>
			</li>
			<li>
				<nuxt-link to="/news">Yangiliklar</nuxt-link>
			</li>
			<li>
				<nuxt-link to="/contact">Aloqa</nuxt-link>
			</li>
		</ul>

		<button class="search" @click="searchToggle = !searchToggle">
			<img src="/img/search-icon.png" />
		</button>
		<div
			:class="`lang ${language__toggle ? 'open' : ''}`"
			@mouseenter="language__toggle = true"
			@mouseleave="language__toggle = false"
		>
			<div class="current">
				<img src="/img/global-search.svg" />
				{{ langs[current_lang].title }}
			</div>
			<ul class="list">
				<li
					v-for="(lang, index) in langs"
					:key="index"
					@click="current_lang = index"
				>
					{{ lang.title }}
				</li>
			</ul>
		</div>
		<div class="search__content" v-if="searchToggle == true">
			<form>
				<input class="result" type="text" placeholder="Qidiruv..." />
				<ul>
					<li>
						<nuxt-link>
							Nodejs kursi
							<span>750 000 so'm</span>
						</nuxt-link>
					</li>
					<li>
						<nuxt-link>
							Nodejs kursi
							<span>750 000 so'm</span>
						</nuxt-link>
					</li>
					<li>
						<nuxt-link>
							Nodejs kursi
							<span>750 000 so'm</span>
						</nuxt-link>
					</li>
					<li>
						<nuxt-link>
							Nodejs kursi
							<span>750 000 so'm</span>
						</nuxt-link>
					</li>
				</ul>
			</form>
			<div class="search__close" @click="searchToggle = false"></div>
		</div>
		<div>
			<nuxt-link to="/auth" class="login">Kirish</nuxt-link>
		</div>
	</header>
</template>

<script lang="ts" setup>
const searchToggle = ref(false)
const langs = ref([
	{
		title: "O'zbekcha",
		slug: 'uz',
	},
	{
		title: 'Русский',
		slug: 'ru',
	},
	{
		title: 'English',
		slug: 'en',
	},
])

const current_lang = ref(0)
const language__toggle = ref(false)
const menu__toggle = ref(false)
</script>

<style lang="scss">
@import '../public/styles/css/header.scss';
</style>
