import { S as STRAPI_URL } from "../../../chunks/BASE.js";
async function load() {
  const servicesResponse = await fetch(`${STRAPI_URL}/api/services?populate=*`);
  const services = await servicesResponse.json();
  return {
    services: services.data
  };
}
export {
  load
};
