<script>
	/**
	 * Компонент Media — выбирает тег <video> или <img>
	 * @prop {string} src — абсолютный путь к файлу
	 * @prop {string} mime — MIME-тип ресурса
	 * @prop {string} [alt] — alt-текст для изображений
	 * @prop {string} [label] — подпись под медиа (например, 'Было' или 'Стало')
	 */
	export let src;
	export let mime;
	export let alt = '';
	export let label = '';

	/** Проверяет, является ли файл видео по MIME-типу */
	const isVideo = mime.startsWith('video/');
</script>

<div class="media-wrapper">
	{#if isVideo}
		<video {src} controls preload="metadata" class="media-element" aria-label={label} autoplay />
	{:else}
		<img {src} {alt} loading="lazy" class="media-element" aria-label={label} />
	{/if}
	{#if label}
		<span class="media-label">{label}</span>
	{/if}
</div>

<style lang="scss">
	.media-wrapper {
		display: flex;
		flex-direction: column;
		gap: rem(10);
		width: 100%;
	}
	.media-element {
		width: 100%;
		height: rem(200);
		object-fit: cover;
	}
	.media-label {
		color: #ff6500;
		font-size: rem(18);
		font-weight: 600;
		text-align: center;
	}
</style>
