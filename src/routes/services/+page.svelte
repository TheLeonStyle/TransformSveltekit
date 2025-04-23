<script>
	const { data } = $props();

	let services = $state([]);

	services = data.services;
</script>

<svelte:head>
	<title>Портфолио выполненных ремонтов — Преображение | Дома, квартиры, офисы</title>
	<meta
		name="description"
		content="Посмотрите реальные фото до и после: квартиры, офисы, коттеджи. Более 10 успешных проектов с примерами работ и описанием. Качественно, в срок, под ключ" />
</svelte:head>

<section class="services" aria-labelledby="services-heading">
	<div class="services__container">
		<h2 id="services-heading" class="services__heading heading">Услуги</h2>

		{#each services as service}
			<h3 class="services__category">{service.Category}</h3>
			<ul class="services__items">
				{#each service.Services as item}
					<li class="services__item">
						<div class="services__text">
							<h4 class="services__title">{item.title}</h4>
							<p class="services__subtitle">{item.subtitle}</p>
						</div>
						<!-- prettier-ignore -->
						<p class="services__price">{item.price} <span>{item.prefix}</span></p>
					</li>
				{/each}
			</ul>
		{/each}
	</div>
</section>

<style lang="scss">
	.services {
		@include adaptiveValue('padding-top', 120, 100, 991, 479, 1);
		@include adaptiveValue('padding-bottom', 70, 50, 991, 479, 1);
		/* .services__container */
		&__container {
		}
		/* .services__heading */
		&__heading {
		}
		/* .services__category */
		&__category {
			color: #ffffff;
			// font-size: rem(28);
			@include adaptiveValue('font-size', 28, 20, 991, 479, 1);
			font-weight: 600;
			line-height: math.div(32, 28);

			display: inline-block;
			background-color: #ff6500;
			border-radius: rem(30);
			padding: rem(15) rem(40);
			// margin-bottom: rem(30);
			@include adaptiveValue('margin-bottom', 30, 20, 991, 479, 1);

			@media (max-width: $mobile) {
				padding: rem(15) rem(20);
			}
		}
		/* .services__items */
		&__items {
			margin-bottom: rem(40);
		}
		/* .services__item */
		&__item {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: rem(20);

			border: rem(2) solid #ff6500;
			border-radius: rem(10);
			padding: rem(10) rem(20);

			&:not(:last-child) {
				margin-bottom: rem(20);
			}

			@media (max-width: $mobileSmall) {
				flex-direction: column;
			}
		}
		/* .services__text */
		&__text {
		}
		/* .services__title */
		&__title {
			color: #ff6500;
			font-size: rem(20);
			font-weight: 600;
			line-height: math.div(24, 20);
			margin-bottom: rem(5);
		}
		/* .services__subtitle */
		&__subtitle {
			max-width: rem(700);

			line-height: math.div(22, 16);
		}
		/* .services__price */
		&__price {
			color: #ff6500;
			font-size: rem(20);
			font-weight: 600;
			line-height: math.div(24, 20);
			white-space: nowrap;
		}
	}
</style>
