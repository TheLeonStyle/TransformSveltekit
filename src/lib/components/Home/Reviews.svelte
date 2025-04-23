<script>
	const { dataReviews } = $props();

	import KeenSlider from 'keen-slider';
	import { onMount } from 'svelte';

	let sliderRef = null;
	let sliderInstance = null;
	let currentSlide = $state(0);

	const bulletClick = (index) => {
		if (sliderInstance) {
			sliderInstance.moveToIdx(index);
		}
	};

	onMount(() => {
		sliderInstance = new KeenSlider(sliderRef, {
			loop: true,
			mode: 'snap',
			breakpoints: {
				'(min-width: 320px)': {
					slides: { perView: 1, spacing: 10 }
				},
				'(min-width: 991px)': {
					slides: { perView: 2, spacing: 10 }
				}
			},
			slideChanged(slider) {
				currentSlide = slider.track.details.rel;
			}
		});
	});
</script>

<section class="reviews" id="reviews" aria-labelledby="reviews-heading">
	<div class="reviews__container">
		<h2 id="reviews-heading" class="reviews__heading heading" data-aos="fade-right">Отзывы клиентов</h2>

		<ul bind:this={sliderRef} class="reviews__items" aria-roledescription="carousel" aria-label="Отзывы клиентов" aria-live="polite" data-aos="zoom-in">
			{#each dataReviews as review, index}
				<li class="reviews__item keen-slider__slide" aria-roledescription="slide" aria-label={`Слайд ${index + 1} из ${dataReviews.length}`}>
					<div class="reviews__author">
						<p class="reviews__name">{review.name}</p>
						<p class="reviews__role">{review.role}</p>
					</div>

					<div class="reviews__content">
						<p class="reviews__text">{review.text}</p>
					</div>
				</li>
			{/each}
		</ul>

		<nav class="reviews__nav" aria-label="Навигация по отзывам">
			{#each Array(dataReviews.length) as _, index}
				<button
					type="button"
					class="reviews__bullet"
					class:active={index === currentSlide}
					aria-label={`Перейти к отзыву ${index + 1}`}
					aria-controls="reviews"
					aria-roledescription="carousel button"
					onclick={() => bulletClick(index)}>
				</button>
			{/each}
		</nav>
	</div>
</section>

<style lang="scss">
	.reviews {
		color: #ffffff;

		background-color: #ff6500;
		// border-radius: rem(50);
		@include adaptiveValue('border-radius', 50, 0, 991, 479, 1);
		// overflow: hidden;
		// padding: rem(70) 0;

		@include adaptiveValue('padding-top', 70, 40, 991, 767, 1);
		@include adaptiveValue('padding-bottom', 70, 40, 991, 767, 1);

		/* .reviews__container */
		&__container {
		}
		/* .reviews__heading */
		&__heading {
			text-align: left;
		}
		/* .reviews__items */
		&__items {
			display: flex;
			overflow: hidden;
		}
		/* .reviews__item */
		&__item {
			// display: flex;
			// gap: rem(40);

			// padding: rem(40);
			// padding: 0 rem(20);
			@include adaptiveValue('padding-left', 20, 0, 991, 767, 1);
			@include adaptiveValue('padding-right', 20, 0, 991, 767, 1);
			margin-bottom: rem(40);
		}
		/* .reviews__author */
		&__author {
			flex: 0 0 rem(150);
			// width: rem(150);
		}
		/* .reviews__content */
		&__content {
			max-width: rem(800);
		}

		/* .reviews__name */
		&__name {
			font-size: rem(24);
			@include adaptiveValue('font-size', 24, 22, 991, 767, 1);
			font-weight: 600;
			line-height: math.div(26, 24);
			margin-bottom: rem(5);
		}
		/* .reviews__role */
		&__role {
			line-height: math.div(20, 16);
			// margin-bottom: rem(20);
			@include adaptiveValue('margin-bottom', 20, 10, 991, 767, 1);
		}
		/* .reviews__text */
		&__text {
			font-size: rem(20);
			@include adaptiveValue('font-size', 20, 18, 991, 767, 1);

			line-height: math.div(26, 20);
			// user-select: none;
		}
		/* .reviews__nav */
		&__nav {
			display: flex;
			justify-content: center;
			gap: rem(15);
		}
		/* .reviews__bullet */
		&__bullet {
			width: rem(10);
			height: rem(10);
			background-color: #ffffff;
			border-radius: 50%;

			&.active {
				background-color: #ffb367;
			}
		}
	}
</style>
