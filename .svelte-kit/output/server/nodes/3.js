import * as server from '../entries/pages/services/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/services/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/services/+page.server.js";
export const imports = ["_app/immutable/nodes/3.I0hNTzZl.js","_app/immutable/chunks/OQvQ4M4C.js","_app/immutable/chunks/BrGj9poG.js","_app/immutable/chunks/Mc3Rjreu.js"];
export const stylesheets = ["_app/immutable/assets/3.Br0hN2p5.css"];
export const fonts = [];
