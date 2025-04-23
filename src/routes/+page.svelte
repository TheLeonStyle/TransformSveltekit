<script>
	const { data } = $props();

	import Intro from '$lib/components/Home/Intro.svelte';
	import Works from '$lib/components/Home/Works.svelte';
	import Reviews from '$lib/components/Home/Reviews.svelte';
	import Contacts from '$lib/components/Home/Contacts.svelte';
</script>

<svelte:head>
	<title>Преображение.рф — ремонт под ключ в Москве | Опытные мастера, современные технологии</title>
	<meta
		name="description"
		content="Сообщество мастеров «Преображение» выполняет ремонт квартир, домов и офисов в Москве и области. Вековые традиции отделки в сочетании с современными технологиями. Честные цены, примеры работ и отзывы клиентов" />
</svelte:head>

<Intro dataIntro={data.intro} />
<Works dataWorks={data.works} />
<Reviews dataReviews={data.reviews} />
<Contacts dataContacts={data.social} />
