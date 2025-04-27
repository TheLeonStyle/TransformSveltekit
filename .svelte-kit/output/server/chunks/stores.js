import { w as writable } from "./index2.js";
const menuActive = writable(false);
const modalActive = writable(false);
const currentCategory = writable("Все");
export {
  modalActive as a,
  currentCategory as c,
  menuActive as m
};
