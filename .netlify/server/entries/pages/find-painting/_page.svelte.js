import { c as create_ssr_component, d as subscribe, f as escape, v as validate_component } from "../../../chunks/index3.js";
import { B as Button } from "../../../chunks/Button.js";
import { a as actualPaintingIndex, e as exploringMode, i as items } from "../../../chunks/stores.js";
import { p as paintingsData } from "../../../chunks/data.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $actualPaintingIndex, $$unsubscribe_actualPaintingIndex;
  let $exploringMode, $$unsubscribe_exploringMode;
  let $items, $$unsubscribe_items;
  $$unsubscribe_actualPaintingIndex = subscribe(actualPaintingIndex, (value) => $actualPaintingIndex = value);
  $$unsubscribe_exploringMode = subscribe(exploringMode, (value) => $exploringMode = value);
  $$unsubscribe_items = subscribe(items, (value) => $items = value);
  let nextPageType = "video";
  if ($exploringMode === "placeItems") {
    nextPageType = "explore";
  }
  let src = paintingsData[$actualPaintingIndex].fileName + ".jpeg";
  let paintingName = paintingsData[$actualPaintingIndex].name;
  console.log("find-painting");
  $$unsubscribe_actualPaintingIndex();
  $$unsubscribe_exploringMode();
  $$unsubscribe_items();
  return `<div class="${"w-screen h-screen bg-background py-10 flex flex-col "}">${$actualPaintingIndex === 0 ? `<h1 class="${"font-title text-title text-textDark flex justify-center uppercase"}">C&#39;est parti !</h1>` : `<h1 class="${"font-title text-title text-textDark flex justify-center uppercase"}">Au suivant !</h1>
		<p class="${"text-textDark uppercase font-medium text-center mt-3"}">Vous avez trouvé ${escape($items.length)} sur 3 objets !
		</p>`}

	<p class="${"text-textDark text-text font-text p-10"}">Digirez-vous devant le tableau
		<span class="${"font-bold"}">${escape(paintingName)}</span>
		avec votre téléphone en main et appuyez sur le bouton
		<span class="${"font-bold"}">“J’y suis”</span>
		pour commencer !
	</p>
	<div class="${"relative border-2 w-full h-full"}"><img src="${"/paintings/" + escape(src, true)}" class="${"p-20 block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto z-10 rounded-md max-w-full max-h-full"}">
		<img src="${"/assets/fond_finding.png"}" class="${"z-0"}"></div>

	${validate_component(Button, "Button").$$render(
    $$result,
    {
      className: "absolute bottom-10 translate-x-36",
      url: "/tableau/" + nextPageType + "/" + ($actualPaintingIndex + 1)
    },
    {},
    {
      default: () => {
        return `J&#39;y suis`;
      }
    }
  )}</div>`;
});
export {
  Page as default
};
