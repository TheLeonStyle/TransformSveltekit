import { S as STRAPI_URL } from "../../chunks/BASE.js";
async function load() {
  const socialResponse = await fetch(`${STRAPI_URL}/api/social`);
  const social = await socialResponse.json();
  const headerResponse = await fetch(`${STRAPI_URL}/api/header?populate=*`);
  const header = await headerResponse.json();
  const footerResponse = await fetch(`${STRAPI_URL}/api/footer`);
  const footer = await footerResponse.json();
  return {
    social: social.data,
    header: header.data,
    footer: footer.data
  };
}
export {
  load
};
