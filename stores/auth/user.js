import { defineStore } from 'pinia'
import { useApiStore } from '../utils/api'
import { useTokenStore } from '../utils/token'

export const useUserStore = defineStore('userStore', () => {
	const user = useCookie('educert-user')
	user.value = user.value || ''

	const apistore = useApiStore()
	const tokenStore = useTokenStore()
	const router = useRouter()

	const login = async (payload) => {
		let res = await apistore.postAxios({
			url: 'auth/login',
			data: payload,
		})
		if (res.status == 200) {
			user.value = res.data.user
			tokenStore.setToken(res.data.token)
			router.push('/admin')
		}
		console.log(res.data)
	}

	return { user, login }
})
