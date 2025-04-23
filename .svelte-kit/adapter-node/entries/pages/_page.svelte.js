import { M as attr_style, E as escape_html, D as attr, C as pop, z as push, N as fallback, O as bind_props, P as ensure_array_like, F as stringify, Q as attr_class, R as head } from "../../chunks/index.js";
import { S as STRAPI_URL } from "../../chunks/BASE.js";
/* empty css                                               */
import "keen-slider";
function Intro($$payload, $$props) {
  push();
  const { dataIntro } = $$props;
  $$payload.out += `<section class="intro svelte-1ku69g5" aria-labelledby="intro-title"${attr_style(`background-image: url(${STRAPI_URL}${dataIntro.background.url})`)}><div class="intro__container svelte-1ku69g5"><div class="intro__wrapper svelte-1ku69g5"><div class="intro__content svelte-1ku69g5" aria-labelledby="intro-title" data-aos="fade-down"><h1 id="intro-title" class="intro__title svelte-1ku69g5" data-aos="fade-down">${escape_html(dataIntro.title)}</h1> <p class="intro__subtitle svelte-1ku69g5" data-aos="fade-down">${escape_html(dataIntro.subtitle)}</p> <a href="/services" class="intro__button svelte-1ku69g5"${attr("aria-label", dataIntro.button)} data-aos="fade-down">${escape_html(dataIntro.button)}</a></div> <div class="intro__outer svelte-1ku69g5"><div class="intro__inner svelte-1ku69g5"><h2 class="intro__text svelte-1ku69g5" data-aos="fade-right" data-aos-delay="300">Преображаем</h2> <ul class="intro__items svelte-1ku69g5" data-aos="fade-right" data-aos-delay="600"><li class="intro__item svelte-1ku69g5" data-aos="fade-right" data-aos-delay="1000"><a href="/works" class="intro__link svelte-1ku69g5" aria-label="Показать работы: Офисы">Офисы</a></li> <li class="intro__item svelte-1ku69g5" data-aos="fade-right" data-aos-delay="1000"><a href="/works" class="intro__link svelte-1ku69g5" aria-label="Показать работы: Дома">Дома</a></li> <li class="intro__item svelte-1ku69g5" data-aos="fade-right" data-aos-delay="1000"><a href="/works" class="intro__link svelte-1ku69g5" aria-label="Показать работы: Квартиры">Квартиры</a></li></ul></div> <p class="intro__locate svelte-1ku69g5" data-aos="fade-left" data-aos-delay="600">${escape_html(dataIntro.locate)}</p></div></div></div></section>`;
  pop();
}
function Media($$payload, $$props) {
  push();
  let src = $$props["src"];
  let mime = $$props["mime"];
  let alt = fallback($$props["alt"], "");
  let label = fallback($$props["label"], "");
  const isVideo = mime.startsWith("video/");
  $$payload.out += `<div class="media-wrapper svelte-acd91i">`;
  if (isVideo) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<video${attr("src", src)} controls preload="metadata" class="media-element svelte-acd91i"${attr("aria-label", label)} autoplay></video>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<img${attr("src", src)}${attr("alt", alt)} loading="lazy" class="media-element svelte-acd91i"${attr("aria-label", label)}>`;
  }
  $$payload.out += `<!--]--> `;
  if (label) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<span class="media-label svelte-acd91i">${escape_html(label)}</span>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { src, mime, alt, label });
  pop();
}
function Works($$payload, $$props) {
  const { dataWorks } = $$props;
  const each_array = ensure_array_like(dataWorks);
  $$payload.out += `<section class="works svelte-w2sfcq" aria-labelledby="works-heading"><div class="works__container svelte-w2sfcq"><h2 id="works-heading" class="works__heading heading svelte-w2sfcq" data-aos="fade-up">Наши работы</h2> <p class="works__subheading svelte-w2sfcq" data-aos="fade-up">Уже успешно преобразили</p> <ul class="works__items svelte-w2sfcq"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let work = each_array[$$index];
    $$payload.out += `<li class="works__item svelte-w2sfcq"${attr("aria-labelledby", `work-title-${stringify(work.id)}`)} data-aos="zoom-in"><div class="works__text svelte-w2sfcq"><h3${attr("id", `work-title-${stringify(work.id)}`)} class="works__title svelte-w2sfcq">${escape_html(work.title)}</h3> <p class="works__subtitle svelte-w2sfcq">${escape_html(work.subtitle)}</p></div> <div class="works__content svelte-w2sfcq"><div class="works__image svelte-w2sfcq">`;
    Media($$payload, {
      src: `${STRAPI_URL}${work.before.url}`,
      mime: work.before.mime,
      alt: "Начальная работа",
      label: "Было"
    });
    $$payload.out += `<!----></div> <span class="works__logo icon-logo svelte-w2sfcq" aria-hidden="true"></span> <div class="works__image svelte-w2sfcq">`;
    Media($$payload, {
      src: `${STRAPI_URL}${work.before.url}`,
      mime: work.before.mime,
      alt: "Конечная работа",
      label: "Стало"
    });
    $$payload.out += `<!----></div></div></li>`;
  }
  $$payload.out += `<!--]--></ul></div></section>`;
}
function Reviews($$payload, $$props) {
  push();
  const { dataReviews } = $$props;
  let currentSlide = 0;
  const each_array = ensure_array_like(dataReviews);
  const each_array_1 = ensure_array_like(Array(dataReviews.length));
  $$payload.out += `<section class="reviews svelte-1g8s5dw" id="reviews" aria-labelledby="reviews-heading"><div class="reviews__container svelte-1g8s5dw"><h2 id="reviews-heading" class="reviews__heading heading svelte-1g8s5dw" data-aos="fade-right">Отзывы клиентов</h2> <ul class="reviews__items svelte-1g8s5dw" aria-roledescription="carousel" aria-label="Отзывы клиентов" aria-live="polite" data-aos="zoom-in"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let review = each_array[index];
    $$payload.out += `<li class="reviews__item keen-slider__slide svelte-1g8s5dw" aria-roledescription="slide"${attr("aria-label", `Слайд ${index + 1} из ${dataReviews.length}`)}><div class="reviews__author svelte-1g8s5dw"><p class="reviews__name svelte-1g8s5dw">${escape_html(review.name)}</p> <p class="reviews__role svelte-1g8s5dw">${escape_html(review.role)}</p></div> <div class="reviews__content svelte-1g8s5dw"><p class="reviews__text svelte-1g8s5dw">${escape_html(review.text)}</p></div></li>`;
  }
  $$payload.out += `<!--]--></ul> <nav class="reviews__nav svelte-1g8s5dw" aria-label="Навигация по отзывам"><!--[-->`;
  for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
    each_array_1[index];
    $$payload.out += `<button type="button"${attr_class("reviews__bullet svelte-1g8s5dw", void 0, { "active": index === currentSlide })}${attr("aria-label", `Перейти к отзыву ${index + 1}`)} aria-controls="reviews" aria-roledescription="carousel button"></button>`;
  }
  $$payload.out += `<!--]--></nav></div></section>`;
  pop();
}
function Contacts($$payload, $$props) {
  push();
  const { dataContacts } = $$props;
  $$payload.out += `<section class="contacts svelte-1ng6euk" id="contacts" aria-labelledby="contacts-heading"><div class="contacts__container svelte-1ng6euk"><h2 id="contacts-heading" class="contacts__heading heading svelte-1ng6euk" data-aos="fade-up">Контакты</h2> <ul class="contacts__items svelte-1ng6euk"><li class="contacts__item svelte-1ng6euk"><a${attr("href", `tel:${stringify(dataContacts.phone)}`)} class="contacts__link svelte-1ng6euk"${attr("aria-label", `Позвонить ${stringify(dataContacts.phone)}`)} target="_blank"><i class="contacts__icon icon-phone svelte-1ng6euk" aria-hidden="true"></i> ${escape_html(dataContacts.phone)}</a></li> <li class="contacts__item svelte-1ng6euk"><a${attr("href", dataContacts.dzen)} class="contacts__link svelte-1ng6euk" aria-label="Перейти на Дзен" target="_blank"><i class="contacts__icon icon-star svelte-1ng6euk" aria-hidden="true"></i> Наш Дзен</a></li> <li class="contacts__item svelte-1ng6euk"><a${attr("href", `mailto:${stringify(dataContacts.email)}`)} class="contacts__link svelte-1ng6euk"${attr("aria-label", `Написать на почту ${stringify(dataContacts.email)}`)} target="_blank"><i class="contacts__icon icon-gmail svelte-1ng6euk" aria-hidden="true"></i> ${escape_html(dataContacts.email)}</a></li></ul></div></section>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  const { data } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Преображение.рф — ремонт под ключ в Москве | Опытные мастера, современные технологии</title>`;
    $$payload2.out += `<meta name="description" content="Сообщество мастеров «Преображение» выполняет ремонт квартир, домов и офисов в Москве и области. Вековые традиции отделки в сочетании с современными технологиями. Честные цены, примеры работ и отзывы клиентов">`;
  });
  Intro($$payload, { dataIntro: data.intro });
  $$payload.out += `<!----> `;
  Works($$payload, { dataWorks: data.works });
  $$payload.out += `<!----> `;
  Reviews($$payload, { dataReviews: data.reviews });
  $$payload.out += `<!----> `;
  Contacts($$payload, { dataContacts: data.social });
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
