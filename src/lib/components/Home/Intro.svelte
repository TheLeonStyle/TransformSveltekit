<script>
	const { dataIntro } = $props();
	import { currentCategory } from '$lib/stores';
	import { STRAPI_URL } from '$lib/utils/BASE';
	import { onMount } from 'svelte';

	let visible = $state(true);

	const handleLinks = (category, path) => {
		currentCategory.set(category);
	};

	onMount(() => {
		setInterval(() => {
			visible = !visible;
		}, 5000);
	});
</script>

<section class="intro" aria-labelledby="intro-title" style={`background-image: url(${STRAPI_URL}${dataIntro.background.url})`}>
	<div class="intro__container">
		<div class="intro__wrapper">
			{#if visible}
				<div class="intro__content" aria-labelledby="intro-title" data-aos="fade-left" data-aos-delay="300">
					<h1 id="intro-title" class="intro__title" data-aos="fade-left" data-aos-delay="1000">
						{dataIntro.title}
					</h1>
					<p class="intro__subtitle" data-aos="fade-left" data-aos-delay="500">{dataIntro.subtitle}</p>
					<a href="/services" class="intro__button" aria-label={dataIntro.button} data-aos="fade-left">{dataIntro.button}</a>
				</div>
			{:else}
				<div class="intro__outer">
					<div class="intro__inner">
						<h2 class="intro__text" data-aos="fade-right" data-aos-delay="300">Преображаем</h2>
						<ul class="intro__items" data-aos="fade-right" data-aos-delay="1000">
							<li class="intro__item" data-aos="fade-right" data-aos-delay="1500">
								<a href="/works" class="intro__link" aria-label="Показать работы: Квартиры" onclick={() => handleLinks('Квартиры')}>Квартиры</a>
							</li>
							<li class="intro__item" data-aos="fade-right" data-aos-delay="2000">
								<a href="/works" class="intro__link" aria-label="Показать работы: Дома" onclick={() => handleLinks('Дома')}>Дома</a>
							</li>
							<li class="intro__item" data-aos="fade-right" data-aos-delay="2500">
								<a href="/works" class="intro__link" aria-label="Показать работы: Офисы" onclick={() => handleLinks('Офисы')}>Офисы</a>
							</li>
						</ul>
					</div>
					<p class="intro__locate" data-aos="fade-left" data-aos-delay="3000">{dataIntro.locate}</p>
				</div>
			{/if}
		</div>
	</div>
</section>

<style lang="scss">
	.intro {
		// background-image: url('/img/intro/bg.webp');
		background-position: center;
		background-size: cover;
		min-height: 100vh;

		@include adaptiveValue('padding-top', 180, 100, 991, 479, 1);
		padding-bottom: rem(50);

		@media (max-width: $mobile) {
			min-height: rem(450);
		}

		/* .intro__container */
		&__container {
			overflow: hidden;
			// display: flex;
			// align-items: center;
			// gap: rem(40);

			// padding: rem(80) rem(15) rem(80) rem(15); // ???
		}
		/* .intro__wrapper */
		&__wrapper {
			display: flex;
			align-items: center;
			justify-content: space-between;
			// gap: rem(40);

			position: relative;

			@media (max-width: $mobile) {
				align-items: start;
				flex-direction: column;
				gap: rem(20);
			}
		}
		/* .intro__content */
		&__content {
			flex: 0 1 rem(800);

			display: flex;
			flex-direction: column;
			gap: rem(60);

			@media (max-width: $mobile) {
				flex: 0 0 100%;
				gap: rem(20);
			}
		}
		/* .intro__title */
		&__title {
			color: #ff6500;
			font-weight: 600;
			// font-size: rem(50);
			@include adaptiveValue('font-size', 50, 38, 1300, 991, 1);
			line-height: math.div(70, 60);

			// @media (max-width: $mobile) {
			// 	font-size: rem(28);
			// }

			@media (max-width: em(520)) {
				@include adaptiveValue('font-size', 38, 28, 520, 320, 1);
			}

			span {
				display: block;
			}
		}
		/* .intro__subtitle */
		&__subtitle {
			flex: 1;
			max-width: rem(550);

			// font-size: rem(26);
			@include adaptiveValue('font-size', 26, 20, 1300, 991, 1);

			line-height: math.div(32, 26);

			// @media (max-width: $mobile) {
			// 	max-width: rem(400);
			// 	font-size: rem(18);
			// }
		}
		/* .intro__button */
		&__button {
			align-self: start;

			color: #ffffff;
			font-weight: 600;

			background-color: #ff6500;
			border-radius: rem(30);
			padding: rem(20) rem(50);

			transition: background-color 0.3s ease 0s;

			&:hover {
				background-color: #ffb367;
			}

			@media (max-width: $mobile) {
				padding: rem(18) rem(40);
			}
		}
		// /* .intro__outer */
		&__outer {
			display: flex;
			flex-direction: column;
			// gap: rem(120);

			@include adaptiveValue('gap', 130, 40, 991, 767, 1);

			@media (max-width: $mobile) {
				width: 100%;
			}
		}
		/* .intro__inner */
		&__inner {
			display: flex;
			align-items: center;
			gap: rem(20);
			// margin-bottom: rem(160);
			padding-top: rem(40);

			// @media (max-width: em(1150)) {
			// 	display: none;
			// }
			@media (max-width: em(1150)) {
				flex-direction: column;
			}

			@media (max-width: $mobile) {
				transform: none;
				align-self: center;
			}
		}
		/* .intro__text */
		&__text {
			color: #ff6500;
			font-family: 'Miroslav', sans-serif;
			// font-size: rem(50);
			@include adaptiveValue('font-size', 50, 36, 1440, 1150, 1);
			font-weight: 600;
			line-height: math.div(54, 50);

			// @media (max-width: em(1150)) {
			// 	display: none;
			// }

			@media (max-width: $mobile) {
				display: inline;
				@include adaptiveValue('font-size', 36, 30, 767, 320, 1);
			}
		}
		/* .intro__items */
		&__items {
			padding-left: rem(188);
			position: relative;
			@media (max-width: em(1300)) {
				padding-left: rem(150);
			}

			@media (max-width: $tablet) {
				padding-left: rem(100);
			}

			@media (max-width: $mobile) {
				display: flex;
				gap: rem(20);
				flex-wrap: wrap;
				padding-left: 0;
			}

			&:before,
			&:after {
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				width: 0;
				height: 0;
				@media (max-width: $mobile) {
					display: none;
				}
			}

			&:before {
				border-top: rem(100) solid transparent;
				border-bottom: rem(100) solid transparent;
				border-left: rem(168) solid #ff6500;
				transform: translateY(-50%);

				@media (max-width: em(1300)) {
					border-top: rem(80) solid transparent;
					border-bottom: rem(80) solid transparent;
					border-left: rem(128) solid #ff6500;
				}

				@media (max-width: $tablet) {
					display: none;
				}
			}

			&:after {
				border-top: rem(40) solid transparent;
				border-bottom: rem(40) solid transparent;
				border-left: rem(88) solid #000000;
				transform: translate(rem(-5), -50%);

				@media (max-width: em(1300)) {
					border-top: rem(40) solid transparent;
					border-bottom: rem(40) solid transparent;
					border-left: rem(68) solid #000000;
				}
			}
		}
		/* .intro__item */
		&__item {
			&:not(:last-child) {
				margin-bottom: rem(30);
			}

			@media (max-width: $mobile) {
				&:not(:last-child) {
					margin-bottom: 0;
				}
			}
		}
		/* .intro__link */
		&__link {
			color: inherit;
			// font-size: rem(40);
			@include adaptiveValue('font-size', 40, 26, 1440, 991, 1);
			font-weight: 600;
			transition: color 0.3s ease 0s;

			&:hover {
				color: #ff6500;
			}

			@media (max-width: $mobile) {
				@include adaptiveValue('font-size', 26, 22, 767, 320, 1);
			}
		}
		/* .intro__locate */
		&__locate {
			color: #ff6500;
			font-size: rem(30);
			@include adaptiveValue('font-size', 40, 22, 991, 479, 1);
			line-height: math.div(28, 30);
			text-align: right;

			@media (max-width: $mobileSmall) {
				text-align: center;
			}
		}
	}
</style>
