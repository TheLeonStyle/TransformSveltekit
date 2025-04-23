<script>
	import Media from '$lib/components/utils/Media.svelte';
	const { data } = $props();
	import { currentCategory } from '$lib/stores';
	import { STRAPI_URL } from '$lib/utils/BASE';

	const categories = data.categories.map((category) => category.title);
	let works = $state([]);
	let loadingData = $state(true);

	const changeCategory = (category) => currentCategory.set(category);

	$effect(async () => {
		loadingData = true;
		let url = `${STRAPI_URL}/api/works?sort[0]=createdAt:desc&populate=*`;

		if ($currentCategory !== 'Все') {
			url += `&filters[category][title]=${encodeURIComponent($currentCategory)}`;
		}

		const response = await fetch(url);
		const data = await response.json();

		works = data.data;
		loadingData = false;
	});
</script>

<svelte:head>
	<title>Услуги и цены на ремонт под ключ в Москве — Преображение</title>
	<meta name="description" content="Предлагаем комплексный ремонт: малярные, плиточные, штукатурные и электромонтажные работы. Работаем по всей Москве и МО." />
</svelte:head>

<section class="works" aria-labelledby="works-heading">
	<div class="works__container">
		<h2 id="works-heading" class="works__heading heading">Наши работы</h2>
		<p class="works__subheading">Уже успешно преобразили</p>

		<nav class="works__filters" aria-label="Фильтры по категориям">
			<button
				class="works__filter-btn"
				class:active={$currentCategory === 'Все'}
				type="button"
				aria-pressed={$currentCategory === 'Все'}
				aria-controls="works-list"
				onclick={() => changeCategory('Все')}>
				Все
			</button>
			{#each categories as category}
				<button
					class="works__filter-btn"
					class:active={category === $currentCategory}
					type="button"
					aria-pressed={category === $currentCategory}
					aria-controls="works-list"
					onclick={() => changeCategory(category)}>
					{category}
				</button>
			{/each}
		</nav>

		<ul class="works__items" aria-busy={loadingData} aria-live="polite">
			{#if loadingData}
				{#each Array(4) as _}
					<li class="works__item">
						<svg role="img" width="100%" height="346" aria-labelledby="loading-aria" aria-busy="true" viewBox="0 0 710 346" preserveAspectRatio="none">
							<title id="loading-aria">Загрузка...</title>
							<rect x="0" y="0" width="100%" height="100%" clip-path="url(#clip-path)" style="fill: url('#fill');"></rect>
							<defs>
								<clipPath id="clip-path">
									<rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
									<rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
									<rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
									<rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
									<rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
									<circle cx="20" cy="20" r="20" />
									<rect x="0" y="0" rx="10" ry="10" width="710" height="346" />
								</clipPath>
								<linearGradient id="fill">
									<stop offset="0.599964" stop-color="#f3f3f3" stop-opacity="1">
										<animate attributeName="offset" values="-2; -2; 1" keyTimes="0; 0.25; 1" dur="2s" repeatCount="indefinite"></animate>
									</stop>
									<stop offset="1.59996" stop-color="#ecebeb" stop-opacity="1">
										<animate attributeName="offset" values="-1; -1; 2" keyTimes="0; 0.25; 1" dur="2s" repeatCount="indefinite"></animate>
									</stop>
									<stop offset="2.59996" stop-color="#f3f3f3" stop-opacity="1">
										<animate attributeName="offset" values="0; 0; 3" keyTimes="0; 0.25; 1" dur="2s" repeatCount="indefinite"></animate>
									</stop>
								</linearGradient>
							</defs>
						</svg>
					</li>
				{/each}
			{:else}
				{#each works as work}
					<li class="works__item" aria-labelledby="work-title-{work.id}">
						<div class="works__text">
							<h3 id="work-title-{work.id}" class="works__title">{work.title}</h3>
							<p class="works__subtitle">{work.subtitle}</p>
						</div>

						<div class="works__content">
							<div class="works__media">
								<Media src={`${STRAPI_URL}${work.before.url}`} mime={work.before.mime} alt="Начальная работа" label="Было" />
								<!-- <img src={`${STRAPI_URL}${work.before.url}`} alt="" loading="lazy" /> -->
							</div>

							<span class="works__logo icon-logo"></span>

							<div class="works__media">
								<Media src={`${STRAPI_URL}${work.before.url}`} mime={work.before.mime} alt="Конечная работа" label="Стало" />

								<!-- <img src={`${STRAPI_URL}${work.after.url}`} alt="" loading="lazy" /> -->
							</div>
						</div>
					</li>
				{/each}
			{/if}
		</ul>
	</div>
</section>

<style lang="scss">
	.works {
		@include adaptiveValue('padding-top', 120, 100, 991, 479, 1);
		@include adaptiveValue('padding-bottom', 70, 50, 991, 479, 1);

		/* .works__container */
		&__container {
		}
		/* .works__heading */
		&__heading {
			margin-bottom: rem(10);
		}
		/* .works__subheading */
		&__subheading {
			@include adaptiveValue('font-size', 24, 18, 991, 320, 1);
			text-align: center;

			@include adaptiveValue('margin-bottom', 50, 30, 991, 767, 1);
		}

		/* .works__filters */
		&__filters {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			// gap: rem(20);
			@include adaptiveValue('gap', 20, 10, 767, 479, 1);
			@include adaptiveValue('margin-bottom', 40, 20, 991, 767, 1);
		}

		/* .works__filter-btn */
		&__filter-btn {
			color: #ff6500;
			font-size: inherit;

			border: rem(1) solid #ff6500;
			border-radius: rem(30);

			padding: rem(10) rem(20);

			transition:
				background-color 0.3s ease,
				color 0.3s ease;

			&:hover,
			&.active {
				background-color: #ff6500;
				color: #ffffff;
			}
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
			font-size: rem(16);
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
		/* .works__media */
		&__media {
			display: flex;
			flex-direction: column;
			gap: rem(10);

			width: 100%;

			// img {
			// 	width: 100%;
			// 	height: rem(200);
			// 	object-fit: cover;

			// 	// @media (max-width: $mobileSmall) {
			// 	// 	height: rem(150);
			// 	// }
			// }

			// span {
			// 	color: #ff6500;
			// 	font-size: rem(18);
			// 	font-weight: 600;
			// 	text-align: center;
			// }
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
