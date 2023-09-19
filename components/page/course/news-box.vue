<template>
	<div class="xabar__box">
		<nuxt-link class="xabar__img" to="news/1">
			<img src="~/public/img/news-box.png" />
		</nuxt-link>
		<div class="xabar__body">
			<div class="xabar__head">
				<p>O’quv jarayon</p>
				<div class="xabar__date">12 mart 2023-yil</div>
			</div>
			<nuxt-link to="news/1" class="xabar__title">
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
				ligula
			</nuxt-link>
			<div class="xabar__text">
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
				ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
				dis parturient montes, nascetur ridiculus mus.
			</div>
			<nuxt-link to="news/1" class="more"> Batafsil </nuxt-link>
		</div>
	</div>
</template>
<script setup></script>
<style lang="scss"></style>
