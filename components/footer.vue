<template>
	<div class="footer">
		<div class="top">
			<div class="container">
				<div class="footer__logo">
					<NuxtLink to="/">
						<img src="~/public/img/logo_dark.png" />
					</NuxtLink>
				</div>
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
		<div class="center container">
			<div class="items">
				<div class="name">Biz</div>
				<ul>
					<li>
						<NuxtLink to="/">Biz haqimizda </NuxtLink>
					</li>
					<li><NuxtLink>Hamkorlarimiz</NuxtLink></li>
					<li><NuxtLink>Mijozlarimiz</NuxtLink></li>
					<li><NuxtLink>Yangiliklar</NuxtLink></li>
					<li><NuxtLink>Kurslarimiz</NuxtLink></li>
					<li><NuxtLink>Aloqa</NuxtLink></li>
				</ul>
			</div>
			<div class="items">
				<div class="name">Kurslar</div>
				<ul>
					<li>
						<NuxtLink to="/">Dasturlash </NuxtLink>
					</li>
					<li><NuxtLink>SMM</NuxtLink></li>
					<li><NuxtLink>Biznes va Marketing</NuxtLink></li>
					<li><NuxtLink>Veb dizayn</NuxtLink></li>
					<li><NuxtLink>Ofis dasturlar</NuxtLink></li>
					<li><NuxtLink>3D model</NuxtLink></li>
				</ul>
			</div>
			<div class="items">
				<div class="name"></div>
				<ul>
					<li>
						<NuxtLink to="/">Video montaj </NuxtLink>
					</li>
					<li><NuxtLink>Matematika</NuxtLink></li>
					<li><NuxtLink>Tarix</NuxtLink></li>
					<li><NuxtLink>SEO</NuxtLink></li>
					<li><NuxtLink>UI/UX dizayn</NuxtLink></li>
					<li><NuxtLink>Ingliz tili</NuxtLink></li>
				</ul>
			</div>
			<div class="items">
				<div class="name">YORDAM</div>
				<ul>
					<li>
						<NuxtLink to="/">Savol-javob </NuxtLink>
					</li>
					<li><NuxtLink>Qo’llanma</NuxtLink></li>
					<li><NuxtLink>Tizimga kirish</NuxtLink></li>

					<li><NuxtLink>Aloqa</NuxtLink></li>
				</ul>
			</div>
			<div class="items">
				<div class="name">OBUNA BO’LISH</div>
				<p>Platforma yangiliklaridan xabardor bo’ling</p>
				<div class="contact">
					<input type="text" placeholder="Email..." />
					<button>Obuna bo’lish</button>
				</div>
			</div>
		</div>
		<div class="bottom">
			<div class="container">
				<div>© 2023 Educrat. Barcha huquqlar himoyalangan</div>
				<div class="actions">
					<NuxtLink to="/">Yordam </NuxtLink>
					<NuxtLink to="/">Shaxsiy ma’lumotlar</NuxtLink>
					<NuxtLink to="/">Konfidensial ma’lumotlar</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import '~/public/styles/css/components/footer.scss';
</style>
