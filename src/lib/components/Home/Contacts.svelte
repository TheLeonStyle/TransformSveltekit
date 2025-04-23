<script>
	const { dataContacts } = $props();
</script>

<section class="contacts" id="contacts" aria-labelledby="contacts-heading">
	<div class="contacts__container">
		<h2 id="contacts-heading" class="contacts__heading heading" data-aos="fade-up">Контакты</h2>

		<ul class="contacts__items">
			<li class="contacts__item">
				<a href="tel:{dataContacts.phone}" class="contacts__link" aria-label="Позвонить {dataContacts.phone}" target="_blank">
					<i class="contacts__icon icon-phone" aria-hidden="true"></i>
					{dataContacts.phone}
				</a>
			</li>
			<li class="contacts__item">
				<a href={dataContacts.dzen} class="contacts__link" aria-label="Перейти на Дзен" target="_blank">
					<i class="contacts__icon icon-star" aria-hidden="true"></i>
					Наш Дзен
				</a>
			</li>
			<li class="contacts__item">
				<a href="mailto:{dataContacts.email}" class="contacts__link" aria-label="Написать на почту {dataContacts.email}" target="_blank">
					<i class="contacts__icon icon-gmail" aria-hidden="true"></i>
					{dataContacts.email}
				</a>
			</li>
		</ul>
	</div>
</section>

<style lang="scss">
	.contacts {
		// padding: rem(70) 0;
		@include adaptiveValue('padding-top', 70, 40, 991, 767, 1);
		@include adaptiveValue('padding-bottom', 70, 40, 991, 767, 1);
		/* .contacts__container */
		&__container {
		}
		/* .contacts__heading */
		&__heading {
		}
		/* .contacts__items */
		&__items {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			@include adaptiveValue('gap', 40, 20, 991, 767, 1);
			// gap: rem(40);
		}
		/* .contacts__item */
		&__item {
		}
		/* .contacts__icon */
		&__icon {
			display: flex;
			justify-content: center;
			align-items: center;
			// width: rem(100);
			// height: rem(100);
			@include adaptiveValue('width', 100, 50, 991, 767, 1);
			@include adaptiveValue('height', 100, 50, 991, 767, 1);

			background-color: #ffb367;
			border-radius: 50%;

			// font-size: rem(300);
			// @include adaptiveValue('font-size', 300, 100, 991, 767, 1);

			transition:
				background-color 0.3s ease 0s,
				font-size 0.3s ease 0s;

			position: relative;

			&::after {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				width: 100%;
				height: 100%;
				transform: translate(-50%, -50%) scale(1);
				border: rem(2) solid rgba(255, 101, 0, 0.5);
				border-radius: 50%;
				opacity: 0;
				animation: ripple 2s infinite;
				z-index: -1;
			}
		}
		/* .contacts__link */
		&__link {
			display: flex;
			align-items: center;
			gap: rem(20);

			color: inherit;
			// font-size: rem(50);
			@include adaptiveValue('font-size', 50, 26, 991, 767, 1);

			transition: color 0.3s ease 0s;

			@media (max-width: $mobileSmall) {
				gap: rem(10);

				font-size: rem(18);
			}

			&:hover {
				.contacts__icon {
					// font-size: rem(50);
					@include adaptiveValue('font-size', 50, 30, 991, 767, 1);

					background-color: #ff6500;
				}
				.contacts__link {
					color: #ff6500;
				}
			}
		}

		&__icon {
			color: #ffffff;
			// font-size: rem(30);
			@include adaptiveValue('font-size', 30, 24, 991, 767, 1);
		}
	}

	@keyframes ripple {
		0% {
			transform: translate(-50%, -50%) scale(1);
			opacity: 0.8;
		}
		100% {
			transform: translate(-50%, -50%) scale(1.4);
			opacity: 0;
		}
	}
</style>
