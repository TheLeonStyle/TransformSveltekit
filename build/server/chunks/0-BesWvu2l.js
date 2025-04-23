import { S as STRAPI_URL } from './BASE-CQVHS4Bg.js';

async function load() {
  const socialResponse = await fetch(`${STRAPI_URL}/api/social`);
  const social = await socialResponse.json();
  const headerResponse = await fetch(`${STRAPI_URL}/api/header?populate=*`);
  const header = await headerResponse.json();
  const footerResponse = await fetch(`${STRAPI_URL}/api/footer`);
  const footer = await footerResponse.json();
  return {
    social: social.data,
    header: header.data,
    footer: footer.data
  };
}

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-ghjyj_XP.js')).default;
const server_id = "src/routes/+layout.server.js";
const imports = ["_app/immutable/nodes/0.CJUJl-Pq.js","_app/immutable/chunks/OQvQ4M4C.js","_app/immutable/chunks/BrGj9poG.js","_app/immutable/chunks/DMjzTZlO.js","_app/immutable/chunks/BcwJbfon.js","_app/immutable/chunks/DBec67zw.js","_app/immutable/chunks/Bd5de5Ui.js","_app/immutable/chunks/DUgI_Jw8.js"];
const stylesheets = ["_app/immutable/assets/0.CEiIkK5-.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=0-BesWvu2l.js.map
