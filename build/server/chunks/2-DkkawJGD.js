import { S as STRAPI_URL } from './BASE-CQVHS4Bg.js';

async function load() {
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

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-gnt4Lyqp.js')).default;
const server_id = "src/routes/+page.server.js";
const imports = ["_app/immutable/nodes/2.DG9gA0ia.js","_app/immutable/chunks/OQvQ4M4C.js","_app/immutable/chunks/BrGj9poG.js","_app/immutable/chunks/DMjzTZlO.js","_app/immutable/chunks/BcwJbfon.js","_app/immutable/chunks/BLfM7RU7.js","_app/immutable/chunks/BJw3UchU.js","_app/immutable/chunks/Qv4Y_cd8.js","_app/immutable/chunks/BDDeOyek.js","_app/immutable/chunks/DBec67zw.js","_app/immutable/chunks/Mc3Rjreu.js","_app/immutable/chunks/B7fzv6_w.js"];
const stylesheets = ["_app/immutable/assets/Media.CHqklXWZ.css","_app/immutable/assets/2.CL-tK5_T.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=2-DkkawJGD.js.map
