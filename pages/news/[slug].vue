<template>
	<div>
		<breadcrumbs :links="links" />
		<div class="newsOne">
			<div class="container">
				<div class="page__head small">
					<div class="title text-center">
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
					</div>
					<p class="text-center">3 mart 2023-yil</p>
				</div>
				<div class="newsOne__img">
					<img src="~/public/img/news-box.png" />
				</div>
				<div class="newsOne__news">
					<h6>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h6>
					<p>
						Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
						libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
						blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio
						et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
						faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus
						tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
						sodales sagittis magna. Sed consequat, leo eget bibendum sodales,
						augue velit cursus nunc,
					</p>
					<ul>
						<li>
							Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
						</li>
						<li>At urna condimentum mattis pellentesque id nibh.</li>
						<li>
							Laoreet non curabitur Magna etiam tempor orci eu lobortis
							elementum.
						</li>
						<li>
							Bibendum est ultricies integer quis. Semper eget duis at tellus.
						</li>
					</ul>
					<div class="newsOne__quote">
						<img src="~/public/img/quote-white.svg" />
						<blockquote>
							“Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
							Diam phasellus vestibulum lorem sed risus ultricies. Magna sit
							amet purus gravida quis blandit. Arcu cursus vitae congue mauris.“
						</blockquote>
					</div>
					<p class="mb-30">
						Donec purus posuere nullam lacus aliquam egestas arcu. A egestas a,
						tellus massa, ornare vulputate. Erat enim eget laoreet ullamcorper
						lectus aliquet nullam tempus id. Dignissim convallis quam aliquam
						rhoncus, lectus nullam viverra. Bibendum dignissim tortor, phasellus
						pellentesque commodo, turpis vel eu. Donec consectetur ipsum nibh
						lobortis elementum mus velit tincidunt elementum. Ridiculus eu
						convallis eu mattis iaculis et, in dolor. Sem libero, tortor
						suspendisse et, purus euismod posuere sit. Risus dui ut viverra
						venenatis ipsum tincidunt non, proin. Euismod pharetra sit ac nisi.
						Erat lacus, amet quisque urna faucibus. Rhoncus praesent faucibus
						rhoncus nec adipiscing tristique sed facilisis velit.
					</p>
					<p>
						Neque nulla porta ut urna rutrum. Aliquam cursus arcu tincidunt mus
						dictum sit euismod cum id. Dictum integer ultricies arcu fermentum
						fermentum sem consectetur. Consectetur eleifend aenean eu neque
						euismod amet parturient turpis vitae. Faucibus ipsum felis et duis
						fames.
					</p>

					<div class="row">
						<div class="col-9">
							<img src="~/public/img/news-box.png" />
							<p>Donec purus posuere nullam lacus aliquam.</p>
						</div>
						<div class="col-9">
							<img src="~/public/img/news-box.png" />
							<p>Donec purus posuere nullam lacus aliquam.</p>
						</div>
					</div>
					<p class="mt-30 mb-30">
						Donec purus posuere nullam lacus aliquam egestas arcu. A egestas a,
						tellus massa, ornare vulputate. Erat enim eget laoreet ullamcorper
						lectus aliquet nullam tempus id. Dignissim convallis quam aliquam
						rhoncus, lectus nullam viverra. Bibendum dignissim tortor, phasellus
						pellentesque commodo, turpis vel eu. Donec consectetur ipsum nibh
						lobortis elementum mus velit tincidunt elementum. Ridiculus eu
						convallis eu mattis iaculis et, in dolor. Sem libero, tortor
						suspendisse et, purus euismod posuere sit. Risus dui ut viverra
						venenatis ipsum tincidunt non, proin. Euismod pharetra sit ac nisi.
						Erat lacus, amet quisque urna faucibus. Rhoncus praesent faucibus
						rhoncus nec adipiscing tristique sed facilisis velit.
					</p>
					<p>
						Neque nulla porta ut urna rutrum. Aliquam cursus arcu tincidunt mus
						dictum sit euismod cum id. Dictum integer ultricies arcu fermentum
						fermentum sem consectetur. Consectetur eleifend aenean eu neque
						euismod amet parturient turpis vitae. Faucibus ipsum felis et duis
						fames.
					</p>
					<div class="social">
						<div class="social__title">Ijtimoiy sahifalarimizda kuzating</div>
						<div class="social__links">
							<a href="/">
								<img src="~/public/img/facebook.svg" />
							</a>
							<a href="/">
								<img src="~/public/img/telegram.svg" />
							</a>
							<a href="/">
								<img src="~/public/img/instagram.svg" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import breadcrumbs from '~/components/page/index/breadcrumb.vue'

const links = ref([
	{
		title: 'Yangiliklar',
		url: '/news',
	},
])
</script>
<style lang="scss">
@import '~/public/styles/css/components/newsOne.scss';
</style>
