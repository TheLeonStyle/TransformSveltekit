<script>
	const { dataSocial } = $props();
	import { modalStore } from '$lib/stores';
	import { fly, scale } from 'svelte/transition';
</script>

<dialog class="modal" onclick={() => modalStore.close()} transition:fly>
	<div class="modal__popup" onclick={(event) => event.stopPropagation()} transition:scale>
		<button class="modal__close" aria-hidden="true" onclick={() => modalStore.close()}></button>
		<nav class="modal__nav">
			<a href={dataSocial.whatsapp} class="modal__link modal__icon icon-whatsapp" aria-label="Перейти в WhatsApp" target="_blank">WhatsApp</a>
			<a href={dataSocial.telegram} class="modal__link modal__icon icon-telegram" aria-label="Перейти в Telegram" target="_blank">Telegram</a>
			<a href="tel:{dataSocial.phone}" class="modal__link modal__icon icon-phone" aria-label="Позвонить {dataSocial.phone}" target="_blank">Звонок</a>
		</nav>
	</div>
</dialog>

<style lang="scss">
	.modal {
		display: block;

		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100dvh;
		z-index: 11;
		overflow: auto;

		background-color: rgba($color: #303030, $alpha: 0.6);

		/* .modal__popup */
		&__popup {
			position: relative;
			// position: absolute;
			// top: 50%;
			// left: 50%;
			// transform: translate(-50%, -50%);
			// z-index: 10;
			margin: rem(70) auto;
			max-width: rem(560);
			// min-height: 300px;
			// min-width: rem(450);

			// background: linear-gradient(140deg, #30bedc 10%, #30bee6 50%, #30bee6 90%);
			background-color: #ff6500;
			border-radius: rem(10);
			padding: rem(60);

			color: #ffffff;
		}
		/* .modal__close */
		&__close {
			width: rem(22);
			height: rem(22);

			position: absolute;
			top: rem(20);
			right: rem(20);
			z-index: 1;
			&:before,
			&:after {
				content: '';
				display: block;
				width: 100%;
				height: rem(2);
				background-color: #ffffff;

				position: absolute;
			}

			&:before {
				transform: translateY(50%) rotate(-45deg);
			}
			&:after {
				transform: translateY(50%) rotate(45deg);
			}
		}
		/* .modal__title */
		&__title {
			font-size: rem(24);
			font-weight: 600;
			text-align: center;
			margin-bottom: rem(20);
		}

		/* .modal__nav */
		&__nav {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: rem(20);
		}

		/* .modal__link */
		&__link {
			display: flex;
			align-items: center;
			gap: rem(10);

			font-size: rem(20);
			font-weight: 600;
			color: #ffffff;
		}
	}
</style>
