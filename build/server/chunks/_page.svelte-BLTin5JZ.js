import { w as push, O as ensure_array_like, M as head, P as attr_class, F as attr, D as store_get, G as escape_html, E as unsubscribe_stores, y as pop } from './index-7QaxgENv.js';
import { c as currentCategory } from './stores-CRkvxhqN.js';
import './index2-Nipme-8l.js';

function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const { data } = $$props;
  const categories = data.categories.map((category) => category.title);
  let loadingData = true;
  const each_array = ensure_array_like(categories);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Услуги и цены на ремонт под ключ в Москве — Преображение</title>`;
    $$payload2.out += `<meta name="description" content="Предлагаем комплексный ремонт: малярные, плиточные, штукатурные и электромонтажные работы. Работаем по всей Москве и МО.">`;
  });
  $$payload.out += `<section class="works svelte-12a13az" aria-labelledby="works-heading"><div class="works__container svelte-12a13az"><h2 id="works-heading" class="works__heading heading svelte-12a13az">Наши работы</h2> <p class="works__subheading svelte-12a13az">Уже успешно преобразили</p> <nav class="works__filters svelte-12a13az" aria-label="Фильтры по категориям"><button${attr_class("works__filter-btn svelte-12a13az", void 0, {
    "active": store_get($$store_subs ??= {}, "$currentCategory", currentCategory) === "Все"
  })} type="button"${attr("aria-pressed", store_get($$store_subs ??= {}, "$currentCategory", currentCategory) === "Все")} aria-controls="works-list">Все</button> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let category = each_array[$$index];
    $$payload.out += `<button${attr_class("works__filter-btn svelte-12a13az", void 0, {
      "active": category === store_get($$store_subs ??= {}, "$currentCategory", currentCategory)
    })} type="button"${attr("aria-pressed", category === store_get($$store_subs ??= {}, "$currentCategory", currentCategory))} aria-controls="works-list">${escape_html(category)}</button>`;
  }
  $$payload.out += `<!--]--></nav> <ul class="works__items svelte-12a13az"${attr("aria-busy", loadingData)} aria-live="polite">`;
  {
    $$payload.out += "<!--[-->";
    const each_array_1 = ensure_array_like(Array(4));
    $$payload.out += `<!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      each_array_1[$$index_1];
      $$payload.out += `<li class="works__item svelte-12a13az"><svg role="img" width="100%" height="346" aria-labelledby="loading-aria" aria-busy="true" viewBox="0 0 710 346" preserveAspectRatio="none"><title id="loading-aria">Загрузка...</title><rect x="0" y="0" width="100%" height="100%" clip-path="url(#clip-path)" style="fill: url('#fill');"></rect><defs><clipPath id="clip-path"><rect x="48" y="8" rx="3" ry="3" width="88" height="6"></rect><rect x="48" y="26" rx="3" ry="3" width="52" height="6"></rect><rect x="0" y="56" rx="3" ry="3" width="410" height="6"></rect><rect x="0" y="72" rx="3" ry="3" width="380" height="6"></rect><rect x="0" y="88" rx="3" ry="3" width="178" height="6"></rect><circle cx="20" cy="20" r="20"></circle><rect x="0" y="0" rx="10" ry="10" width="710" height="346"></rect></clipPath><linearGradient id="fill"><stop offset="0.599964" stop-color="#f3f3f3" stop-opacity="1"><animate attributeName="offset" values="-2; -2; 1" keyTimes="0; 0.25; 1" dur="2s" repeatCount="indefinite"></animate></stop><stop offset="1.59996" stop-color="#ecebeb" stop-opacity="1"><animate attributeName="offset" values="-1; -1; 2" keyTimes="0; 0.25; 1" dur="2s" repeatCount="indefinite"></animate></stop><stop offset="2.59996" stop-color="#f3f3f3" stop-opacity="1"><animate attributeName="offset" values="0; 0; 3" keyTimes="0; 0.25; 1" dur="2s" repeatCount="indefinite"></animate></stop></linearGradient></defs></svg></li>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></ul></div></section>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BLTin5JZ.js.map
