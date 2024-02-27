import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, f as renderComponent, g as renderHead, h as renderSlot, u as unescapeHTML, F as Fragment } from '../astro_5ix5AS1n.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
/* empty css                                                             */
import { stripHeadings, stripHeadingsCode } from '@igor.dvlpr/strip-headings';
import { stripHtmlCode } from '@igor.dvlpr/strip-html';
import { stripHeadings as stripHeadings$1, stripHeadingsCode as stripHeadingsCode$1 } from '@igor.dvlpr/strip-html-headings';
/* empty css                            */
/* empty css                           */

const settings = {
  site: "https://xzstudios.se/stories",
  name: "XZ STUDIOS",
  title: "STORIES",
  description: "Site description",
  showLittleSticksPlug: false
};

const $$Astro$b = createAstro("https://xzstudios.se/stories");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const title = Astro2.props.title || settings.title;
  const description = Astro2.props.description || settings.description;
  const canonicalURL = Astro2.props.canonicalURL || new URL(Astro2.url.pathname, Astro2.site);
  const image = new URL(Astro2.props.image || "./social.png", Astro2.site);
  return renderTemplate`<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><!-- Favicon --><link rel="icon" type="image/svg" href="/favicon.svg"><!-- Primary Meta Tags --><title>${title || settings.title}</title><meta name="title"${addAttribute(title || settings.title, "content")}><meta name="description"${addAttribute(description || settings.description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- settingsmap --><link rel="sitemap" href="/sitemap.xml"><!-- RSS --><link rel="alternate" type="application/rss+xml"${addAttribute(`${settings.name} Blog`, "title")}${addAttribute(`${settings.url}/feed/blog.xml`, "href")}><!-- Canonical --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(image, "content")}><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preload" href="https://fonts.googleapis.com/icon?family=Material+Icons" as="style" onload="this.onload=null;this.rel='stylesheet'">${maybeRenderHead()}<noscript><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" type="text/css"></noscript><link rel="preload" href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" type="text/css"></noscript><link rel="stylesheet" href="https://use.typekit.net/iza3jks.css">`;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/stories/src/components/BaseHead.astro", void 0);

const $$Astro$a = createAstro("https://xzstudios.se/stories");
const $$CreateCopyCodeButtons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$CreateCopyCodeButtons;
  return renderTemplate``;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/stories/src/components/CodeButtons/CreateCopyCodeButtons.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$9 = createAstro("https://xzstudios.se/stories");
const $$ThemeProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ThemeProvider;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["<!-- This is a simple script to check if there is a theme value in local storage. That way the theme stays with you between pages --><script>\n	const doc = document.firstElementChild;\n	const localStorageTheme = localStorage.getItem('theme');\n	if (localStorageTheme !== null) {\n		doc.setAttribute('color-scheme', localStorageTheme);\n	}\n<\/script>"])));
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/stories/src/components/ThemeToggleButton/ThemeProvider.astro", void 0);

const $$Astro$8 = createAstro("https://xzstudios.se/stories");
const $$Base = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Base;
  const { seo } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { ...seo })}${renderComponent($$result, "ThemeProvider", $$ThemeProvider, {})}<!-- This is and experimental global fade in animation that is being worked on, enable at your own risk of some jank --><!-- <FadeIn/> -->${renderComponent($$result, "CreateCopyCodeButtons", $$CreateCopyCodeButtons, {})}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["header"])} <main class="flow"> ${renderSlot($$result, $$slots["default"])} </main> ${renderSlot($$result, $$slots["footer"])} </body></html>`;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/stories/src/layouts/Base.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$7 = createAstro("https://xzstudios.se/stories");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<link rel="stylesheet" href="/menu.css">', `<div id="master-menu"></div> <script is:global>
function loadHTML(url, id, callback) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      const container = document.getElementById(id);
      container.innerHTML = data;
      executeScripts(container);
      if (callback) callback();
    })
    .catch(err => console.error(err));
};

function executeScripts(container) {
  // Find all script tags in the container
  const scripts = Array.from(container.querySelectorAll("script"));

  // For each script, create a new script element and copy attributes
  scripts.forEach(oldScript => {
    const newScript = document.createElement("script");
    Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));

    // If the script has a src attribute, set it anew to force it to load
    if (oldScript.src) {
      newScript.src = oldScript.src;
    } else {
      newScript.textContent = oldScript.textContent;
    }

    // Replace the old script with the new one
    oldScript.parentNode.replaceChild(newScript, oldScript);
  });
}

document.addEventListener('DOMContentLoaded', (event) => {
  loadHTML('/menu.html', 'master-menu', () => {
    loadExternalScript('/menu-script.js');
  });
});

function loadExternalScript(src) {
  const script = document.createElement('script');
  script.src = src;
  script.async = false; // To ensure the script is executed in the order it's loaded
  document.head.appendChild(script);
}


<\/script> <script is:global>
function loadHTML(url, id, callback) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      const container = document.getElementById(id);
      container.innerHTML = data;
      executeScripts(container);
      if (callback) callback();
    })
    .catch(err => console.error(err));
};

function executeScripts(container) {
  // Find all script tags in the container
  const scripts = Array.from(container.querySelectorAll("script"));

  // For each script, create a new script element and copy attributes
  scripts.forEach(oldScript => {
    const newScript = document.createElement("script");
    Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));

    // If the script has a src attribute, set it anew to force it to load
    if (oldScript.src) {
      newScript.src = oldScript.src;
    } else {
      newScript.textContent = oldScript.textContent;
    }

    // Replace the old script with the new one
    oldScript.parentNode.replaceChild(newScript, oldScript);
  });
}
document.addEventListener('DOMContentLoaded', (event) => {
  loadHTML('/menu.html', 'master-menu', () => {
    // Elements that are part of the dynamically loaded content
    const menuButton = document.querySelector("a#menu-icon");
    const menuBox = document.querySelector(".menu-box");
    const overlay = document.querySelector(".menu-box-overlay");
    const notification = document.querySelector(".notification-menu");

    let isMenuOpen = false;

    function openMenu() {
      menuBox.style.display = "block";
      menuButton.classList.add("close");
      menuBox.classList.add("active");
      isMenuOpen = true;
      menuButton.style.transform = "scale(1)";
      overlay.style.display = "block";
      updatePointerEvents("auto");
      if (notification) {
        notification.style.display = "none";
      }

      if (window.innerWidth <= 768) {
        document.body.style.overflow = "hidden";
        menuButton.style.transform = "scale(1.5)";
      }
    }

    function closeMenu() {
      menuBox.style.display = "none";
      menuButton.classList.remove("close");
      menuBox.classList.remove("active");
      isMenuOpen = false;
      menuButton.style.transform = "scale(1.4)";
      overlay.style.display = "none";
      updatePointerEvents("none");
      history.replaceState(null, null, window.location.pathname);
      if (notification) {
        notification.style.display = "none";
      }
      if (window.innerWidth <= 768) {
        document.body.style.overflow = "";
      }
    }

    function updatePointerEvents(value) {
      const menuItems = menuBox.querySelectorAll("li, a");
      menuItems.forEach((item) => {
        item.style.pointerEvents = value;
      });
    }

    if (menuButton) {
      menuButton.addEventListener("click", function (e) {
        e.preventDefault();
        if (isMenuOpen) {
          closeMenu();
        } else {
          openMenu();
        }
      });

      menuButton.addEventListener('mouseover', function (e) {
        if (isMenuOpen === false) {
          menuButton.style.backgroundColor = 'black';
        }
      });

      menuButton.addEventListener('mouseout', function (e) {
        if (isMenuOpen === false) {
          menuButton.style.backgroundColor = '';
        }
      });

      menuButton.addEventListener('click', function (e) {
        menuButton.style.backgroundColor = '';
      });
    }

    const menuLinks = document.querySelectorAll(".menu-link");
    menuLinks.forEach(function (menuLink) {
      if (menuLink.href === window.location.href) {
        menuLink.querySelector(".menu-object").classList.add("active-menu-object");
      } else {
        menuLink.parentNode.classList.add("inactive");
      }
    });

    const hashFragment = window.location.hash;
    if (hashFragment === "#menu") {
      openMenu();
    }

    document.addEventListener("click", function (e) {
      if (!menuBox.contains(e.target) && !menuButton.contains(e.target) && isMenuOpen) {
        closeMenu();
      }
    });

    var menuObjects = document.querySelectorAll(".menu-object a");
    for (var i = 0; i < menuObjects.length; i++) {
      if (menuObjects[i].href == document.location.href) {
        menuObjects[i].parentNode.classList.add("active");
        menuObjects[i].addEventListener("click", function (event) {
          event.preventDefault();
        });
      } else if (
        menuObjects[i].getAttribute("href") == "index.html" &&
        (document.location.pathname == "/" ||
          document.location.pathname == "/index.html")
      ) {
        menuObjects[i].parentNode.classList.add("active");
        menuObjects[i].addEventListener("click", function (event) {
          event.preventDefault();
        });
      }
    }
  });
});

window.addEventListener("load", (event) => {
  const smallLogoImage = document.querySelector(".small-logo img");
  if (smallLogoImage) {
    smallLogoImage.style.display = "block";
  }
});

<\/script>`])), maybeRenderHead());
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/stories/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$6 = createAstro("https://xzstudios.se/stories");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate(_a || (_a = __template(['<link rel="stylesheet" href="/contact-form.css"><link rel="stylesheet" href="/footer.css">', `<div id="master-footer"></div> <div id="openContactForm" class="hidden"></div> <script is:global>
  function loadHTML(url, id, callback) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        const container = document.getElementById(id);
        container.innerHTML = data;
        executeScripts(container);
        if (callback) callback();
      })
      .catch(err => console.error(err));
  };
  
  function executeScripts(container) {
    // Find all script tags in the container
    const scripts = Array.from(container.querySelectorAll("script"));
  
    // For each script, create a new script element and copy attributes
    scripts.forEach(oldScript => {
      const newScript = document.createElement("script");
      Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
  
      // If the script has a src attribute, set it anew to force it to load
      if (oldScript.src) {
        newScript.src = oldScript.src;
      } else {
        newScript.textContent = oldScript.textContent;
      }
  
      // Replace the old script with the new one
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });
  }
  
  document.addEventListener('DOMContentLoaded', (event) => {
    loadHTML('/footer.html', 'master-footer');
    loadHTML('/contact-form.html', 'openContactForm', () => {
      loadExternalScript('/contact-form.js');
    });
  });
  
  function loadExternalScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false; // To ensure the script is executed in the order it's loaded
    document.head.appendChild(script);
  }
  
  
  <\/script>`])), maybeRenderHead());
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/stories/src/components/Footer.astro", void 0);

const $$Astro$5 = createAstro("https://xzstudios.se/stories");
const $$Page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Page;
  const { seo } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "seo": seo }, { "default": ($$result2) => renderTemplate`  ${renderSlot($$result2, $$slots["default"])}  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer" })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header" })}` })}`;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/stories/src/layouts/Page.astro", void 0);

const $$Astro$4 = createAstro("https://xzstudios.se/stories");
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Container;
  return renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-d6puh33w> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/stories/src/components/Container.astro", void 0);

function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function slugify(string) {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

function generateCategoryData(categories) {
  let categoryData = [];
  categories.forEach((category) => {
    categoryData.push({
      name: category,
      slug: `${slugify(category)}`,
    });
  });
  return categoryData;
}

const $$Astro$3 = createAstro("https://xzstudios.se/stories");
var PropHeadings = /* @__PURE__ */ ((PropHeadings2) => {
  PropHeadings2[PropHeadings2["Intact"] = 0] = "Intact";
  PropHeadings2[PropHeadings2["TextOnly"] = 1] = "TextOnly";
  PropHeadings2[PropHeadings2["None"] = 2] = "None";
  return PropHeadings2;
})(PropHeadings || {});
var PropRenderer = /* @__PURE__ */ ((PropRenderer2) => {
  PropRenderer2[PropRenderer2["Text"] = 0] = "Text";
  PropRenderer2[PropRenderer2["Html"] = 1] = "Html";
  PropRenderer2[PropRenderer2["Hybrid"] = 2] = "Hybrid";
  return PropRenderer2;
})(PropRenderer || {});
const $$PostExcerpt = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PostExcerpt;
  function isPriorV2(post2) {
    return typeof post2["compiledContent"] === "function" && typeof post2["rawContent"] === "function";
  }
  function isV2(post2) {
    return typeof post2["body"] === "string";
  }
  const symbolEllipsis = "\u2026";
  const punctuationSymbols = [".", ",", "?", "!", ";", symbolEllipsis];
  let {
    post,
    words = 40,
    maxLength = 0,
    addEllipsis = true,
    smartEllipsis = true,
    ellipsis = symbolEllipsis,
    headings = 0 /* Intact */,
    renderer = 0 /* Text */
  } = Astro2.props;
  let postExcerpt = "";
  if (!post || !isPriorV2(post) && !isV2(post)) {
    throw new TypeError("The required prop post is not valid, aborting now.");
  }
  if (typeof words !== "number" || words < 0) {
    words = 40;
    console.warn("The optional prop words is not valid, defaulting to 40.");
  }
  if (typeof maxLength !== "number" || maxLength < 0) {
    maxLength = 0;
    console.warn("The optional prop maxLength is not valid, defaulting to 0.");
  }
  if (typeof addEllipsis !== "boolean") {
    addEllipsis = true;
    console.warn("The optional prop addEllipsis is not valid, defaulting to true.");
  }
  if (typeof smartEllipsis !== "boolean") {
    smartEllipsis = true;
    console.warn("The optional prop smartEllipsis is not valid, defaulting to true.");
  }
  if (typeof ellipsis !== "string" || ellipsis.length < 1) {
    ellipsis = symbolEllipsis;
    console.warn('The optional prop ellipsis is not valid, defaulting to "\u2026".');
  }
  if (typeof headings !== "number" || !PropHeadings[headings]) {
    headings = 0 /* Intact */;
    console.warn('The optional prop headings is not valid, defaulting to "PropHeadings.Intact".');
  }
  if (typeof renderer !== "number" || !PropRenderer[renderer]) {
    renderer = 0 /* Text */;
    console.warn('The optional prop renderer is not valid, defaulting to "PropRenderer.Text".');
  }
  if (isV2(post)) {
    postExcerpt = post["body"];
  } else if (isPriorV2(post)) {
    post = post;
    if (renderer === 0 /* Text */) {
      postExcerpt = post.rawContent();
    } else {
      postExcerpt = post.compiledContent();
    }
  }
  if (isPriorV2(post)) {
    if (renderer === 0 /* Text */) {
      if (headings === 2 /* None */) {
        postExcerpt = stripHeadings(postExcerpt);
      } else if (headings === 1 /* TextOnly */) {
        postExcerpt = stripHeadingsCode(postExcerpt);
      }
    } else {
      if (headings === 2 /* None */) {
        postExcerpt = stripHeadings$1(postExcerpt);
      } else if (headings === 1 /* TextOnly */) {
        postExcerpt = stripHeadingsCode$1(postExcerpt);
      }
    }
    if (renderer === 2 /* Hybrid */) {
      postExcerpt = stripHtmlCode(postExcerpt);
    }
  } else {
    if (headings === 2 /* None */) {
      postExcerpt = stripHeadings(postExcerpt);
    } else if (headings === 1 /* TextOnly */) {
      postExcerpt = stripHeadingsCode(postExcerpt);
    }
  }
  postExcerpt = postExcerpt.trim();
  if (words > 0) {
    postExcerpt = postExcerpt.split(" ").slice(0, words).join(" ");
  }
  if (maxLength > 0) {
    postExcerpt = postExcerpt.substring(0, maxLength);
  }
  if (addEllipsis) {
    const postLength = postExcerpt.length;
    if (postLength > 0) {
      if (smartEllipsis) {
        const lastChar = postExcerpt.at(-1);
        if (lastChar && !punctuationSymbols.includes(lastChar)) {
          postExcerpt += ellipsis;
        }
      } else {
        postExcerpt += ellipsis;
      }
    }
  }
  return renderTemplate`${(renderer === 1 /* Html */ || renderer === 2 /* Hybrid */) && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(postExcerpt)}` })}`}${renderer === 0 /* Text */ && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${postExcerpt}` })}`}`;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/stories/node_modules/@igor.dvlpr/astro-post-excerpt/PostExcerpt.astro", void 0);

const $$Astro$2 = createAstro("https://xzstudios.se/stories");
const $$BlogPostPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogPostPreview;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="post-preview__link fade-in"${addAttribute(post.url, "href")} data-astro-cid-mocbi3ka> <article class="post-preview__article" data-astro-cid-mocbi3ka> <!-- Hopefully we'll be able to use Astro's image integration for this soon --> <picture data-astro-cid-mocbi3ka>  <source${addAttribute(`${post.frontmatter.image.includes(".") ? post.frontmatter.image : post.frontmatter.image + ".webp"}`, "srcset")} type="image/webp" data-astro-cid-mocbi3ka>  <img class="post-preview__img"${addAttribute(`${post.frontmatter.image.includes(".") ? post.frontmatter.image : post.frontmatter.image + ".png"}`, "src")}${addAttribute(`Featured image for ${post.frontmatter.title}`, "alt")} data-astro-cid-mocbi3ka> </picture> <div class="post-preview__text" data-astro-cid-mocbi3ka> <!-- {post.frontmatter?.category && <p class="post-preview__category">{post.frontmatter.category}</p>} --> <h2 data-astro-cid-mocbi3ka>${post.frontmatter.title}</h2> <p class="post-excerpt" data-astro-cid-mocbi3ka> <!-- <PostExcerpt post={post} words={20} addEllipsis={false} /> --> ${renderComponent($$result, "PostExcerpt", $$PostExcerpt, { "post": post, "words": 30, "addEllipsis": true, "headings": PropHeadings.None, "renderer": PropRenderer.Text, "data-astro-cid-mocbi3ka": true })} </p> <p class="post-preview__date" data-astro-cid-mocbi3ka>${formatDate(post.frontmatter.publishedAt)}</p> <p class="post-content__content" data-astro-cid-mocbi3ka>${post.frontmatter.text}</p> </div> </article> </a> `;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/stories/src/components/BlogPostPreview.astro", void 0);

const $$Astro$1 = createAstro("https://xzstudios.se/stories");
const $$BlogPostsList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPostsList;
  const { posts } = Astro2.props;
  const initialPostCount = 3;
  return renderTemplate`${maybeRenderHead()}<ul data-astro-cid-2zbl4ika> ${posts.map((post, index) => renderTemplate`<li${addAttribute(post.url, "key")}${addAttribute(`post ${index >= initialPostCount ? "hidden" : ""}`, "class")} data-astro-cid-2zbl4ika> ${renderComponent($$result, "BlogPostPreview", $$BlogPostPreview, { "post": post, "data-astro-cid-2zbl4ika": true })} </li>`)} </ul> `;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/stories/src/components/BlogPostsList.astro", void 0);

const $$Astro = createAstro("https://xzstudios.se/stories");
const Astro = $$Astro;
async function getStaticPaths() {
  const allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({"../how-to-make-money-as-a-freelancer copy 2.md": () => import('./how-to-make-money-as-a-freelancer copy 2_pN0T9Prc.mjs').then(n => n.h),"../how-to-make-money-as-a-freelancer copy 3.md": () => import('./how-to-make-money-as-a-freelancer copy 3_-zK1950m.mjs'),"../how-to-make-money-as-a-freelancer copy 4.md": () => import('./how-to-make-money-as-a-freelancer copy 4_y4eEsn4G.mjs'),"../how-to-make-money-as-a-freelancer copy 5.md": () => import('./how-to-make-money-as-a-freelancer copy 5_bdWf-i34.mjs'),"../how-to-make-money-as-a-freelancer copy 6.md": () => import('./how-to-make-money-as-a-freelancer copy 6_rsE9Phsb.mjs'),"../how-to-make-money-as-a-freelancer copy.md": () => import('./how-to-make-money-as-a-freelancer copy_TJjhUl8m.mjs'),"../introducing-xz-studios.md": () => import('./introducing-xz-studios_s8E_V2Fj.mjs'),"../top-3-resources-for-free-photos.md": () => import('./top-3-resources-for-free-photos__qNyvKSw.mjs'),"../web-design-trends-for-2023.md": () => import('./web-design-trends-for-2023_z00gygw1.mjs')}), () => "../*.{mdx,md}");
  const sortedPosts = allPosts.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
  const allCategoriesUnique = /* @__PURE__ */ new Set();
  sortedPosts.forEach((post) => {
    if (post.frontmatter.category) {
      allCategoriesUnique.add(post.frontmatter.category);
    }
  });
  const allCategoriesData = generateCategoryData(allCategoriesUnique);
  return allCategoriesData.map((category) => {
    const posts = sortedPosts.filter((post) => post.frontmatter.category.includes(category.name));
    return {
      params: { slug: category.slug },
      props: {
        category: category.name,
        posts
      }
    };
  });
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { category, posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "data-astro-cid-eiurjby3": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-eiurjby3": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="home-hero-text__container" data-astro-cid-eiurjby3> <h1 data-astro-cid-eiurjby3>${category} Posts</h1> </div> ${renderComponent($$result3, "BlogPostsList", $$BlogPostsList, { "posts": posts, "data-astro-cid-eiurjby3": true })} ` })} ` })} `;
}, "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/stories/src/pages/stories/category/[slug].astro", void 0);

const $$file = "/Users/felixadlen/Lokalt/(master) xz-studios/xzstudios.se/stories/src/pages/stories/category/[slug].astro";
const $$url = "/stories/category/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Container as $, _slug_ as _, $$Page as a, $$BlogPostsList as b, formatDate as f };
