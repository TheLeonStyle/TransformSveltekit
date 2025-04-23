<script>
	const { dataWorks } = $props();
	import { STRAPI_URL } from '$lib/utils/BASE';
	import Media from '../utils/Media.svelte';
</script>

<section class="works" aria-labelledby="works-heading">
	<div class="works__container">
		<h2 id="works-heading" class="works__heading heading" data-aos="fade-up">Наши работы</h2>
		<p class="works__subheading" data-aos="fade-up">Уже успешно преобразили</p>

		<ul class="works__items">
			{#each dataWorks as work}
				<li class="works__item" aria-labelledby="work-title-{work.id}" data-aos="zoom-in">
					<div class="works__text">
						<h3 id="work-title-{work.id}" class="works__title">{work.title}</h3>
						<p class="works__subtitle">{work.subtitle}</p>
					</div>

					<div class="works__content">
						<div class="works__image">
							<Media src={`${STRAPI_URL}${work.before.url}`} mime={work.before.mime} alt="Начальная работа" label="Было" />
						</div>

						<span class="works__logo icon-logo" aria-hidden="true"></span>

						<div class="works__image">
							<Media src={`${STRAPI_URL}${work.before.url}`} mime={work.before.mime} alt="Конечная работа" label="Стало" />
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style lang="scss">
	.works {
		// padding: rem(70) 0;
		@include adaptiveValue('padding-top', 70, 40, 991, 767, 1);
		@include adaptiveValue('padding-bottom', 70, 40, 991, 767, 1);

		/* .works__container */
		&__container {
		}
		/* .works__heading */
		&__heading {
			margin-bottom: rem(10);
		}
		/* .works__subheading */
		&__subheading {
			// font-size: rem(24);
			@include adaptiveValue('font-size', 24, 18, 991, 320, 1);
			text-align: center;

			margin-bottom: rem(50);
		}
		/* .works__items */
		&__items {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: rem(20);

			@media (max-width: $mobile) {
				grid-template-columns: 1fr;
			}
		}
		/* .works__item */
		&__item {
			display: flex;
			flex-direction: column;

			background-color: #ffffff;
			border: rem(2) solid #dddddd;
			border-radius: rem(10);
			padding: rem(20) rem(10) rem(20);

			transition: transform 0.3s;

			@media (any-hover: hover) {
				&:hover {
					transform: translateY(rem(-5));
				}
			}
		}
		/* .works__text */
		&__text {
			flex: 1;

			padding: 0 rem(20);

			@media (max-width: $mobile) {
				padding: 0 rem(10);
			}
		}
		/* .works__title */
		&__title {
			font-size: rem(20);
			line-height: math.div(24, 20);
			color: #ff6500;
			font-weight: 600;

			margin-bottom: rem(10);
		}
		/* .works__subtitle */
		&__subtitle {
			line-height: math.div(22, 16);
			margin-bottom: rem(20);
		}
		/* .works__content */
		&__content {
			display: flex;
			align-items: center;
			gap: rem(10);

			// @media (max-width: $mobile) {
			// 	flex-direction: column;
			// }
			@media (max-width: $mobileSmall) {
				flex-direction: column;
			}
		}
		/* .works__image */
		&__image {
			display: flex;
			flex-direction: column;
			gap: rem(10);

			width: 100%;

			img {
				width: 100%;
				height: rem(200);
				object-fit: cover;

				// @media (max-width: $mobileSmall) {
				// 	height: rem(150);
				// }
			}

			span {
				color: #ff6500;
				font-size: rem(18);
				font-weight: 600;
				text-align: center;
			}
		}

		/* .works__logo */
		&__logo {
			color: #ff6500;
			font-size: rem(40);
			@include adaptiveValue('font-size', 40, 40, 991, 767, 1);
			animation: rotate 10s linear infinite;

			@media (max-width: $tablet) {
				display: none;
			}

			@media (max-width: $mobile) {
				display: block;
			}
		}
	}
</style>
