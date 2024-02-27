import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_5ix5AS1n.mjs';
import 'kleur/colors';
import 'cssesc';
import { $ as $$Container, b as $$BlogPostsList, a as $$Page } from './_slug__PfJikTN5.mjs';
/* empty css                            */

const $$Astro = createAstro("https://xzstudios.se/stories");
const $$Stories = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Stories;
  const allPosts = (await Astro2.glob(/* #__PURE__ */ Object.assign({"./stories/how-to-make-money-as-a-freelancer copy 2.md": () => import('./how-to-make-money-as-a-freelancer copy 2_pN0T9Prc.mjs').then(n => n.h),"./stories/how-to-make-money-as-a-freelancer copy 3.md": () => import('./how-to-make-money-as-a-freelancer copy 3_-zK1950m.mjs'),"./stories/how-to-make-money-as-a-freelancer copy 4.md": () => import('./how-to-make-money-as-a-freelancer copy 4_y4eEsn4G.mjs'),"./stories/how-to-make-money-as-a-freelancer copy 5.md": () => import('./how-to-make-money-as-a-freelancer copy 5_bdWf-i34.mjs'),"./stories/how-to-make-money-as-a-freelancer copy 6.md": () => import('./how-to-make-money-as-a-freelancer copy 6_rsE9Phsb.mjs'),"./stories/how-to-make-money-as-a-freelancer copy.md": () => import('./how-to-make-money-as-a-freelancer copy_TJjhUl8m.mjs'),"./stories/introducing-xz-studios.md": () => import('./introducing-xz-studios_s8E_V2Fj.mjs'),"./stories/top-3-resources-for-free-photos.md": () => import('./top-3-resources-for-free-photos__qNyvKSw.mjs'),"./stories/web-design-trends-for-2023.md": () => import('./web-design-trends-for-2023_z00gygw1.mjs')}), () => "./stories/*.{md,mdx}")).sort(
    (a, b) => new Date(b.frontmatter.publishedAt).valueOf() - new Date(a.frontmatter.publishedAt).valueOf()
  );
  let initialPostCount = 3;
  const seo = {
    title: "STORIES by XZ",
    description: "Insights and reflection"
  };
  let displayedPosts = allPosts.slice(0, initialPostCount);
  function loadMorePosts() {
    const nextPosts = allPosts.slice(displayedPosts.length, displayedPosts.length + initialPostCount);
    displayedPosts = [...displayedPosts, ...nextPosts];
    console.log("du klickade");
  }
  return renderTemplate`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"><link rel="stylesheet" href="https://use.typekit.net/iza3jks.css">${renderComponent($$result, "Layout", $$Page, { "seo": seo, "data-astro-cid-na7xuwe2": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-na7xuwe2": true }, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<section id="stories-header" data-astro-cid-na7xuwe2><div class="highlightTextContainer" data-astro-cid-na7xuwe2><h1 class="fade-highlight" data-astro-cid-na7xuwe2>our stories</h1><p class="subheader-stories-index" data-astro-cid-na7xuwe2>
When you explore, you create stories.
          Here are our insights and random reflections from exploring new marketing ideas around the world.</p><div class="red-divider" data-astro-cid-na7xuwe2></div></div></section>${renderComponent($$result3, "BlogPostsList", $$BlogPostsList, { "posts": allPosts, "data-astro-cid-na7xuwe2": true })}<div class="pagination-link" data-astro-cid-na7xuwe2><button id="see-more-btn"${addAttribute(loadMorePosts, "on:click")} data-astro-cid-na7xuwe2>Funnier posts below &nbsp;<span class="material-symbols-outlined" style="position: relative;bottom: -7px;" data-astro-cid-na7xuwe2>
expand_more
</span></button></div>` })}` })}<!-- Nedan skript är för att ladda ytterligare inlägg nedåt. Får funka tillsvidare, tills en ordentlig pagination är på plats.  -->`;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/stories/src/pages/stories.astro", void 0);

const $$file = "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/stories/src/pages/stories.astro";
const $$url = "/stories";

export { $$Stories as default, $$file as file, $$url as url };
