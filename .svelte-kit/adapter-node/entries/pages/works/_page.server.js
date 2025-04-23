import { S as STRAPI_URL } from "../../../chunks/BASE.js";
async function load() {
  const categoriesResponse = await fetch(`${STRAPI_URL}/api/categories`);
  const categories = await categoriesResponse.json();
  return {
    categories: categories.data
  };
}
export {
  load
};
