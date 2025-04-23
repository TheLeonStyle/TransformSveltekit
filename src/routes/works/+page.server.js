import { STRAPI_URL } from '$lib/utils/BASE';

export async function load() {
	const categoriesResponse = await fetch(`${STRAPI_URL}/api/categories`);
	const categories = await categoriesResponse.json();

	return {
		categories: categories.data
	};
}
