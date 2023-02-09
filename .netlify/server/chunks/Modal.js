import { c as create_ssr_component, d as subscribe, f as escape, i as null_to_empty } from "./index3.js";
import { p as paintingsData } from "./data.js";
import { e as exploringMode } from "./stores.js";
const Modal_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-18i5u9{position:fixed;inset:0;display:grid;place-items:center;z-index:2}div.svelte-18i5u9{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);z-index:20}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $exploringMode, $$unsubscribe_exploringMode;
  $$unsubscribe_exploringMode = subscribe(exploringMode, (value) => $exploringMode = value);
  let { isActive = false } = $$props;
  let { PageId } = $$props;
  let { text } = $$props;
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0)
    $$bindings.isActive(isActive);
  if ($$props.PageId === void 0 && $$bindings.PageId && PageId !== void 0)
    $$bindings.PageId(PageId);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css);
  $$unsubscribe_exploringMode();
  return `${isActive ? `<section class="${"svelte-18i5u9"}"></section>
	<div class="${escape(null_to_empty(" bg-background text-textDark  py-4 px-6 gap-2 flex flex-col rounded-md	w-80 font-text"), true) + " svelte-18i5u9"}"><button class="${"absolute h-14 w-14 -right-7 -top-5"}"><img src="${"/icons/close.png"}"></button>
		${text ? `<p>${escape(text)}</p>` : `<p>Indice :</p>
			${$exploringMode == "getItems" ? `<p>${escape(paintingsData[PageId - 1].clueCollect)}</p>` : `${$exploringMode == "placeItems" ? `<p>${escape(paintingsData[PageId - 1].clueReturn)}</p>` : ``}`}`}</div>` : ``}`;
});
export {
  Modal as M
};
