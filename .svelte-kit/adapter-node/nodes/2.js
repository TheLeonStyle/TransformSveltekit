import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.S-_uhuQV.js","_app/immutable/chunks/OQvQ4M4C.js","_app/immutable/chunks/BrGj9poG.js","_app/immutable/chunks/DMjzTZlO.js","_app/immutable/chunks/BcwJbfon.js","_app/immutable/chunks/Bd5de5Ui.js","_app/immutable/chunks/DIv-uGx4.js","_app/immutable/chunks/Qv4Y_cd8.js","_app/immutable/chunks/BDDeOyek.js","_app/immutable/chunks/DBec67zw.js","_app/immutable/chunks/Mc3Rjreu.js","_app/immutable/chunks/B7fzv6_w.js"];
export const stylesheets = ["_app/immutable/assets/Media.CHqklXWZ.css","_app/immutable/assets/2.bCQvqeTf.css"];
export const fonts = [];
