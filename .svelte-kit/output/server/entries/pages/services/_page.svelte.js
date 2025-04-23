import { P as ensure_array_like, R as head, E as escape_html, C as pop, z as push } from "../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  const { data } = $$props;
  let services = [];
  services = data.services;
  const each_array = ensure_array_like(services);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Портфолио выполненных ремонтов — Преображение | Дома, квартиры, офисы</title>`;
    $$payload2.out += `<meta name="description" content="Посмотрите реальные фото до и после: квартиры, офисы, коттеджи. Более 10 успешных проектов с примерами работ и описанием. Качественно, в срок, под ключ">`;
  });
  $$payload.out += `<section class="services svelte-154jskj" aria-labelledby="services-heading"><div class="services__container svelte-154jskj"><h2 id="services-heading" class="services__heading heading">Услуги</h2> <!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let service = each_array[$$index_1];
    const each_array_1 = ensure_array_like(service.Services);
    $$payload.out += `<h3 class="services__category svelte-154jskj">${escape_html(service.Category)}</h3> <ul class="services__items svelte-154jskj"><!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let item = each_array_1[$$index];
      $$payload.out += `<li class="services__item svelte-154jskj"><div class="services__text"><h4 class="services__title svelte-154jskj">${escape_html(item.title)}</h4> <p class="services__subtitle svelte-154jskj">${escape_html(item.subtitle)}</p></div> <p class="services__price svelte-154jskj">${escape_html(item.price)} <span>${escape_html(item.prefix)}</span></p></li>`;
    }
    $$payload.out += `<!--]--></ul>`;
  }
  $$payload.out += `<!--]--></div></section>`;
  pop();
}
export {
  _page as default
};
