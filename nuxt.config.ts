// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['nuxt-swiper', '@element-plus/nuxt', '@pinia/nuxt'],
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
	},
})
