import { c as create_ssr_component } from "../../chunks/index3.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.background.svelte-rppw1w{background-image:url("/assets/bg-home.png");background-size:contain;width:100vw;height:100vh}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"background p-5 relative overflow-hidden svelte-rppw1w"}"><div class="${"flex justify-end"}"><img src="${"/assets/madame-home.png"}" class="${"w-[80%]"}"></div>
	<h1 class="${"font-title text-title text-background pl-10 w-2/3 flex justify-center uppercase"}">Embrouille au musée
	</h1>
	<div class="${"relative"}"><img src="${"/assets/heritier-home.png"}" class="${"w-[80%]"}">
		<img src="${"/assets/alfred-home.png"}" class="${"w-[80%] absolute right-2 top-32"}"></div>
	<div class="${"fixed bottom-10 left-1/2 -translate-x-1/2 w-60"}"><a href="${"/home"}" class="${"flex justify-center text-text font-button px-6 py-3 rounded-md bg-background "}">Commencer la visite
		</a></div>
</div>`;
});
export {
  Page as default
};
