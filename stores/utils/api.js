import axios from 'axios'
import { defineStore } from 'pinia'
import { useTokenStore } from './token'

export const useApiStore = defineStore('apistore', () => {
	const url = ref('http://95.130.227.52:3005')

	const router = useRouter()
	const tokenStore = useTokenStore()

	const postAxios = async (payload) => {
		return await axios
			.post(`${url.value}/${payload.url}`, payload.data, {
				headers: tokenStore.headerToken,
			})
			.catch((e) => {
				ElMessage.warning(e.response.data)
				if (e.response.status == 401) {
					router.push('/auth')
				}
			})
	}

	const getAxios = async (payload) => {
		return await axios
			.get(`${url.value}/${payload.url}`, {
				params: payload.search,
				headers: tokenStore.headerToken,
			})
			.catch((e) => {
				ElMessage.warning(e.response.message)
				if (e.response.status == 401) {
					router.push('/auth')
				}
			})
	}
	const putAxios = async (payload) => {
		return await axios
			.get(`${url.value}/${payload.url}`, payload.data, {
				headers: tokenStore.headerToken,
			})
			.catch((e) => {
				ElMessage.warning(e.response.message)
				if (e.response.status == 401) {
					router.push('/auth')
				}
			})
	}

	const deleteAxios = async (payload) => {
		return await axios
			.get(`${url.value}/${payload.url}`, {
				headers: tokenStore.headerToken,
			})
			.catch((e) => {
				ElMessage.warning(e.response.message)
				if (e.response.status == 401) {
					router.push('/auth')
				}
			})
	}

	return { url, postAxios, getAxios, putAxios, deleteAxios }
})
