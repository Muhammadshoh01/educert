import { defineStore } from 'pinia'
export const useTokenStore = defineStore('tokenStore', () => {
	const headerToken = ref({})
	const token = useCookie('token')
	token.value = token.value || ''

	const setToken = (payload) => {
		token.value = payload
		headerToken.value = {
			authorization: `Bearer ${token.value}`,
		}
	}

	return { token, headerToken, setToken }
})
