import * as server from '../entries/pages/works/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/works/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/works/+page.server.js";
export const imports = ["_app/immutable/nodes/4.BcenwLzl.js","_app/immutable/chunks/OQvQ4M4C.js","_app/immutable/chunks/BrGj9poG.js","_app/immutable/chunks/DMjzTZlO.js","_app/immutable/chunks/BcwJbfon.js","_app/immutable/chunks/Mc3Rjreu.js","_app/immutable/chunks/BLfM7RU7.js","_app/immutable/chunks/BJw3UchU.js","_app/immutable/chunks/Qv4Y_cd8.js","_app/immutable/chunks/BDDeOyek.js"];
export const stylesheets = ["_app/immutable/assets/Media.CHqklXWZ.css","_app/immutable/assets/4.BsrcEIjz.css"];
export const fonts = [];
