<script>
	const { dataSocial } = $props();
	import { menuActive, menuStore } from '$lib/stores';
	import { slide } from 'svelte/transition';
	import { scrollTo } from '$lib/utils/scrollTo';

	const handleMenu = (id) => {
		menuStore.close();
		scrollTo(id);
	};
</script>

<dialog class="menu" onclick={() => menuStore.close()} transition:slide>
	<dialog class="menu__content" onclick={(event) => event.stopPropagation()} transition:slide>
		<!-- <button class="menu__close"></button> -->
		<nav class="menu__nav">
			<a href="/services" class="menu__link">Услуги</a>
			<a href="/works" class="menu__link">Наши работы</a>
			<button class="menu__link" onclick={() => handleMenu('reviews')}>Отзывы</button>
			<button class="menu__link" onclick={() => handleMenu('contacts')}>Контакты</button>
			<a href="tel:{dataSocial.phone}" class="menu__link menu__link-phone menu__icon icon-phone">{dataSocial.phone}</a>
		</nav>
	</dialog>
</dialog>

<style lang="scss">
	.menu {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 10;
		background-color: rgba($color: #000000, $alpha: 0.6);

		display: block;
		width: 100%;
		height: 100%;

		/* .menu__content */
		&__content {
			position: fixed;
			top: 0;
			left: calc(100% - rem(300));
			z-index: 11;

			display: block;
			width: rem(300);
			height: 100%;
			background-color: #ff6500;
		}
		/* .menu__close */
		// &__close {
		// 	width: rem(40);
		// 	height: rem(28);
		// 	position: relative;

		// 	&:before,
		// 	&:after {
		// 		content: '';
		// 		right: 0;
		// 		position: absolute;
		// 		width: 100%;
		// 		height: rem(4);
		// 		background-color: #ffffff;
		// 	}

		// 	&:before {
		// 		top: 50%;
		// 		transform: rotate(45deg) translateY(-50%);
		// 	}
		// 	&:after {
		// 		top: 50%;
		// 		transform: rotate(-45deg) translateY(-50%);
		// 	}
		// }
		/* .menu__nav */
		&__nav {
			display: flex;
			flex-direction: column;
		}
		/* .menu__link */
		&__link {
			text-align: left;
			color: #ffffff;
			font-size: rem(18);
			font-weight: 600;

			padding: rem(20);

			/* .menu__link-phone */
			&-phone {
				display: flex;
				align-items: center;
				gap: rem(10);
			}
		}
		/* .menu__icon */
		&__icon {
		}
	}
</style>
