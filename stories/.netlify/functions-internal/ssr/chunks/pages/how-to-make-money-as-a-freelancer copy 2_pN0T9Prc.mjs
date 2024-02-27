import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, h as renderSlot, u as unescapeHTML } from '../astro_5ix5AS1n.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { f as formatDate, $ as $$Container, a as $$Page } from './_slug__PfJikTN5.mjs';
/* empty css                                                             */

const $$Astro$2 = createAstro("https://xzstudios.se/stories");
const $$RelatedPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$RelatedPosts;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="post-preview__link fade-in"${addAttribute(post.url, "href")} data-astro-cid-dpgbfi7r> <article class="post-preview__article" data-astro-cid-dpgbfi7r> <div class="post-preview__image-container" data-astro-cid-dpgbfi7r> <picture data-astro-cid-dpgbfi7r> <source${addAttribute(`${post.frontmatter.image.includes(".") ? post.frontmatter.image : post.frontmatter.image + ".webp"}`, "srcset")} type="image/webp" data-astro-cid-dpgbfi7r> <img class="post-preview__img"${addAttribute(`${post.frontmatter.image.includes(".") ? post.frontmatter.image : post.frontmatter.image + ".png"}`, "src")}${addAttribute(`Featured image for ${post.frontmatter.title}`, "alt")} data-astro-cid-dpgbfi7r> </picture> <h2 class="post-preview__title" data-astro-cid-dpgbfi7r>${post.frontmatter.title}</h2> <p class="post-preview__date" data-astro-cid-dpgbfi7r>${formatDate(post.frontmatter.publishedAt)}</p> </div> <div class="post-preview__text" data-astro-cid-dpgbfi7r> <p class="post-content__content" data-astro-cid-dpgbfi7r>${post.frontmatter.text}</p> </div> </article> </a> `;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/stories/src/components/RelatedPosts.astro", void 0);

const $$Astro$1 = createAstro("https://xzstudios.se/stories");
const $$RelatedPostsList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RelatedPostsList;
  const { posts, currentPostUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="related-posts-list" data-astro-cid-vekyrzi5> ${posts.filter((post) => post.url !== currentPostUrl).map((post) => renderTemplate`<li${addAttribute(post.url, "key")} data-astro-cid-vekyrzi5> ${renderComponent($$result, "RelatedPosts", $$RelatedPosts, { "post": post, "data-astro-cid-vekyrzi5": true })} </li>`)} </ul> `;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/stories/src/components/RelatedPostsList.astro", void 0);

const $$Astro = createAstro("https://xzstudios.se/stories");
const $$Post = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Post;
  const { frontmatter } = Astro2.props;
  const seo = {
    title: frontmatter.title,
    subtitle: frontmatter.subtitle,
    description: frontmatter.description,
    image: frontmatter.image
  };
  const allPosts = (await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/stories/how-to-make-money-as-a-freelancer copy 2.md": () => Promise.resolve().then(() => howToMakeMoneyAsAFreelancer_copy_2),"../pages/stories/how-to-make-money-as-a-freelancer copy 3.md": () => import('./how-to-make-money-as-a-freelancer copy 3_-zK1950m.mjs'),"../pages/stories/how-to-make-money-as-a-freelancer copy 4.md": () => import('./how-to-make-money-as-a-freelancer copy 4_y4eEsn4G.mjs'),"../pages/stories/how-to-make-money-as-a-freelancer copy 5.md": () => import('./how-to-make-money-as-a-freelancer copy 5_bdWf-i34.mjs'),"../pages/stories/how-to-make-money-as-a-freelancer copy 6.md": () => import('./how-to-make-money-as-a-freelancer copy 6_rsE9Phsb.mjs'),"../pages/stories/how-to-make-money-as-a-freelancer copy.md": () => import('./how-to-make-money-as-a-freelancer copy_TJjhUl8m.mjs'),"../pages/stories/introducing-xz-studios.md": () => import('./introducing-xz-studios_s8E_V2Fj.mjs'),"../pages/stories/top-3-resources-for-free-photos.md": () => import('./top-3-resources-for-free-photos__qNyvKSw.mjs'),"../pages/stories/web-design-trends-for-2023.md": () => import('./web-design-trends-for-2023_z00gygw1.mjs')}), () => "../pages/stories/*.{md,mdx}")).sort(
    (a, b) => new Date(b.frontmatter.publishedAt).valueOf() - new Date(a.frontmatter.publishedAt).valueOf()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "seo": seo, "data-astro-cid-gvpn4u4b": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/stories/" class="showAllPosts" data-astro-cid-gvpn4u4b>Show all stories</a> <h1 class="post-content__title" data-astro-cid-gvpn4u4b>${frontmatter.title}</h1> <p class="post-content__date" data-astro-cid-gvpn4u4b><span style="color: #C83C4E; font-weight: 700;font-style: normal;text-transform: uppercase;" data-astro-cid-gvpn4u4b>${frontmatter.chapter}&nbsp;</span>&nbsp;
<time data-astro-cid-gvpn4u4b>${formatDate(frontmatter.publishedAt)}</time>&nbsp;in ${frontmatter.location} </p> ${frontmatter.image && renderTemplate`<picture data-astro-cid-gvpn4u4b>  <source${addAttribute(`${frontmatter.image.includes(".") ? frontmatter.image : frontmatter.image + ".webp"}`, "srcset")} type="image/webp" data-astro-cid-gvpn4u4b>  <img width="100%" height="630" class="post-content__img" loading="eager"${addAttribute(`${frontmatter.image.includes(".") ? frontmatter.image : frontmatter.image + ".png"}`, "src")}${addAttribute(frontmatter.alt ? frontmatter.alt : "Post Image", "alt")} data-astro-cid-gvpn4u4b> </picture>`}${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-gvpn4u4b": true }, { "default": ($$result3) => renderTemplate` <article class="post-content__article" data-astro-cid-gvpn4u4b> <div class="post-content__top fade-in" data-astro-cid-gvpn4u4b> <!-- AKTIVERA NEDAN DEL OM VI VILL ANVÄNDA POST-TAGGAR FRAMÖVER --> <!-- {
          frontmatter.category && (
            <p class="post-content__category">
              <a href={\`/blog/category/\${slugify(frontmatter.category)}\`}>
                {frontmatter.category}
              </a>
            </p>
          )
        } --> <!-- <h1 class="post-content__title">{frontmatter.title}</h1> --> <h2 class="post-content__subtitle" data-astro-cid-gvpn4u4b>${frontmatter.subtitle}</h2> <!-- <h4 class="post-content__chapter">{frontmatter.chapter}</h4> --> </div> <div class="post-content__content flow fade-in" data-astro-cid-gvpn4u4b> ${renderSlot($$result3, $$slots["default"])} </div> </article> ` })} <div id="blog-BGbox" data-astro-cid-gvpn4u4b> <span style="font-weight: 600" ; data-astro-cid-gvpn4u4b>XZ STUDIOS</span> helps small businesses to make big impressions. We specialize in marketing, advertising and graphic design with focus on building brands. With our base in Malmö, we use the world as our inspiration to explore new ideas. Let’s turn thoughts into conversations – <strong class="btnOpenForm inline-contactForm" data-astro-cid-gvpn4u4b>we're just a message away!</strong></div> ${renderComponent($$result2, "RelatedPostsList", $$RelatedPostsList, { "posts": allPosts, "currentPostUrl": Astro2.props.url, "data-astro-cid-gvpn4u4b": true })} ` })} `;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/stories/src/layouts/Post.astro", void 0);

const html = "<h2 id=\"heading-2\">Heading 2</h2>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget gravida cum sociis natoque penatibus et magnis dis. Posuere morbi leo urna molestie at elementum eu facilisis sed. Lectus nulla at volutpat diam. Pharetra magna ac placerat vestibulum lectus. Turpis massa tincidunt dui ut ornare lectus sit amet. Pretium vulputate sapien nec sagittis. Mollis nunc sed id semper. Odio pellentesque diam volutpat commodo sed egestas. Mi sit amet mauris commodo quis. Ullamcorper morbi tincidunt ornare massa. Mi proin sed libero enim sed faucibus turpis. Eu consequat ac felis donec et. Ultricies integer quis auctor elit. Aliquam sem et tortor consequat id porta nibh.</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#F97583\">let</span><span style=\"color:#E1E4E8\"> foo </span><span style=\"color:#F97583\">=</span><span style=\"color:#9ECBFF\"> \"bar\"</span><span style=\"color:#E1E4E8\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">console.</span><span style=\"color:#B392F0\">log</span><span style=\"color:#E1E4E8\">(foo);</span></span></code></pre>\n<p><img src=\"https://unsplash.it/400/300\" alt=\"image\"></p>\n<p>Mi sit amet mauris commodo quis imperdiet massa. Cras tincidunt lobortis feugiat vivamus at augue. Lobortis feugiat vivamus at augue. Vulputate mi sit amet mauris. Congue mauris rhoncus aenean vel elit. Ut morbi tincidunt augue interdum velit euismod in. Viverra justo nec ultrices dui sapien eget. Magna fringilla urna porttitor rhoncus. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Sapien faucibus et molestie ac. Maecenas pharetra convallis posuere morbi leo urna. Mauris nunc congue nisi vitae suscipit tellus mauris a.</p>\n<p>Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Enim tortor at auctor urna nunc id cursus. Mattis enim ut tellus elementum sagittis vitae et leo duis. Sed libero enim sed faucibus turpis in eu mi bibendum. Turpis massa tincidunt dui ut ornare. Eu sem integer vitae justo. Feugiat nibh sed pulvinar proin. Sagittis nisl rhoncus mattis rhoncus urna neque. Aenean et tortor at risus viverra adipiscing at in. Sed ullamcorper morbi tincidunt ornare massa. Lorem ipsum dolor sit amet consectetur. Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Bibendum arcu vitae elementum curabitur vitae nunc sed. In egestas erat imperdiet sed euismod nisi. Tellus at urna condimentum mattis pellentesque. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Pellentesque sit amet porttitor eget dolor morbi non arcu risus.</p>\n<p>Dui ut ornare lectus sit amet est. Cursus turpis massa tincidunt dui ut. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vivamus at augue eget arcu. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Eget nullam non nisi est sit amet facilisis magna. Pellentesque elit eget gravida cum sociis. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Aliquam etiam erat velit scelerisque in dictum non. Quam viverra orci sagittis eu volutpat odio. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim.</p>\n<p>Nisl nunc mi ipsum faucibus vitae. Congue eu consequat ac felis donec et odio pellentesque. Sit amet purus gravida quis blandit turpis. In dictum non consectetur a. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque habitant morbi tristique senectus et netus et malesuada. Amet tellus cras adipiscing enim eu. Adipiscing bibendum est ultricies integer quis auctor elit. Augue lacus viverra vitae congue eu. Faucibus et molestie ac feugiat sed lectus vestibulum. At risus viverra adipiscing at in tellus. Tincidunt vitae semper quis lectus. Ultrices dui sapien eget mi. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Quisque id diam vel quam elementum pulvinar etiam non quam. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Massa id neque aliquam vestibulum morbi. Purus viverra accumsan in nisl nisi.</p>";

				const frontmatter = {"layout":"../../layouts/Post.astro","title":"Sneeze and freeze","image":"/images/freelance","publishedAt":"2021-01-01","category":"Freelance"};
				const file = "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/stories/src/pages/stories/how-to-make-money-as-a-freelancer copy 2.md";
				const url = "/stories/how-to-make-money-as-a-freelancer copy 2";
				function rawContent() {
					return "\n## Heading 2\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget gravida cum sociis natoque penatibus et magnis dis. Posuere morbi leo urna molestie at elementum eu facilisis sed. Lectus nulla at volutpat diam. Pharetra magna ac placerat vestibulum lectus. Turpis massa tincidunt dui ut ornare lectus sit amet. Pretium vulputate sapien nec sagittis. Mollis nunc sed id semper. Odio pellentesque diam volutpat commodo sed egestas. Mi sit amet mauris commodo quis. Ullamcorper morbi tincidunt ornare massa. Mi proin sed libero enim sed faucibus turpis. Eu consequat ac felis donec et. Ultricies integer quis auctor elit. Aliquam sem et tortor consequat id porta nibh.\n\n```js\nlet foo = \"bar\";\n\nconsole.log(foo);\n```\n\n![image](https://unsplash.it/400/300)\n\nMi sit amet mauris commodo quis imperdiet massa. Cras tincidunt lobortis feugiat vivamus at augue. Lobortis feugiat vivamus at augue. Vulputate mi sit amet mauris. Congue mauris rhoncus aenean vel elit. Ut morbi tincidunt augue interdum velit euismod in. Viverra justo nec ultrices dui sapien eget. Magna fringilla urna porttitor rhoncus. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Sapien faucibus et molestie ac. Maecenas pharetra convallis posuere morbi leo urna. Mauris nunc congue nisi vitae suscipit tellus mauris a.\n\nCommodo nulla facilisi nullam vehicula ipsum a arcu cursus. Enim tortor at auctor urna nunc id cursus. Mattis enim ut tellus elementum sagittis vitae et leo duis. Sed libero enim sed faucibus turpis in eu mi bibendum. Turpis massa tincidunt dui ut ornare. Eu sem integer vitae justo. Feugiat nibh sed pulvinar proin. Sagittis nisl rhoncus mattis rhoncus urna neque. Aenean et tortor at risus viverra adipiscing at in. Sed ullamcorper morbi tincidunt ornare massa. Lorem ipsum dolor sit amet consectetur. Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Bibendum arcu vitae elementum curabitur vitae nunc sed. In egestas erat imperdiet sed euismod nisi. Tellus at urna condimentum mattis pellentesque. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Pellentesque sit amet porttitor eget dolor morbi non arcu risus.\n\nDui ut ornare lectus sit amet est. Cursus turpis massa tincidunt dui ut. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vivamus at augue eget arcu. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Eget nullam non nisi est sit amet facilisis magna. Pellentesque elit eget gravida cum sociis. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Aliquam etiam erat velit scelerisque in dictum non. Quam viverra orci sagittis eu volutpat odio. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim.\n\nNisl nunc mi ipsum faucibus vitae. Congue eu consequat ac felis donec et odio pellentesque. Sit amet purus gravida quis blandit turpis. In dictum non consectetur a. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque habitant morbi tristique senectus et netus et malesuada. Amet tellus cras adipiscing enim eu. Adipiscing bibendum est ultricies integer quis auctor elit. Augue lacus viverra vitae congue eu. Faucibus et molestie ac feugiat sed lectus vestibulum. At risus viverra adipiscing at in tellus. Tincidunt vitae semper quis lectus. Ultrices dui sapien eget mi. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Quisque id diam vel quam elementum pulvinar etiam non quam. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Massa id neque aliquam vestibulum morbi. Purus viverra accumsan in nisl nisi.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"heading-2","text":"Heading 2"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Post, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const howToMakeMoneyAsAFreelancer_copy_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Post as $, howToMakeMoneyAsAFreelancer_copy_2 as h };
