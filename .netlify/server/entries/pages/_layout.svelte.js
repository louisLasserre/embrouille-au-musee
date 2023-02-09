import { c as create_ssr_component, e as each, b as add_attribute } from "../../chunks/index3.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const assets = [
    "alfred-home",
    "alfred",
    "bg-home",
    "heritier-home",
    "heritier",
    "madame-home",
    "madame",
    "paintings-all"
  ];
  const paintings = [
    "alfred-roll.jpg",
    "alfred-roll.jpeg",
    "les-heritiers.jpg",
    "les-heritiers.jpeg",
    "madame-samazeuilh.jpg",
    "madame-samazeuilh.jpeg"
  ];
  return `${$$result.head += `<!-- HEAD_svelte-10x955n_START -->${each(assets, (asset) => {
    return `<link rel="${"prefetch"}"${add_attribute("href", `/assets/${asset}.png`, 0)}>`;
  })}${each(paintings, (painting) => {
    return `<link rel="${"prefetch"}"${add_attribute("href", `/paintings/${painting}`, 0)}>`;
  })}<!-- HEAD_svelte-10x955n_END -->`, ""}

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
