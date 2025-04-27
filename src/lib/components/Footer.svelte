<script>
	const { dataSocial, dataFooter } = $props();
</script>

<footer class="footer" aria-labelledby="footer-logo-label">
	<div class="footer__container">
		<div class="footer__logo">
			<a href="/" aria-label="Главная страница — Название вашего сайта">
				<i class="footer__icon icon-logo" aria-hidden="true"></i>
			</a>
		</div>

		<address class="footer__info">
			<p class="footer__text">{dataFooter.address}</p>
			<p class="footer__text">{dataFooter.copyright}</p>
		</address>

		<nav class="footer__socials" aria-label="Социальные сети">
			<a href={dataSocial.whatsapp} class="footer__social footer__icon icon-whatsapp" aria-label="Перейти в WhatsApp" target="_blank">WhatsApp</a>
			<a href={dataSocial.telegram} class="footer__social footer__icon icon-telegram" aria-label="Перейти в Telegram" target="_blank">Telegram</a>
			<a href="tel:{dataSocial.phone}" class="footer__social footer__icon icon-phone" aria-label="Позвонить {dataSocial.phone}" target="_blank">Звонок</a>
			<a href={dataSocial.dzen} class="footer__social footer__icon icon-star" aria-label="Перейти в Дзен" target="_blank">Дзен</a>
		</nav>
	</div>

	<p class="footer__developer">
		Разработка сайта: <a href={'https://skyflux.ru'} class="footer__developer" aria-label="SkyFlux — веб-студия" target="_blank">SkyFlux</a>
	</p>
</footer>

<style lang="scss">
	.footer {
		background-color: #823400;
		padding: rem(10) 0;

		color: #ffffff;

		/* .footer__container */
		&__container {
			// display: flex;
			// justify-content: space-between;
			// align-items: center;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			align-items: center;
			gap: rem(10);
			margin-bottom: rem(10);

			@media (max-width: $mobileSmall) {
				grid-template-columns: 1fr;
				justify-items: center;
			}
		}
		/* .footer__logo */
		&__logo {
		}

		/* .footer__icon */
		&__icon {
			font-size: rem(60);
			color: #ff6500;
			transition: color 0.3s ease 0s;
			&:hover {
				color: #ffb367;
			}
		}
		/* .footer__info */
		&__info {
			font-size: rem(18);
			text-align: center;
		}
		/* .footer__text */
		&__text {
			margin-bottom: rem(5);
		}
		/* .footer__socials */
		&__socials {
			justify-content: end;
			display: flex;
			flex-wrap: wrap;
			gap: rem(20);

			@media (max-width: $mobileSmall) {
				grid-row: 2/3;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
		}
		/* .footer__social */
		&__social {
			display: flex;
			align-items: center;
			gap: rem(10);
			font-size: rem(24);
			@include adaptiveValue('font-size', 24, 20, 991, 767, 1);
			color: #ffffff;
			transition: color 0.3s ease 0s;
			&:hover {
				color: #ff6500;
			}
		}
		/* .footer__developer */
		&__developer {
			text-align: center;
			a {
				color: #ff6500;
				font-weight: 900;
			}
		}
	}
</style>
