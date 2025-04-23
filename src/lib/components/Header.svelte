<script>
	const { dataHeader, dataContacts } = $props();
	import { menuStore } from '$lib/stores';
	import { scrollTo } from '$lib/utils/scrollTo';
</script>

<header class="header">
	<div class="header__container">
		<a href="/" class="header__logo" aria-label="{dataHeader.title} – {dataHeader.subtitle}">
			<i class="header__icon icon-logo" aria-hidden="true"></i>

			<p data-aos="fade-left">
				{dataHeader.title}
				<span>{dataHeader.subtitle}</span>
			</p>
		</a>

		<nav class="header__nav" aria-label="Основная навигация" data-aos="fade-down">
			<a href="/services" class="header__link">Услуги</a>
			<a href="/works" class="header__link">Наши работы</a>
			<button
				class="header__link"
				type="button"
				aria-controls="reviews"
				aria-label="Перейти к разделу отзывов"
				aria-expanded="false"
				onclick={() => scrollTo('reviews')}>
				Отзывы
			</button>
			<button
				class="header__link"
				type="button"
				aria-controls="contacts"
				aria-label="Перейти к разделу контактов"
				aria-expanded="false"
				onclick={() => scrollTo('contacts')}>
				Контакты
			</button>
			<a
				href="tel:{dataContacts.phone}"
				class="header__link header__link-phone header__icon icon-phone"
				target="_blank"
				aria-label="Позвонить {dataContacts.phone}">
			</a>
		</nav>

		<button
			class="header__burger"
			type="button"
			aria-label="Открыть главное меню"
			aria-controls="mobile-menu"
			aria-expanded={menuStore.isOpen}
			onclick={() => menuStore.open()}>
			<span aria-hidden="true"></span>
		</button>
	</div>
</header>

<style lang="scss">
	.header {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;

		padding: rem(20) 0;

		@media (max-width: $mobile) {
			padding: rem(15) 0;
		}
		/* .header__container */
		&__container {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: rem(20);
		}

		/* .header__logo */
		&__logo {
			display: flex;
			align-items: center;
			gap: rem(10);

			i {
				// font-size: rem(70);
				@include adaptiveValue('font-size', 100, 55, 1200, 991, 1);

				color: #ff6500;
				animation: rotate 10s linear infinite;

				@media (max-width: $mobileSmall) {
					font-size: rem(45);
				}
			}

			p {
				font-family: 'Miroslav', sans-serif;
				color: #ff6500;
				font-weight: 600;
				// font-size: rem(32);
				@include adaptiveValue('font-size', 40, 28, 1200, 991, 1);

				@media (max-width: $mobileSmall) {
					font-size: rem(26);
				}
			}

			span {
				display: block;
				font-family: 'Onest', sans-serif;
				color: #000000;
				// font-size: rem(22);
				// @include adaptiveValue('font-size', 28, 22, 991, 767, 1);
				@include adaptiveValue('font-size', 28, 20, 1200, 991, 1);

				@media (max-width: $mobileSmall) {
					font-size: rem(18);
				}
			}
		}
		&__icon {
		}
		/* .header__nav */
		&__nav {
			display: flex;
			align-items: center;
			// gap: rem(60);
			@include adaptiveValue('gap', 60, 20, 1200, 991, 1);

			@media (max-width: $tablet) {
				display: none;
			}
		}
		/* .header__link */
		&__link {
			color: inherit;
			font-size: rem(26);
			font-weight: 600;
			position: relative;
			transition: color 0.3s ease 0s;

			&:after {
				content: '';
				display: block;
				width: 0;
				height: rem(2);
				background-color: #ff6500;
				transition: width 0.3s ease 0s;
			}

			&:hover {
				color: #ff6500;

				&::after {
					width: 100%;
				}
			}

			&-phone {
				color: #ff6500;
				font-size: rem(28);

				// Обнуление нижнего подчеркивания при наведении
				&:hover {
					color: #ffb367;
					&::after {
						width: 0;
					}
				}
			}
		}

		/* .header__burger */
		&__burger {
			width: rem(40);
			height: rem(28);
			position: relative;

			@media (min-width: $tablet) {
				display: none;
			}

			span,
			&:before,
			&:after {
				content: '';
				right: 0;
				position: absolute;
				width: 100%;
				height: rem(4);
				background-color: #ff6500;
			}

			&:before {
				top: 0;
			}

			span {
				top: 50%;
				transform: translateY(-50%);
			}

			&:after {
				bottom: 0;
			}
		}
	}
</style>
