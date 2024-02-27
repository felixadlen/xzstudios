import { renderers } from './renderers.mjs';
import { manifest } from './manifest_1uQEhrVD.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_VWmKUDZz.mjs');
const _page1 = () => import('./chunks/_slug__cg5uCU8z.mjs');
const _page2 = () => import('./chunks/stories_dbua0tZP.mjs');
const _page3 = () => import('./chunks/how-to-make-money-as-a-freelancer copy_zrPf-cWc.mjs');
const _page4 = () => import('./chunks/how-to-make-money-as-a-freelancer copy 2_AYn9GknD.mjs');
const _page5 = () => import('./chunks/how-to-make-money-as-a-freelancer copy 3_SJ0j-_Wz.mjs');
const _page6 = () => import('./chunks/how-to-make-money-as-a-freelancer copy 4_YNqLicbj.mjs');
const _page7 = () => import('./chunks/how-to-make-money-as-a-freelancer copy 5_oqIwN9QF.mjs');
const _page8 = () => import('./chunks/how-to-make-money-as-a-freelancer copy 6_ZMQXkSpY.mjs');
const _page9 = () => import('./chunks/introducing-xz-studios_5msylUgA.mjs');
const _page10 = () => import('./chunks/top-3-resources-for-free-photos_4aXd0GFG.mjs');
const _page11 = () => import('./chunks/web-design-trends-for-2023___Wou37X.mjs');
const _page12 = () => import('./chunks/index_Rcs-D9GP.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/stories/category/[slug].astro", _page1],
    ["src/pages/stories.astro", _page2],
    ["src/pages/stories/how-to-make-money-as-a-freelancer copy.md", _page3],
    ["src/pages/stories/how-to-make-money-as-a-freelancer copy 2.md", _page4],
    ["src/pages/stories/how-to-make-money-as-a-freelancer copy 3.md", _page5],
    ["src/pages/stories/how-to-make-money-as-a-freelancer copy 4.md", _page6],
    ["src/pages/stories/how-to-make-money-as-a-freelancer copy 5.md", _page7],
    ["src/pages/stories/how-to-make-money-as-a-freelancer copy 6.md", _page8],
    ["src/pages/stories/introducing-xz-studios.md", _page9],
    ["src/pages/stories/top-3-resources-for-free-photos.md", _page10],
    ["src/pages/stories/web-design-trends-for-2023.md", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "af22c172-d77b-41d4-b72d-db5757f1033a"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
serverEntrypointModule.start?.(_manifest, _args);

export { __astrojsSsrVirtualEntry as default, pageMap };
