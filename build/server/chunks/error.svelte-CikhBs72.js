import { w as push, G as escape_html, y as pop, J as getContext } from './index-7QaxgENv.js';
import { s as stores } from './client-Cxb37FgO.js';
import './exports-Cv9LZeD1.js';
import './index2-Nipme-8l.js';

({
  check: stores.updated.check
});
function context() {
  return getContext("__request__");
}
const page$1 = {
  get error() {
    return context().page.error;
  },
  get status() {
    return context().page.status;
  }
};
const page = page$1;
function Error$1($$payload, $$props) {
  push();
  $$payload.out += `<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`;
  pop();
}

export { Error$1 as default };
//# sourceMappingURL=error.svelte-CikhBs72.js.map
