import { c as create_ssr_component, d as subscribe, h as set_store_value, f as escape, v as validate_component } from "../../../chunks/index3.js";
import { B as Button } from "../../../chunks/Button.js";
import { e as exploringMode, a as actualPaintingIndex } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $actualPaintingIndex, $$unsubscribe_actualPaintingIndex;
  let $exploringMode, $$unsubscribe_exploringMode;
  $$unsubscribe_actualPaintingIndex = subscribe(actualPaintingIndex, (value) => $actualPaintingIndex = value);
  $$unsubscribe_exploringMode = subscribe(exploringMode, (value) => $exploringMode = value);
  let endPageData;
  if ($exploringMode === "getItems") {
    set_store_value(exploringMode, $exploringMode = "placeItems", $exploringMode);
    set_store_value(actualPaintingIndex, $actualPaintingIndex = 0, $actualPaintingIndex);
    endPageData = {
      title: "BRAVO !",
      description: "Vous avez trouvé tous les objets en trop. Il vous reste à <span class='text-textDark font-medium'>remettre les objets au bon propriétaire</span>, pour cela rendez-vous devant le tableau <span class='text-textDark font-medium'>''Les héritiers'' </span>. Une fois que vous y êtes, appuyez sur le bouton <span class='text-textDark font-medium'>''J'y suis'</span> !",
      button: {
        url: "/tableau/explore/1",
        text: "J'y suis"
      }
    };
  } else {
    set_store_value(exploringMode, $exploringMode = "getItems", $exploringMode);
    set_store_value(actualPaintingIndex, $actualPaintingIndex = 0, $actualPaintingIndex);
    endPageData = {
      title: "FÉLICITATIONS !",
      description: "Vous avez réussi à remettre en ordre tout les tableaux, ils ont l’air de meilleure humeur maintenant. <br> <br> Je vais vous dire un secret mais ça reste entre nous hein! C’est moi qui ai mélangé tous leurs objets. Il faut bien ajouter un peu d’animation dans ce musée !”",
      button: {
        url: "/",
        text: "Quitter l'expèrience"
      }
    };
  }
  const { title, description, button } = endPageData;
  const { url, text } = button;
  console.log("end");
  $$unsubscribe_actualPaintingIndex();
  $$unsubscribe_exploringMode();
  return `<body class="${"bg-background h-screen z-0 relative"}"><div class="${"flex justify-center flex-col text-center pl-8 pr-8 gap-8 z-50"}"><img src="${"/icons/fond_item.png"}" class="${"absolute z-[-1] opacity-50 left-0 top-64 w-fit"}">
		<h1 class="${"font-title text-title m-0 p-0"}">${escape(title)}</h1>
		<p class="${"text-text text-left "}"><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></p>
		<img src="${"/paintings/les-heritiers.jpeg"}" class="${"w-fit top-72 pl-8 pr-8"}">

		${validate_component(Button, "Button").$$render($$result, { url, id: "btn" }, {}, {
    default: () => {
      return `${escape(text)}`;
    }
  })}</div></body>`;
});
export {
  Page as default
};
