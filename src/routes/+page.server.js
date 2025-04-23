import { STRAPI_URL } from '$lib/utils/BASE';

export async function load() {
	const introResponse = await fetch(`${STRAPI_URL}/api/intro?populate=*`);
	const intro = await introResponse.json();

	const worksResponse = await fetch(`${STRAPI_URL}/api/works?pagination[limit]=4&sort[0]=createdAt:desc&populate=*`);
	const works = await worksResponse.json();

	const reviewsResponse = await fetch(`${STRAPI_URL}/api/reviews`);
	const reviews = await reviewsResponse.json();

	return {
		intro: intro.data,
		works: works.data,
		reviews: reviews.data
	};
}
