"use client";
import "./chunk-4LZM6MBP.js";
import "./chunk-QPDFY2NG.js";
import {
  generateUtilityClass,
  generateUtilityClasses,
  styled_default,
  useSlot,
  useThemeProps
} from "./chunk-3DE3ONOC.js";
import "./chunk-C2MW5AN3.js";
import "./chunk-4SPSPPJV.js";
import {
  capitalize,
  composeClasses,
  createGetCssVar,
  getPath,
  init_esm,
  init_utils
} from "./chunk-HHV54AW2.js";
import "./chunk-LYZ7FTXO.js";
import {
  require_jsx_runtime
} from "./chunk-XWFUUR5D.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  clsx_default,
  init_clsx,
  init_extends,
  init_objectWithoutPropertiesLoose,
  require_prop_types
} from "./chunk-AIOIADLP.js";
import "./chunk-URLHUEZE.js";
import "./chunk-AK6QMITG.js";
import {
  require_react
} from "./chunk-LNTNMRP6.js";
import {
  __toESM
} from "./chunk-FWVXXLA5.js";

// node_modules/@mui/joy/Sheet/Sheet.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx();
init_utils();
init_esm();

// node_modules/@mui/joy/colorInversion/colorInversionUtils.js
init_esm();
var createPrefixVar = (cssVarPrefix) => {
  return (cssVar) => `--${cssVarPrefix ? `${cssVarPrefix}-` : ""}${cssVar.replace(/^--/, "")}`;
};
var INVERTED_COLORS_ATTR = "data-skip-inverted-colors";
var INVERTED_COLORS_SELECTOR = `& :not([${INVERTED_COLORS_ATTR}], [${INVERTED_COLORS_ATTR}] *)`;
var skipInvertedColors = (theme) => {
  var _theme$colorSchemes$l, _theme$colorSchemes$l2, _theme$colorSchemes$l3, _theme$colorSchemes$l4, _theme$colorSchemes$l5, _theme$colorSchemes$l6, _theme$colorSchemes$l7, _theme$colorSchemes$l8, _theme$colorSchemes$l9, _theme$colorSchemes$l10, _theme$colorSchemes$l11, _theme$colorSchemes$d, _theme$colorSchemes$d2, _theme$colorSchemes$d3, _theme$colorSchemes$d4, _theme$colorSchemes$d5, _theme$colorSchemes$d6, _theme$colorSchemes$d7, _theme$colorSchemes$d8, _theme$colorSchemes$d9, _theme$colorSchemes$d10, _theme$colorSchemes$d11;
  const prefixVar = createPrefixVar(theme.cssVarPrefix);
  return {
    "--variant-plainColor": "var(--variant-plainColor) !important",
    "--variant-plainHoverColor": "var(--variant-plainHoverColor) !important",
    "--variant-plainHoverBg": "var(--variant-plainHoverBg) !important",
    "--variant-plainActiveBg": "var(--variant-plainActiveBg) !important",
    "--variant-plainDisabledColor": "var(--variant-plainDisabledColor) !important",
    "--variant-outlinedColor": "var(--variant-outlinedColor) !important",
    "--variant-outlinedBorder": "var(--variant-outlinedBorder) !important",
    "--variant-outlinedHoverColor": "var(--variant-outlinedHoverColor) !important",
    "--variant-outlinedHoverBorder": "var(--variant-outlinedHoverBorder) !important",
    "--variant-outlinedHoverBg": "var(--variant-outlinedHoverBg) !important",
    "--variant-outlinedActiveBg": "var(--variant-outlinedActiveBg) !important",
    "--variant-outlinedDisabledColor": "var(--variant-outlinedDisabledColor) !important",
    "--variant-outlinedDisabledBorder": "var(--variant-outlinedDisabledBorder) !important",
    "--variant-softColor": "var(--variant-softColor) !important",
    "--variant-softHoverColor": "var(--variant-softHoverColor) !important",
    "--variant-softBg": "var(--variant-softBg) !important",
    "--variant-softHoverBg": "var(--variant-softHoverBg) !important",
    "--variant-softActiveBg": "var(--variant-softActiveBg) !important",
    "--variant-softActiveColor": "var(--variant-softActiveColor) !important",
    "--variant-softDisabledColor": "var(--variant-softDisabledColor) !important",
    "--variant-softDisabledBg": "var(--variant-softDisabledBg) !important",
    "--variant-solidColor": "var(--variant-solidColor) !important",
    "--variant-solidBg": "var(--variant-solidBg) !important",
    "--variant-solidHoverBg": "var(--variant-solidHoverBg) !important",
    "--variant-solidActiveBg": "var(--variant-solidActiveBg) !important",
    "--variant-solidDisabledColor": "var(--variant-solidDisabledColor) !important",
    "--variant-solidDisabledBg": "var(--variant-solidDisabledBg) !important",
    "--Badge-ringColor": "var(--Badge-ringColor) !important",
    colorScheme: "unset",
    [theme.getColorSchemeSelector("light")]: {
      [prefixVar("--palette-focusVisible")]: `${(_theme$colorSchemes$l = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l.palette.focusVisible} !important`,
      [prefixVar("--palette-background-body")]: `${(_theme$colorSchemes$l2 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l2.palette.background.body} !important`,
      [prefixVar("--palette-background-surface")]: `${(_theme$colorSchemes$l3 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l3.palette.background.surface} !important`,
      [prefixVar("--palette-background-popup")]: `${(_theme$colorSchemes$l4 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l4.palette.background.popup} !important`,
      [prefixVar("--palette-background-level1")]: `${(_theme$colorSchemes$l5 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l5.palette.background.level1} !important`,
      [prefixVar("--palette-background-level2")]: `${(_theme$colorSchemes$l6 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l6.palette.background.level2} !important`,
      [prefixVar("--palette-background-level3")]: `${(_theme$colorSchemes$l7 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l7.palette.background.level3} !important`,
      [prefixVar("--palette-text-primary")]: `${(_theme$colorSchemes$l8 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l8.palette.text.primary} !important`,
      [prefixVar("--palette-text-secondary")]: `${(_theme$colorSchemes$l9 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l9.palette.text.secondary} !important`,
      [prefixVar("--palette-text-tertiary")]: `${(_theme$colorSchemes$l10 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l10.palette.text.tertiary} !important`,
      [prefixVar("--palette-divider")]: `${(_theme$colorSchemes$l11 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l11.palette.divider} !important`
    },
    [theme.getColorSchemeSelector("dark")]: {
      [prefixVar("--palette-focusVisible")]: `${(_theme$colorSchemes$d = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d.palette.focusVisible} !important`,
      [prefixVar("--palette-background-body")]: `${(_theme$colorSchemes$d2 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d2.palette.background.body} !important`,
      [prefixVar("--palette-background-surface")]: `${(_theme$colorSchemes$d3 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d3.palette.background.surface} !important`,
      [prefixVar("--palette-background-popup")]: `${(_theme$colorSchemes$d4 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d4.palette.background.popup} !important`,
      [prefixVar("--palette-background-level1")]: `${(_theme$colorSchemes$d5 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d5.palette.background.level1} !important`,
      [prefixVar("--palette-background-level2")]: `${(_theme$colorSchemes$d6 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d6.palette.background.level2} !important`,
      [prefixVar("--palette-background-level3")]: `${(_theme$colorSchemes$d7 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d7.palette.background.level3} !important`,
      [prefixVar("--palette-text-primary")]: `${(_theme$colorSchemes$d8 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d8.palette.text.primary} !important`,
      [prefixVar("--palette-text-secondary")]: `${(_theme$colorSchemes$d9 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d9.palette.text.secondary} !important`,
      [prefixVar("--palette-text-tertiary")]: `${(_theme$colorSchemes$d10 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d10.palette.text.tertiary} !important`,
      [prefixVar("--palette-divider")]: `${(_theme$colorSchemes$d11 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d11.palette.divider} !important`
    }
  };
};
function isStyledThemeProp(props) {
  return props.theme !== void 0;
}
var applySolidInversion = (color) => (themeProp) => {
  const theme = isStyledThemeProp(themeProp) ? themeProp.theme : themeProp;
  const getCssVarDefault = createGetCssVar(theme.cssVarPrefix);
  const prefixVar = createPrefixVar(theme.cssVarPrefix);
  const getCssVar = (cssVar) => {
    const tokens = cssVar.split("-");
    return getCssVarDefault(cssVar, theme.palette[tokens[1]][tokens[2]]);
  };
  return {
    [INVERTED_COLORS_SELECTOR]: {
      "--Badge-ringColor": getCssVar(`palette-${color}-solidBg`),
      "--Icon-color": "currentColor",
      [`${theme.getColorSchemeSelector("light")}, ${theme.getColorSchemeSelector("dark")}`]: {
        colorScheme: "dark",
        [prefixVar("--palette-focusVisible")]: getCssVar(`palette-${color}-200`),
        [prefixVar("--palette-background-body")]: "rgba(0 0 0 / 0.1)",
        [prefixVar("--palette-background-surface")]: "rgba(0 0 0 / 0.06)",
        [prefixVar("--palette-background-popup")]: getCssVar(`palette-${color}-700`),
        [prefixVar("--palette-background-level1")]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.2)`,
        [prefixVar("--palette-background-level2")]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.36)`,
        [prefixVar("--palette-background-level3")]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.6)`,
        [prefixVar("--palette-text-primary")]: getCssVar(`palette-common-white`),
        [prefixVar("--palette-text-secondary")]: getCssVar(`palette-${color}-200`),
        [prefixVar("--palette-text-tertiary")]: getCssVar(`palette-${color}-300`),
        [prefixVar("--palette-text-icon")]: getCssVar(`palette-${color}-200`),
        [prefixVar("--palette-divider")]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.32)`,
        "--variant-plainColor": getCssVar(`palette-${color}-50`),
        "--variant-plainHoverColor": `#fff`,
        "--variant-plainHoverBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.12)`,
        "--variant-plainActiveBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.32)`,
        "--variant-plainDisabledColor": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
        "--variant-outlinedColor": getCssVar(`palette-${color}-50`),
        "--variant-outlinedBorder": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.5)`,
        "--variant-outlinedHoverColor": `#fff`,
        "--variant-outlinedHoverBorder": getCssVar(`palette-${color}-300`),
        "--variant-outlinedHoverBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.12)`,
        "--variant-outlinedActiveBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.32)`,
        "--variant-outlinedDisabledColor": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
        "--variant-outlinedDisabledBorder": `rgba(255 255 255 / 0.2)`,
        "--variant-softColor": getCssVar(`palette-common-white`),
        "--variant-softHoverColor": getCssVar(`palette-common-white`),
        "--variant-softBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.24)`,
        "--variant-softHoverBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.36)`,
        "--variant-softActiveBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.16)`,
        "--variant-softActiveColor": `#fff`,
        "--variant-softDisabledColor": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
        "--variant-softDisabledBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.1)`,
        "--variant-solidColor": getCssVar(`palette-${color}-${color === "neutral" ? "600" : "500"}`),
        "--variant-solidBg": getCssVar(`palette-common-white`),
        "--variant-solidHoverBg": getCssVar(`palette-common-white`),
        "--variant-solidActiveBg": getCssVar(`palette-${color}-100`),
        "--variant-solidDisabledColor": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
        "--variant-solidDisabledBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.1)`
      }
    },
    [`&, & [${INVERTED_COLORS_ATTR}]`]: skipInvertedColors(theme)
  };
};
var applySoftInversion = (color) => (themeProp) => {
  const {
    theme = themeProp
  } = themeProp;
  const getCssVarDefault = createGetCssVar(theme.cssVarPrefix);
  const prefixVar = createPrefixVar(theme.cssVarPrefix);
  const getCssVar = (cssVar) => {
    const tokens = cssVar.split("-");
    return getCssVarDefault(cssVar, theme.palette[tokens[1]][tokens[2]]);
  };
  return {
    [INVERTED_COLORS_SELECTOR]: {
      "--Badge-ringColor": getCssVar(`palette-${color}-softBg`),
      "--Icon-color": "currentColor",
      [theme.getColorSchemeSelector("dark")]: {
        [prefixVar("--palette-focusVisible")]: getCssVar(`palette-${color}-300`),
        [prefixVar("--palette-background-body")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.1)`,
        [prefixVar("--palette-background-surface")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`,
        [prefixVar("--palette-background-level1")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.2)`,
        [prefixVar("--palette-background-level2")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.4)`,
        [prefixVar("--palette-background-level3")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
        [prefixVar("--palette-text-primary")]: getCssVar(`palette-${color}-100`),
        [prefixVar("--palette-text-secondary")]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
        [prefixVar("--palette-text-tertiary")]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.6)`,
        [prefixVar("--palette-text-icon")]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.6)`,
        [prefixVar("--palette-divider")]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.2)`,
        "--variant-plainColor": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 1)`,
        "--variant-plainHoverColor": getCssVar(`palette-${color}-50`),
        "--variant-plainHoverBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.16)`,
        "--variant-plainActiveBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
        "--variant-plainDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
        "--variant-outlinedColor": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 1)`,
        "--variant-outlinedHoverColor": getCssVar(`palette-${color}-50`),
        "--variant-outlinedBg": "initial",
        "--variant-outlinedBorder": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.4)`,
        "--variant-outlinedHoverBorder": getCssVar(`palette-${color}-600`),
        "--variant-outlinedHoverBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.16)`,
        "--variant-outlinedActiveBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
        "--variant-outlinedDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
        "--variant-outlinedDisabledBorder": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.2)`,
        "--variant-softColor": getCssVar(`palette-${color}-200`),
        "--variant-softBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.24)`,
        "--variant-softHoverColor": "#fff",
        "--variant-softHoverBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
        "--variant-softActiveBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.48)`,
        "--variant-softDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
        "--variant-softDisabledBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
        "--variant-solidColor": "#fff",
        "--variant-solidBg": getCssVar(`palette-${color}-500`),
        "--variant-solidHoverColor": "#fff",
        "--variant-solidHoverBg": getCssVar(`palette-${color}-600`),
        "--variant-solidActiveBg": getCssVar(`palette-${color}-600`),
        "--variant-solidDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
        "--variant-solidDisabledBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`
      },
      // `light` (default color scheme) should come last in case that `theme.getColorSchemeSelector()` return the same value
      [theme.getColorSchemeSelector("light")]: {
        [prefixVar("--palette-focusVisible")]: getCssVar(`palette-${color}-500`),
        [prefixVar("--palette-background-body")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.1)`,
        [prefixVar("--palette-background-surface")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`,
        [prefixVar("--palette-background-level1")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.2)`,
        [prefixVar("--palette-background-level2")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
        [prefixVar("--palette-background-level3")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.48)`,
        [prefixVar("--palette-text-primary")]: getCssVar(`palette-${color}-700`),
        [prefixVar("--palette-text-secondary")]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.8)`,
        [prefixVar("--palette-text-tertiary")]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.68)`,
        [prefixVar("--palette-text-icon")]: getCssVar(`palette-${color}-500`),
        [prefixVar("--palette-divider")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
        "--variant-plainColor": `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.8)`,
        "--variant-plainHoverColor": `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 1)`,
        "--variant-plainHoverBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
        "--variant-plainActiveBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.24)`,
        "--variant-plainDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
        "--variant-outlinedColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 1)`,
        "--variant-outlinedBorder": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.4)`,
        "--variant-outlinedHoverColor": getCssVar(`palette-${color}-600`),
        "--variant-outlinedHoverBorder": getCssVar(`palette-${color}-300`),
        "--variant-outlinedHoverBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
        "--variant-outlinedActiveBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.24)`,
        "--variant-outlinedDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
        "--variant-outlinedDisabledBorder": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
        "--variant-softColor": getCssVar(`palette-${color}-600`),
        "--variant-softBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.8)`,
        "--variant-softHoverColor": getCssVar(`palette-${color}-700`),
        "--variant-softHoverBg": getCssVar(`palette-${color}-200`),
        "--variant-softActiveBg": getCssVar(`palette-${color}-300`),
        "--variant-softDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
        "--variant-softDisabledBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`,
        "--variant-solidColor": getCssVar("palette-common-white"),
        "--variant-solidBg": getCssVar(`palette-${color}-${color === "neutral" ? "700" : "500"}`),
        "--variant-solidHoverColor": getCssVar("palette-common-white"),
        "--variant-solidHoverBg": getCssVar(`palette-${color}-${color === "neutral" ? "600" : "600"}`),
        "--variant-solidActiveBg": getCssVar(`palette-${color}-${color === "neutral" ? "600" : "600"}`),
        "--variant-solidDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
        "--variant-solidDisabledBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`
      }
    },
    [`&, & [${INVERTED_COLORS_ATTR}]`]: skipInvertedColors(theme)
  };
};

// node_modules/@mui/joy/styles/styleUtils.js
init_extends();
var resolveSxValue = ({
  theme,
  ownerState
}, keys) => {
  let sxObject = {};
  function resolveSx(sxProp) {
    if (typeof sxProp === "function") {
      const result = sxProp(theme);
      resolveSx(result);
    } else if (Array.isArray(sxProp)) {
      sxProp.forEach((sxItem) => {
        if (typeof sxItem !== "boolean") {
          resolveSx(sxItem);
        }
      });
    } else if (typeof sxProp === "object") {
      sxObject = _extends({}, sxObject, sxProp);
    }
  }
  if (ownerState.sx) {
    resolveSx(ownerState.sx);
    keys.forEach((key) => {
      const value = sxObject[key];
      if (typeof value === "string" || typeof value === "number") {
        if (key === "borderRadius") {
          if (typeof value === "number") {
            sxObject[key] = `${value}px`;
          } else {
            var _theme$vars;
            sxObject[key] = ((_theme$vars = theme.vars) == null ? void 0 : _theme$vars.radius[value]) || value;
          }
        } else if (["p", "padding", "m", "margin"].indexOf(key) !== -1 && typeof value === "number") {
          sxObject[key] = theme.spacing(value);
        } else {
          sxObject[key] = value;
        }
      } else if (typeof value === "function") {
        sxObject[key] = value(theme);
      } else {
        sxObject[key] = void 0;
      }
    });
  }
  return sxObject;
};

// node_modules/@mui/joy/Sheet/sheetClasses.js
function getSheetUtilityClass(slot) {
  return generateUtilityClass("MuiSheet", slot);
}
var sheetClasses = generateUtilityClasses("MuiSheet", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);
var sheetClasses_default = sheetClasses;

// node_modules/@mui/joy/Sheet/Sheet.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className", "color", "component", "variant", "invertedColors", "slots", "slotProps"];
var useUtilityClasses = (ownerState) => {
  const {
    variant,
    color
  } = ownerState;
  const slots = {
    root: ["root", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`]
  };
  return composeClasses(slots, getSheetUtilityClass, {});
};
var SheetRoot = styled_default("div", {
  name: "JoySheet",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$variants, _theme$variants2;
  const variantStyle = (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color];
  const {
    borderRadius: childRadius,
    bgcolor,
    backgroundColor,
    background
  } = resolveSxValue({
    theme,
    ownerState
  }, ["borderRadius", "bgcolor", "backgroundColor", "background"]);
  const resolvedBg = getPath(theme, `palette.${bgcolor}`) || bgcolor || getPath(theme, `palette.${backgroundColor}`) || backgroundColor || background || (variantStyle == null ? void 0 : variantStyle.backgroundColor) || (variantStyle == null ? void 0 : variantStyle.background) || theme.vars.palette.background.surface;
  return [_extends({
    "--Icon-color": ownerState.color !== "neutral" || ownerState.variant === "solid" ? "currentColor" : theme.vars.palette.text.icon,
    "--ListItem-stickyBackground": resolvedBg === "transparent" ? "initial" : resolvedBg,
    // for sticky List
    "--Sheet-background": resolvedBg === "transparent" ? "initial" : resolvedBg
  }, childRadius !== void 0 && {
    "--List-radius": `calc(${childRadius} - var(--variant-borderWidth, 0px))`,
    "--unstable_actionRadius": `calc(${childRadius} - var(--variant-borderWidth, 0px))`
  }, {
    backgroundColor: theme.vars.palette.background.surface,
    position: "relative"
  }), _extends({}, theme.typography["body-md"], ownerState.variant === "solid" && ownerState.color && ownerState.invertedColors && applySolidInversion(ownerState.color)(theme), ownerState.variant === "soft" && ownerState.color && ownerState.invertedColors && applySoftInversion(ownerState.color)(theme), (_theme$variants2 = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants2[ownerState.color], variantStyle)];
});
var Sheet = React.forwardRef(function Sheet2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoySheet"
  });
  const {
    className,
    color = "neutral",
    component = "div",
    variant = "plain",
    invertedColors = false,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    color,
    component,
    invertedColors,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: SheetRoot,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime.jsx)(SlotRoot, _extends({}, rootProps));
});
true ? Sheet.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * If `true`, the children with an implicit color prop invert their colors to match the component's variant and color.
   * @default false
   */
  invertedColors: import_prop_types.default.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    root: import_prop_types.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types.default.string])
} : void 0;
var Sheet_default = Sheet;
export {
  Sheet_default as default,
  getSheetUtilityClass,
  sheetClasses_default as sheetClasses
};
//# sourceMappingURL=@mui_joy_Sheet.js.map
