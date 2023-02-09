import { c as create_ssr_component, f as escape, b as add_attribute } from "./index3.js";
let buttonStyle = "w-48 text-background text-center font-button px-6 py-3 rounded-md bg-button";
let disabledStyle = "w-48 text-background text-center font-button px-6 py-3 rounded-md bg-buttonDisabled";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url = "" } = $$props;
  let { disabled = false } = $$props;
  let { className = "" } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<div class="${"" + escape(className, true)}">${!disabled ? `<a${add_attribute("href", url, 0)}${add_attribute("class", buttonStyle, 0)}>${slots.default ? slots.default({}) : ``}</a>` : `<button${add_attribute("class", disabledStyle, 0)} disabled>${slots.default ? slots.default({}) : ``}</button>`}</div>`;
});
export {
  Button as B
};
