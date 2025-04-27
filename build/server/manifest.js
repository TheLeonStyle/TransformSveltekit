const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","fonts/IconFonts/icon-fonts.woff","fonts/IconFonts/icon-fonts.woff2","fonts/Miroslav/Bold.ttf","fonts/Miroslav/Regular.ttf","fonts/Onest/Onest-Black.woff2","fonts/Onest/Onest-Regular.woff2","image.png","img/intro/bg.webp","img/reviews/1.jpg","img/reviews/2.webp","img/reviews/3.webp","img/reviews/4.webp","img/reviews/5.webp","img/reviews/6.webp","img/works/1.webp","img/works/2.webp","img/works/3.webp","img/works/4.webp","img/works/5.webp","img/works/6.webp","robots.txt","sitemap.xml"]),
	mimeTypes: {".svg":"image/svg+xml",".woff":"font/woff",".woff2":"font/woff2",".ttf":"font/ttf",".png":"image/png",".webp":"image/webp",".jpg":"image/jpeg",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.DCG78xg_.js",app:"_app/immutable/entry/app.BcBplpcd.js",imports:["_app/immutable/entry/start.DCG78xg_.js","_app/immutable/chunks/CdiaeFu6.js","_app/immutable/chunks/BrGj9poG.js","_app/immutable/chunks/BcwJbfon.js","_app/immutable/chunks/DBec67zw.js","_app/immutable/entry/app.BcBplpcd.js","_app/immutable/chunks/BrGj9poG.js","_app/immutable/chunks/OQvQ4M4C.js","_app/immutable/chunks/DMjzTZlO.js","_app/immutable/chunks/BcwJbfon.js","_app/immutable/chunks/B7fzv6_w.js","_app/immutable/chunks/BDDeOyek.js","_app/immutable/chunks/DBec67zw.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-7Mu16QsY.js')),
			__memo(() => import('./chunks/1-C3QdgALf.js')),
			__memo(() => import('./chunks/2-RO-wfjjg.js')),
			__memo(() => import('./chunks/3-iokzbKwY.js')),
			__memo(() => import('./chunks/4-Baa3USUR.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/works",
				pattern: /^\/works\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
