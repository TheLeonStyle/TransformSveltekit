import { S as STRAPI_URL } from './BASE-CQVHS4Bg.js';

async function load() {
  const categoriesResponse = await fetch(`${STRAPI_URL}/api/categories`);
  const categories = await categoriesResponse.json();
  return {
    categories: categories.data
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DdI4qstU.js')).default;
const server_id = "src/routes/works/+page.server.js";
const imports = ["_app/immutable/nodes/4.BcenwLzl.js","_app/immutable/chunks/OQvQ4M4C.js","_app/immutable/chunks/BrGj9poG.js","_app/immutable/chunks/DMjzTZlO.js","_app/immutable/chunks/BcwJbfon.js","_app/immutable/chunks/Mc3Rjreu.js","_app/immutable/chunks/BLfM7RU7.js","_app/immutable/chunks/BJw3UchU.js","_app/immutable/chunks/Qv4Y_cd8.js","_app/immutable/chunks/BDDeOyek.js"];
const stylesheets = ["_app/immutable/assets/Media.CHqklXWZ.css","_app/immutable/assets/4.BsrcEIjz.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-Baa3USUR.js.map
