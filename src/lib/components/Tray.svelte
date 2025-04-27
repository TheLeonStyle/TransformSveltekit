<script>
	import { modalStore } from '$lib/stores';
</script>

<button class="tray tray__icon icon-phone" type="button" aria-label="Открыть контакты" onclick={() => modalStore.open()}>Связь</button>

<style lang="scss">
	.tray {
		display: none;

		position: fixed;
		bottom: rem(15);
		right: rem(15);
		z-index: 9;

		background-color: #ff6500;
		border-radius: rem(30);
		box-shadow: 0 rem(4) rem(6) rgba(0, 0, 0, 0.2);

		color: #ffffff;
		font-size: rem(16);

		padding: rem(12) rem(22);
		transition: background-color 0.3s ease 0s;

		&:hover {
			background-color: #ffb367;
		}

		@media (max-width: $mobile) {
			display: flex;
			align-items: center;
			gap: rem(10);
		}
	}
</style>
