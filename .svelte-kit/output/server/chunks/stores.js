import { w as writable } from "./index2.js";
const menuActive = writable(false);
const currentCategory = writable("Все");
export {
  currentCategory as c,
  menuActive as m
};
