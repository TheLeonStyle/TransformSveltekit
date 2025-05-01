
import root from '../root.js';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"ru\">\n\n<head>\n\t<meta charset=\"utf-8\" />\n\t<link rel=\"icon\" href=\"" + assets + "/favicon.svg\" />\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t" + head + "\n\n\t<meta name=\"robots\" content=\"index, follow\" />\n\t<meta name=\"author\" content=\"https://skyflux.ru\" />\n\n\t<!-- Open Graph -->\n\t<meta property=\"og:type\" content=\"website\" />\n\t<meta property=\"og:title\" content=\"Преображение.рф — ремонт под ключ в Москве | Опытные мастера, современные технологии\" />\n\t<meta property=\"og:description\" content=\"Сообщество мастеров «Преображение» выполняет ремонт квартир, домов и офисов в Москве и области. Вековые традиции отделки в сочетании с современными технологиями. Честные цены, примеры работ и отзывы клиентов\" />\n\t<meta property=\"og:url\" content=\"https://xn--80ablkf6afid.xn--p1ai/\" />\n\t<meta property=\"og:image\" content=\"https://xn--80ablkf6afid.xn--p1ai/image.png\" />\n\n\t<!-- Twitter Card -->\n\t<meta name=\"twitter:card\" content=\"summary_large_image\" />\n\t<meta name=\"twitter:title\" content=\"Преображение.рф — ремонт под ключ в Москве | Опытные мастера, современные технологии\" />\n\t<meta name=\"twitter:description\" content=\"Сообщество мастеров «Преображение» выполняет ремонт квартир, домов и офисов в Москве и области. Вековые традиции отделки в сочетании с современными технологиями. Честные цены, примеры работ и отзывы клиентов\" />\n\t<meta name=\"twitter:image\" content=\"https://xn--80ablkf6afid.xn--p1ai/image.png\" />\n\n\t<!-- Микроразметка Schema.org -->\n\t<script type=\"application/ld+json\">\n\t\t{\n\t\t\t\"@context\": \"https://schema.org\",\n\t\t\t\"@type\": \"WebSite\",\n\t\t\t\"name\": \"Преобрази.рф\",\n\t\t\t\"url\": \"https://xn--80ablkf6afid.xn--p1ai/\"\n\t\t}\n\t</script>\n\n\t<!-- Веб-Мастер -->\n\t<meta name=\"yandex-verification\" content=\"73a17f5488c4cc78\" />\n\n\t<!-- Yandex.Metrika counter -->\n\t<script type=\"text/javascript\">\n\t\t(function (m, e, t, r, i, k, a) {\n\t\t\tm[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };\n\t\t\tm[i].l = 1 * new Date();\n\t\t\tfor (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }\n\t\t\tk = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)\n\t\t})\n\t\t\t(window, document, \"script\", \"https://mc.yandex.ru/metrika/tag.js\", \"ym\");\n\n\t\tym(101308276, \"init\", {\n\t\t\tclickmap: true,\n\t\t\ttrackLinks: true,\n\t\t\taccurateTrackBounce: true,\n\t\t\twebvisor: true\n\t\t});\n\t</script>\n\t<noscript>\n\t\t<div><img src=\"https://mc.yandex.ru/watch/101308276\" style=\"position:absolute; left:-9999px;\" alt=\"\" /></div>\n\t</noscript>\n\t<!-- /Yandex.Metrika counter -->\n</head>\n\n<body data-sveltekit-preload-data=\"hover\">\n\t<div style=\"display: contents\">" + body + "</div>\n</body>\n\n</html>",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "pewr4u"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let init;
	

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
