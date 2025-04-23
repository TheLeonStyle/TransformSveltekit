import { STRAPI_URL } from '$lib/utils/BASE';

export async function load() {
	const servicesResponse = await fetch(`${STRAPI_URL}/api/services?populate=*`);
	const services = await servicesResponse.json();

	return {
		services: services.data,
	};
}
