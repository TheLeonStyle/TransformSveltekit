import { D as attr, E as escape_html, F as stringify, C as pop, z as push, G as store_get, I as unsubscribe_stores } from "../../chunks/index.js";
import { m as menuStore, a as menuActive } from "../../chunks/stores.js";
import "aos";
import "../../chunks/client.js";
function Header($$payload, $$props) {
  push();
  const { dataHeader, dataContacts } = $$props;
  $$payload.out += `<header class="header svelte-17s975j"><div class="header__container svelte-17s975j"><a href="/" class="header__logo svelte-17s975j"${attr("aria-label", `${stringify(dataHeader.title)} – ${stringify(dataHeader.subtitle)}`)}><i class="header__icon icon-logo svelte-17s975j" aria-hidden="true"></i> <p data-aos="fade-left" class="svelte-17s975j">${escape_html(dataHeader.title)} <span class="svelte-17s975j">${escape_html(dataHeader.subtitle)}</span></p></a> <nav class="header__nav svelte-17s975j" aria-label="Основная навигация" data-aos="fade-down"><a href="/services" class="header__link svelte-17s975j">Услуги</a> <a href="/works" class="header__link svelte-17s975j">Наши работы</a> <button class="header__link svelte-17s975j" type="button" aria-controls="reviews" aria-label="Перейти к разделу отзывов" aria-expanded="false">Отзывы</button> <button class="header__link svelte-17s975j" type="button" aria-controls="contacts" aria-label="Перейти к разделу контактов" aria-expanded="false">Контакты</button> <a${attr("href", `tel:${stringify(dataContacts.phone)}`)} class="header__link header__link-phone header__icon icon-phone svelte-17s975j" target="_blank"${attr("aria-label", `Позвонить ${stringify(dataContacts.phone)}`)}></a></nav> <button class="header__burger svelte-17s975j" type="button" aria-label="Открыть главное меню" aria-controls="mobile-menu"${attr("aria-expanded", menuStore.isOpen)}><span aria-hidden="true" class="svelte-17s975j"></span></button></div></header>`;
  pop();
}
function Footer($$payload, $$props) {
  push();
  const { dataSocial, dataFooter } = $$props;
  $$payload.out += `<footer class="footer svelte-9pemxd" aria-labelledby="footer-logo-label"><div class="footer__container svelte-9pemxd"><div class="footer__logo"><a href="/" aria-label="Главная страница — Название вашего сайта"><i class="footer__icon icon-logo svelte-9pemxd" aria-hidden="true"></i></a></div> <address class="footer__info svelte-9pemxd"><p class="footer__text svelte-9pemxd">${escape_html(dataFooter.address)}</p> <p class="footer__text svelte-9pemxd">${escape_html(dataFooter.copyright)}</p></address> <nav class="footer__socials svelte-9pemxd" aria-label="Социальные сети"><a${attr("href", dataSocial.whatsapp)} class="footer__social footer__icon icon-whatsapp svelte-9pemxd" aria-label="Перейти в WhatsApp" target="_blank">WhatsApp</a> <a${attr("href", dataSocial.telegram)} class="footer__social footer__icon icon-telegram svelte-9pemxd" aria-label="Перейти в Telegram" target="_blank">Telegram</a> <a${attr("href", `tel:${stringify(dataSocial.phone)}`)} class="footer__social footer__icon icon-phone svelte-9pemxd"${attr("aria-label", `Позвонить ${stringify(dataSocial.phone)}`)} target="_blank">Звонок</a></nav></div> <p class="footer__developer svelte-9pemxd">Разработка сайта: <a href="https://skyflux.ru" class="footer__developer svelte-9pemxd" aria-label="SkyFlux Agency — веб-студия" target="_blank">SkyFlux Agency</a></p></footer>`;
  pop();
}
function Menu($$payload, $$props) {
  push();
  const { dataSocial } = $$props;
  $$payload.out += `<dialog class="menu svelte-1gh8pis"><dialog class="menu__content svelte-1gh8pis"><nav class="menu__nav svelte-1gh8pis"><a href="/services" class="menu__link svelte-1gh8pis">Услуги</a> <a href="/works" class="menu__link svelte-1gh8pis">Наши работы</a> <button class="menu__link svelte-1gh8pis">Отзывы</button> <button class="menu__link svelte-1gh8pis">Контакты</button> <a${attr("href", `tel:${stringify(dataSocial.phone)}`)} class="menu__link menu__link-phone menu__icon icon-phone svelte-1gh8pis">${escape_html(dataSocial.phone)}</a></nav></dialog></dialog>`;
  pop();
}
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  const { data, children } = $$props;
  $$payload.out += `<div class="wrapper svelte-9346hb">`;
  Header($$payload, {
    dataHeader: data.header,
    dataContacts: data.social
  });
  $$payload.out += `<!----> <main class="svelte-9346hb">`;
  if (store_get($$store_subs ??= {}, "$menuActive", menuActive)) {
    $$payload.out += "<!--[-->";
    Menu($$payload, { dataSocial: data.social });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  children($$payload, { dataSocial: data.social });
  $$payload.out += `<!----></main> `;
  Footer($$payload, {
    dataSocial: data.social,
    dataFooter: data.footer
  });
  $$payload.out += `<!----></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
