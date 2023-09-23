<template>
	<div class="common-layout">
		<el-container>
			<el-header>
				<headerPart />
			</el-header>
			<el-container>
				<el-aside width="200px">Aside</el-aside>
				<el-main>
					<NuxtPage />
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script setup>
import headerPart from '~/components/admin/headerPart.vue'
</script>
<style lang="scss">
.el-header {
	padding: 0;
	height: unset;
}
</style>
