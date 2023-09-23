<template>
	<div class="auth">
		<div class="auth__img">
			<nuxt-link to="/">
				<img src="~/public/img/logo_dark.png" />
			</nuxt-link>
		</div>
		<div class="auth__right">
			<div class="auth__form">
				<div class="title">Login</div>
				<p>
					Don't have an account <nuxt-link to="/">Sign up for free</nuxt-link>
				</p>
				<el-form
					ref="formRef"
					:model="user"
					label-position="top"
					:rules="rules"
				>
					<el-form-item label="Login" prop="login">
						<el-input v-model="user.login" />
					</el-form-item>
					<el-form-item label="Maxfiy kalit" prop="password">
						<el-input v-model="user.password" type="password" show-password />
					</el-form-item>
					<el-row>
						<el-col :span="12">
							<el-checkbox v-model="user.remember" label="Eslab qolish" />
						</el-col>
						<el-col :span="12" align="right">
							<nuxt-link class="forget" to="/"
								>Maxfiy kalitni unutdingizmi?</nuxt-link
							>
						</el-col>
					</el-row>

					<el-form-item>
						<el-button class="more green" @click="login(formRef)"
							>Tizimga kirish</el-button
						>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>
<script setup>
import { useUserStore } from '~/stores/auth/user.js'

definePageMeta({
	layout: 'auth',
})

const userStore = useUserStore()

const user = ref({})
const rules = ref({
	login: [{ required: true, message: 'Loginni kiriting', trigger: 'blur' }],
	password: [
		{ required: true, message: 'Maxfiy kalitni kiriting', trigger: 'blur' },
	],
})
const formRef = ref()

const login = async (formEl) => {
	if (!formEl) return
	await formEl.validate((valid, fields) => {
		if (valid) {
			userStore.login(user.value)
		} else {
			ElMessage.warning("Barcha maydonlarni to'ldiring")
		}
	})
}
</script>
<style lang="scss">
@import '~/public/styles/css/components/auth.scss';
</style>
