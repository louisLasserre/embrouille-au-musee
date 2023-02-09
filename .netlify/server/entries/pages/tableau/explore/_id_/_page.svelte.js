import { c as create_ssr_component, b as add_attribute, d as subscribe, e as each, v as validate_component, h as set_store_value, f as escape } from "../../../../../chunks/index3.js";
import { M as Modal } from "../../../../../chunks/Modal.js";
import { B as Button } from "../../../../../chunks/Button.js";
import { i as items, e as exploringMode, a as actualPaintingIndex } from "../../../../../chunks/stores.js";
import { p as paintingsData } from "../../../../../chunks/data.js";
const itemsData = [
  {
    id: 1,
    name: "Noeud de Alfred Roll",
    fileName: "noeud"
  },
  {
    id: 2,
    name: "Testament",
    fileName: "testament"
  },
  {
    id: 3,
    name: "Chapeau de Madame Samazeuilh",
    fileName: "chapeau"
  }
];
const Item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { itemId } = $$props;
  let { inventory = false } = $$props;
  let { className = "" } = $$props;
  let { onClick } = $$props;
  const item = itemsData.find((item2) => item2.id == itemId);
  const { id, name, fileName } = item;
  if ($$props.itemId === void 0 && $$bindings.itemId && itemId !== void 0)
    $$bindings.itemId(itemId);
  if ($$props.inventory === void 0 && $$bindings.inventory && inventory !== void 0)
    $$bindings.inventory(inventory);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `${inventory ? `<div${add_attribute("class", `inventory absolute ${className}`, 0)}><img${add_attribute("class", ` item`, 0)}${add_attribute("src", `/items/${fileName}.png`, 0)}${add_attribute("alt", name, 0)}></div>` : `<img${add_attribute("class", ` absolute ${fileName} item`, 0)}${add_attribute("src", `/items/${fileName}.png`, 0)}${add_attribute("alt", name, 0)}>`}`;
});
const Painting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  return `<div class="${"relative"}"><img class="${"max-w-full block h-auto"}"${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)}>
	${slots.default ? slots.default({}) : ``}
</div>`;
});
const Inventory = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $items, $$unsubscribe_items;
  let $exploringMode, $$unsubscribe_exploringMode;
  $$unsubscribe_items = subscribe(items, (value) => $items = value);
  $$unsubscribe_exploringMode = subscribe(exploringMode, (value) => $exploringMode = value);
  let { missingItemId } = $$props;
  let { itemId } = $$props;
  let { placedItem } = $$props;
  const handleClick = (itemId2) => {
    if ($exploringMode === "placeItems" && !$items.includes(itemId2)) {
      return;
    }
    if ($exploringMode === "getItems" && !$items.includes(itemId2)) {
      getItems(itemId2);
    }
    if ($exploringMode === "placeItems") {
      placeItems(itemId2);
    }
  };
  function getItems(id) {
    set_store_value(items, $items = [...$items, id], $items);
  }
  function placeItems(id) {
    if (missingItemId === id) {
      placedItem();
      set_store_value(items, $items = $items.filter((item) => item !== id), $items);
    }
  }
  if ($$props.missingItemId === void 0 && $$bindings.missingItemId && missingItemId !== void 0)
    $$bindings.missingItemId(missingItemId);
  if ($$props.itemId === void 0 && $$bindings.itemId && itemId !== void 0)
    $$bindings.itemId(itemId);
  if ($$props.placedItem === void 0 && $$bindings.placedItem && placedItem !== void 0)
    $$bindings.placedItem(placedItem);
  $$unsubscribe_items();
  $$unsubscribe_exploringMode();
  return `${$exploringMode === "placeItems" ? `<div class="${"flex flex-row justify-between"}">${each(paintingsData, (item) => {
    return `${$items.includes(item.itemId) ? `<div class="${"w-20 relative"}"><img src="${"/icons/fond_item.png"}" class="${"object-contain"}">
						${validate_component(Item, "Item").$$render(
      $$result,
      {
        itemId: item.itemId,
        inventory: true,
        onClick: handleClick,
        className: "scale-125 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center"
      },
      {},
      {}
    )}
					</div>` : `<div class="${"relative"}"><img src="${"/icons/fond_item.png"}" class="${"opacity-50 w-20"}">
						<img src="${"/icons/valid.png"}" class="${"absolute w-10 top-1/2 left-1/2 -translate-x-[40%] -translate-y-1/2"}">
					</div>`}`;
  })}</div>` : ``}

${$exploringMode === "getItems" ? `<div class="${"flex flex-row justify-center"}">${$items.includes(itemId) ? `<div class="${"w-32 relative"}"><img src="${"/icons/fond_item.png"}" class="${"object-contain"}">
					${validate_component(Item, "Item").$$render(
    $$result,
    {
      itemId,
      inventory: true,
      onClick: handleClick,
      className: "scale-125 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center"
    },
    {},
    {}
  )}</div>` : `<div class="${"relative w-32 z-10"}"><img src="${"/icons/fond_item.png"}" class="${"opacity-50 max-w-full block z-[-1]"}">
					<div class="${"absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-[40%] origin-center w-1/2"}"><p class="${"font-button"}">Trouvez l&#39;intrus</p></div></div>`}</div>` : ``}`;
});
const ButtonIndice = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onClick } = $$props;
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `<button class="${"font-button text-button items-center"}">Indice
	<img src="${"/icons/clue.png"}" alt="${""}" class="${"w-12"}"></button>`;
});
const ExploreReactions_svelte_svelte_type_style_lang = "";
const css = {
  code: "video.svelte-1h0x4h6{bottom:40%;top:0;position:absolute;z-index:-1}",
  map: null
};
const ExploreReactions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { videosUrls } = $$props;
  let { imagefileName } = $$props;
  let videoElementsData = [];
  const startVideo = (videoName) => {
    let videoOn;
    let videosOff = videoElementsData.map((videoData) => {
      if (videoData.name === videoName) {
        videoOn = videoData;
        return;
      }
      return videoData;
    });
    console.log(videoOn);
    if (!videoOn) {
      return;
    }
    console.log(videoOn);
    videosOff.forEach((video) => {
      if (!video) {
        return;
      }
      video.element.pause();
      video.element.style.zIndex = "-1";
    });
    videoOn.element.currentTime = 0;
    videoOn.element.play();
    videoOn.element.style.zIndex = "20";
    videoOn.element.addEventListener("ended", () => {
      if (videoOn) {
        videoOn.element.style.zIndex = "-1";
      }
    });
  };
  if ($$props.videosUrls === void 0 && $$bindings.videosUrls && videosUrls !== void 0)
    $$bindings.videosUrls(videosUrls);
  if ($$props.imagefileName === void 0 && $$bindings.imagefileName && imagefileName !== void 0)
    $$bindings.imagefileName(imagefileName);
  if ($$props.startVideo === void 0 && $$bindings.startVideo && startVideo !== void 0)
    $$bindings.startVideo(startVideo);
  $$result.css.add(css);
  return `${each(videosUrls, (video) => {
    return `<video${add_attribute("id", video.name, 0)} class="${"reactionVideo svelte-1h0x4h6"}"${add_attribute("src", `/videos/${video.fileName}.mp4`, 0)}${add_attribute("poster", `/paintings/${imagefileName}.jpg`, 0)} playsinline preload="${"auto"}"><track kind="${"captions"}"></video>`;
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let disabled;
  let $exploringMode, $$unsubscribe_exploringMode;
  let $items, $$unsubscribe_items;
  let $actualPaintingIndex, $$unsubscribe_actualPaintingIndex;
  $$unsubscribe_exploringMode = subscribe(exploringMode, (value) => $exploringMode = value);
  $$unsubscribe_items = subscribe(items, (value) => $items = value);
  $$unsubscribe_actualPaintingIndex = subscribe(actualPaintingIndex, (value) => $actualPaintingIndex = value);
  let { data } = $$props;
  let PageId = Number(data.id);
  let isActive = false;
  const { name, description, itemId, fileName, missingItemId, reactionVideos } = data.tableau;
  let videosUrls = reactionVideos;
  if ($exploringMode === "getItems") {
    videosUrls = reactionVideos.filter((video) => video.name === "clueGetItems");
  }
  if ($exploringMode === "placeItems") {
    videosUrls = reactionVideos.filter((video) => video.name === "cluePlaceItems" || video.name === "placedItems");
  }
  if (PageId === $actualPaintingIndex + 1) {
    set_store_value(actualPaintingIndex, $actualPaintingIndex = PageId, $actualPaintingIndex);
  }
  if (PageId === data.total)
    ;
  let startChildVideo;
  const handleClick = (itemId2) => {
    if ($exploringMode === "getItems" && !$items.includes(itemId2)) {
      console.log("ok condiiton", { itemId: itemId2 });
      getItems(itemId2);
    }
  };
  function getItems(id) {
    items.update((items2) => {
      items2.push(id);
      return items2;
    });
  }
  let hasPlacedItem = false;
  const HasPlacedItem = () => {
    startChildVideo("placedItems");
    hasPlacedItem = true;
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    disabled = () => {
      if ($exploringMode === "placeItems") {
        return $items.includes(missingItemId);
      }
      return !$items.includes(itemId);
    };
    $$rendered = `<div class="${"h-screen w-screen bg-background"}"><div class="${"relative w-full h-3/5 overflow-hidden"}">${validate_component(Painting, "Painting").$$render(
      $$result,
      {
        src: `/${hasPlacedItem ? "reelpaintings" : "paintings"}/${fileName}.jpg`,
        alt: "Autoportrait de Alfred Roll"
      },
      {},
      {
        default: () => {
          return `${!$items.includes(itemId) && $exploringMode === "getItems" ? `${validate_component(Item, "Item").$$render($$result, { itemId, onClick: handleClick }, {}, {})}` : ``}`;
        }
      }
    )}
		 ${validate_component(ExploreReactions, "ExploreReactions").$$render(
      $$result,
      {
        videosUrls,
        imagefileName: fileName,
        startVideo: startChildVideo
      },
      {
        startVideo: ($$value) => {
          startChildVideo = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

	<div class="${"px-10 py-5 flex flex-col justify-between h-[40%]"}"><div class="${"flex flex-row justify-between"}"><div><h2 class="${"font-titlePainting text-titlePainting uppercase"}">${escape(name)}</h2>
				<p class="${"font-ssTitle text-ssTitle pl-5"}">${escape(description)}</p></div>
			${validate_component(ButtonIndice, "ButtonIndice").$$render(
      $$result,
      {
        onClick: () => {
          isActive = true;
        }
        // reaction();
      },
      {},
      {}
    )}</div>

		${validate_component(Inventory, "Inventory").$$render(
      $$result,
      {
        missingItemId,
        placedItem: HasPlacedItem,
        itemId
      },
      {},
      {}
    )}

		${validate_component(Button, "Button").$$render(
      $$result,
      {
        url: "/find-painting",
        disabled: disabled(),
        className: "flex justify-center py-5"
      },
      {},
      {
        default: () => {
          return `Tableau suivant
		`;
        }
      }
    )}</div>
	${validate_component(Modal, "Modal").$$render(
      $$result,
      { PageId, isActive },
      {
        isActive: ($$value) => {
          isActive = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_exploringMode();
  $$unsubscribe_items();
  $$unsubscribe_actualPaintingIndex();
  return $$rendered;
});
export {
  Page as default
};
