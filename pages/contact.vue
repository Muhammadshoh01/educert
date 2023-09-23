<template>
	<div class="contact">
		<div class="contact__head">
			<div class="container">
				<div class="col-9 col-md-24">
					<h1>Aloqa</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
						commodo ligula eget dolor. Aenean massa.
					</p>
				</div>
				<form class="contact__form">
					<div class="contact__title">Xabar jo’natish</div>
					<div class="contact__text">
						Neque convallis a cras semper auctor. Libero id faucibus nisl
						tincidunt egetnvallis.
					</div>
					<label class="mb-30">
						Ism-Familiyangiz
						<input type="text" placeholder="Polvonov Jalil " />
					</label>
					<label class="mb-30">
						Email
						<input type="email" placeholder="jalil@gmail.com" />
					</label>
					<label class="mb-30">
						Xabar matn
						<textarea rows="7"></textarea>
					</label>
					<button class="more green">Jo’natish</button>
				</form>
			</div>
		</div>
		<div class="contact__info">
			<div class="container">
				<div class="row">
					<div class="col-12 col-md-24">
						<div class="row">
							<div class="col-12 mb-90">
								<h3>Bizning manzil</h3>
								<h4>
									Toshkent shahar Yunusobo tumani Amir Temur ko’chasi 303 uy
								</h4>
							</div>
							<div class="col-12">
								<h3>Telefon</h3>
								<ul>
									<li>
										<a href="#">+998 (55) 123-45-67</a>
									</li>
									<li>
										<a href="#">+998 (71) 133-44-66</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-12 col-md-24">
						<div class="row">
							<div class="col-12">
								<h3>Email</h3>
								<ul>
									<li>
										<a href="#">info@educert.uz </a>
									</li>
									<li>
										<a href="#">support@educert.uz</a>
									</li>
								</ul>
							</div>
							<div class="col-12">
								<h3>Ijtimoiy sahifalarimiz</h3>
								<ul>
									<li>
										<a href="#">facebook.com/educert</a>
									</li>
									<li>
										<a href="#">instagram.com/educert</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95882.13650631218!2d69.22567679999999!3d41.3237248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b454cf51035%3A0xc1f97becd64cf681!2sMinor%20Masjidi!5e0!3m2!1suz!2s!4v1695152464689!5m2!1suz!2s"
			width="100%"
			height="624"
			style="border: 0"
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</div>
</template>
<script setup></script>
<style lang="scss">
@import '~/public/styles/css/components/contact.scss';
</style>
