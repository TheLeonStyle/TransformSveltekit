import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.m5oImg4b.js","_app/immutable/chunks/OQvQ4M4C.js","_app/immutable/chunks/BrGj9poG.js","_app/immutable/chunks/DMjzTZlO.js","_app/immutable/chunks/BcwJbfon.js","_app/immutable/chunks/DBec67zw.js","_app/immutable/chunks/Bd5de5Ui.js","_app/immutable/chunks/B9WBtz2K.js"];
export const stylesheets = ["_app/immutable/assets/0.Bwasjx8W.css"];
export const fonts = [];
