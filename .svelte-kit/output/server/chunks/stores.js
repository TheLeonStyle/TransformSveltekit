import { w as writable } from "./index2.js";
const menuActive = writable(false);
const menuStore = {};
const currentCategory = writable("Все");
export {
  menuActive as a,
  currentCategory as c,
  menuStore as m
};
