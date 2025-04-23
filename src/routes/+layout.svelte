<script>
	const { data, children } = $props();
	import { onMount } from 'svelte';
	import { menuActive } from '$lib/stores';
	import '$lib/scss/styles.scss';

	import AOS from 'aos';
	import 'aos/dist/aos.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Menu from '$lib/components/Menu.svelte';

	onMount(() => {
		AOS.init({
			offset: 120, // Отступ перед началом анимации (px)
			delay: 0, // Задержка перед началом анимации (ms)
			duration: 400, // Длительность анимации (ms)
			easing: 'linear', // Тип анимации (например, 'ease', 'linear', 'ease-in-out')
			once: true, // Если true – анимация сработает только 1 раз при скролле вниз
			mirror: false, // Если true – анимация будет работать при скролле вверх
			anchorPlacement: 'top-bottom' // Где должен находиться элемент, чтобы анимация сработала
			// disable: () => window.innerWidth < 768 // Отключение анимации (можно передать функцию или true/false)
		});
	});
</script>

<div class="wrapper">
	<Header dataHeader={data.header} dataContacts={data.social} />
	<main>
		{#if $menuActive}
			<Menu dataSocial={data.social} />
		{/if}
		{@render children({ dataSocial: data.social })}
	</main>
	<Footer dataSocial={data.social} dataFooter={data.footer} />
</div>

<style lang="scss">
	.wrapper {
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
	}
	main {
		flex: 1 1 auto;
	}
</style>
