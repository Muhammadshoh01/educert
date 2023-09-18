<template>
	<div class="breadcrumb">
		<div class="container">
			<ul>
				<li>
					<NuxtLink to="/">Bosh sahifa</NuxtLink>
				</li>
				<li v-for="link in links">
					<NuxtLink :to="link.url">{{ link.title }}</NuxtLink>
				</li>
			</ul>
		</div>
	</div>
</template>
<script setup>
defineProps(['links'])
</script>
<style lang="scss">
.breadcrumb {
	background: #f5f7fe;
	padding: 17px 0;
	ul {
		display: flex;
		gap: 23px;
		align-items: center;
		li {
			& + li {
				// position: relative;
				&::before {
					content: '';
					display: inline-block;
					width: 4px;
					height: 4px;
					border-radius: 50%;
					background-color: #6a7a99;
					position: relative;
					left: -10px;
				}
			}
			a {
				color: #4f547b;
				font-size: 13px;
				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
}
</style>
