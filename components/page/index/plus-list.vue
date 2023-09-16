<template>
	<div class="plus">
		<div class="container">
			<div class="plus__list">
				<div class="title">EduCert bilan zamonaviy kasbga ega bo’ing</div>
				<p>Har bir oq’uvchiga mos holatda dars rejasi shakllantirilgan</p>
				<div class="row">
					<div class="plus__items col-6" v-for="card in 4">
						<div>
							<div class="plus__img learn">
								<img src="~/public/img/plus-1.svg" />
							</div>
							<div>
								<div class="plus__title">Mutaxassislar bilan o’rgan</div>
								<div class="plus__text">
									Barcha kurslarni o’z ishining mutaxassislari tomonidan olib
									boriladi
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup></script>
<style lang="scss">
@import '~/public/styles/css/components/plusList.scss';
</style>
