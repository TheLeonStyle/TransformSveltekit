import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.CCyWQZ5W.js","_app/immutable/chunks/OQvQ4M4C.js","_app/immutable/chunks/BrGj9poG.js","_app/immutable/chunks/DMjzTZlO.js","_app/immutable/chunks/BcwJbfon.js","_app/immutable/chunks/DBec67zw.js","_app/immutable/chunks/BLfM7RU7.js","_app/immutable/chunks/DiQtQLlC.js","_app/immutable/chunks/Qv4Y_cd8.js"];
export const stylesheets = ["_app/immutable/assets/0.ZDZKwJ9x.css"];
export const fonts = [];
