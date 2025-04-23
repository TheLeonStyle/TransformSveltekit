import { S as STRAPI_URL } from './BASE-CQVHS4Bg.js';

async function load() {
  const servicesResponse = await fetch(`${STRAPI_URL}/api/services?populate=*`);
  const services = await servicesResponse.json();
  return {
    services: services.data
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D_Bajoxu.js')).default;
const server_id = "src/routes/services/+page.server.js";
const imports = ["_app/immutable/nodes/3.I0hNTzZl.js","_app/immutable/chunks/OQvQ4M4C.js","_app/immutable/chunks/BrGj9poG.js","_app/immutable/chunks/Mc3Rjreu.js"];
const stylesheets = ["_app/immutable/assets/3.Br0hN2p5.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=3-iokzbKwY.js.map
