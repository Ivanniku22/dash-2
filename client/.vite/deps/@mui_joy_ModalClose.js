"use client";
import {
  ButtonGroupContext_default,
  CircularProgress_default,
  ToggleButtonGroupContext_default
} from "./chunk-7CI76K4T.js";
import {
  useButton
} from "./chunk-4LZM6MBP.js";
import {
  CloseModalContext_default
} from "./chunk-PUGYHDXJ.js";
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
  init_composeClasses,
  init_utils,
  useForkRef
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

// node_modules/@mui/joy/ModalClose/ModalClose.js
init_objectWithoutPropertiesLoose();
init_extends();
var React7 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/joy/IconButton/IconButton.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_utils();
init_composeClasses();

// node_modules/@mui/joy/IconButton/iconButtonClasses.js
function getIconButtonUtilityClass(slot) {
  return generateUtilityClass("MuiIconButton", slot);
}
var iconButtonClasses = generateUtilityClasses("MuiIconButton", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "focusVisible", "disabled", "sizeSm", "sizeMd", "sizeLg", "loading", "loadingIndicator"]);

// node_modules/@mui/joy/IconButton/IconButton.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["children", "action", "component", "color", "disabled", "variant", "loading", "loadingIndicator", "size", "slots", "slotProps"];
var useUtilityClasses = (ownerState) => {
  const {
    color,
    disabled,
    focusVisible,
    focusVisibleClassName,
    size,
    variant,
    loading
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`, loading && "loading"],
    loadingIndicator: ["loadingIndicator"]
  };
  const composedClasses = composeClasses(slots, getIconButtonUtilityClass, {});
  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += ` ${focusVisibleClassName}`;
  }
  return composedClasses;
};
var StyledIconButton = styled_default("button")(({
  theme,
  ownerState
}) => {
  var _theme$variants, _theme$variants2, _theme$variants3, _theme$variants4;
  return [_extends({
    "--Icon-margin": "initial",
    // reset the icon's margin.
    "--Icon-color": ownerState.color !== "neutral" || ownerState.variant === "solid" ? "currentColor" : theme.vars.palette.text.icon
  }, ownerState.instanceSize && {
    "--IconButton-size": {
      sm: "2rem",
      md: "2.25rem",
      lg: "2.75rem"
    }[ownerState.instanceSize]
  }, ownerState.size === "sm" && {
    "--Icon-fontSize": "calc(var(--IconButton-size, 2rem) / 1.6)",
    // 1.25rem by default
    "--CircularProgress-size": "20px",
    "--CircularProgress-thickness": "2px",
    minWidth: "var(--IconButton-size, 2rem)",
    // use min-width instead of height to make the button resilient to its content
    minHeight: "var(--IconButton-size, 2rem)",
    // use min-height instead of height to make the button resilient to its content
    fontSize: theme.vars.fontSize.sm,
    paddingInline: "2px"
    // add a gap, in case the content is long, e.g. multiple icons
  }, ownerState.size === "md" && {
    "--Icon-fontSize": "calc(var(--IconButton-size, 2.25rem) / 1.5)",
    // 1.5rem by default
    "--CircularProgress-size": "20px",
    "--CircularProgress-thickness": "2px",
    minWidth: "var(--IconButton-size, 2.25rem)",
    minHeight: "var(--IconButton-size, 2.25rem)",
    fontSize: theme.vars.fontSize.md,
    paddingInline: "0.25rem"
  }, ownerState.size === "lg" && {
    "--Icon-fontSize": "calc(var(--IconButton-size, 2.75rem) / 1.571)",
    // 1.75rem by default
    "--CircularProgress-size": "28px",
    "--CircularProgress-thickness": "4px",
    minWidth: "var(--IconButton-size, 2.75rem)",
    minHeight: "var(--IconButton-size, 2.75rem)",
    fontSize: theme.vars.fontSize.lg,
    paddingInline: "0.375rem"
  }, {
    WebkitTapHighlightColor: "transparent",
    paddingBlock: 0,
    fontFamily: theme.vars.fontFamily.body,
    fontWeight: theme.vars.fontWeight.md,
    margin: `var(--IconButton-margin)`,
    // to be controlled by other components, e.g. Input
    borderRadius: `var(--IconButton-radius, ${theme.vars.radius.sm})`,
    // to be controlled by other components, e.g. Input
    border: "none",
    boxSizing: "border-box",
    backgroundColor: "transparent",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    [theme.focus.selector]: _extends({
      "--Icon-color": "currentColor"
    }, theme.focus.default)
  }), _extends({}, (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color], {
    "&:hover": {
      "@media (hover: hover)": _extends({
        "--Icon-color": "currentColor"
      }, (_theme$variants2 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants2[ownerState.color])
    },
    '&:active, &[aria-pressed="true"]': _extends({
      "--Icon-color": "currentColor"
    }, (_theme$variants3 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants3[ownerState.color]),
    "&:disabled": (_theme$variants4 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants4[ownerState.color]
  })];
});
var IconButtonRoot = styled_default(StyledIconButton, {
  name: "JoyIconButton",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var ButtonLoading = styled_default("span", {
  name: "JoyIconButton",
  slot: "LoadingIndicator",
  overridesResolver: (props, styles) => styles.loadingIndicator
})(({
  theme,
  ownerState
}) => {
  var _theme$variants5, _theme$variants6;
  return _extends({
    display: "inherit",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    color: (_theme$variants5 = theme.variants[ownerState.variant]) == null || (_theme$variants5 = _theme$variants5[ownerState.color]) == null ? void 0 : _theme$variants5.color
  }, ownerState.disabled && {
    color: (_theme$variants6 = theme.variants[`${ownerState.variant}Disabled`]) == null || (_theme$variants6 = _theme$variants6[ownerState.color]) == null ? void 0 : _theme$variants6.color
  });
});
var IconButton = React.forwardRef(function IconButton2(inProps, ref) {
  var _ref;
  const props = useThemeProps({
    props: inProps,
    name: "JoyIconButton"
  });
  const {
    children,
    action,
    component = "button",
    color: colorProp = "neutral",
    disabled: disabledProp,
    variant: variantProp = "plain",
    loading = false,
    loadingIndicator: loadingIndicatorProp,
    size: sizeProp = "md",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const buttonGroup = React.useContext(ButtonGroupContext_default);
  const toggleButtonGroup = React.useContext(ToggleButtonGroupContext_default);
  const variant = inProps.variant || buttonGroup.variant || variantProp;
  const size = inProps.size || buttonGroup.size || sizeProp;
  const color = inProps.color || buttonGroup.color || colorProp;
  const disabled = (_ref = inProps.loading || inProps.disabled) != null ? _ref : buttonGroup.disabled || loading || disabledProp;
  const buttonRef = React.useRef(null);
  const handleRef = useForkRef(buttonRef, ref);
  const {
    focusVisible,
    setFocusVisible,
    getRootProps
  } = useButton(_extends({}, props, {
    disabled,
    rootRef: handleRef
  }));
  const loadingIndicator = loadingIndicatorProp != null ? loadingIndicatorProp : (0, import_jsx_runtime.jsx)(CircularProgress_default, {
    color,
    thickness: {
      sm: 2,
      md: 3,
      lg: 4
    }[size] || 3
  });
  React.useImperativeHandle(action, () => ({
    focusVisible: () => {
      var _buttonRef$current;
      setFocusVisible(true);
      (_buttonRef$current = buttonRef.current) == null || _buttonRef$current.focus();
    }
  }), [setFocusVisible]);
  const ownerState = _extends({}, props, {
    component,
    color,
    disabled,
    variant,
    loading,
    size,
    focusVisible,
    instanceSize: inProps.size
  });
  const classes = useUtilityClasses(ownerState);
  const handleClick = (event) => {
    var _onClick;
    let onClick = props.onClick;
    if (typeof slotProps.root === "function") {
      onClick = slotProps.root(ownerState).onClick;
    } else if (slotProps.root) {
      onClick = slotProps.root.onClick;
    }
    (_onClick = onClick) == null || _onClick(event);
    if (toggleButtonGroup) {
      var _toggleButtonGroup$on;
      (_toggleButtonGroup$on = toggleButtonGroup.onClick) == null || _toggleButtonGroup$on.call(toggleButtonGroup, event, props.value);
    }
  };
  let ariaPressed = props["aria-pressed"];
  if (typeof slotProps.root === "function") {
    ariaPressed = slotProps.root(ownerState)["aria-pressed"];
  } else if (slotProps.root) {
    ariaPressed = slotProps.root["aria-pressed"];
  }
  if (toggleButtonGroup != null && toggleButtonGroup.value) {
    if (Array.isArray(toggleButtonGroup.value)) {
      ariaPressed = toggleButtonGroup.value.indexOf(props.value) !== -1;
    } else {
      ariaPressed = toggleButtonGroup.value === props.value;
    }
  }
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: classes.root,
    elementType: IconButtonRoot,
    getSlotProps: getRootProps,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      onClick: handleClick,
      "aria-pressed": ariaPressed
    }
  });
  const [SlotLoadingIndicator, loadingIndicatorProps] = useSlot("loadingIndicator", {
    className: classes.loadingIndicator,
    elementType: ButtonLoading,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime.jsx)(SlotRoot, _extends({}, rootProps, {
    children: loading ? (0, import_jsx_runtime.jsx)(SlotLoadingIndicator, _extends({}, loadingIndicatorProps, {
      children: loadingIndicator
    })) : children
  }));
});
true ? IconButton.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions. It currently only supports `focusVisible()` action.
   */
  action: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.shape({
    current: import_prop_types.default.shape({
      focusVisible: import_prop_types.default.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  children: import_prop_types.default.node,
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
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types.default.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: import_prop_types.default.string,
  /**
   * If `true`, the loading indicator is shown and the icon button becomes disabled.
   * @default false
   */
  loading: import_prop_types.default.bool,
  /**
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default we render a `CircularProgress` that is labelled by the button itself.
   * @default <CircularProgress />
   */
  loadingIndicator: import_prop_types.default.node,
  /**
   * @ignore
   */
  onClick: import_prop_types.default.func,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["sm", "md", "lg"]), import_prop_types.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    loadingIndicator: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    loadingIndicator: import_prop_types.default.elementType,
    root: import_prop_types.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * @default 0
   */
  tabIndex: import_prop_types.default.number,
  /**
   * @ignore
   */
  value: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.string), import_prop_types.default.number, import_prop_types.default.string]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types.default.string])
} : void 0;
IconButton.muiName = "IconButton";

// node_modules/@mui/joy/ModalClose/modalCloseClasses.js
function getModalCloseUtilityClass(slot) {
  return generateUtilityClass("MuiModalClose", slot);
}
var modalCloseClasses = generateUtilityClasses("MuiModalClose", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "sizeSm", "sizeMd", "sizeLg"]);
var modalCloseClasses_default = modalCloseClasses;

// node_modules/@mui/joy/internal/svg-icons/Close.js
var React4 = __toESM(require_react());

// node_modules/@mui/joy/utils/createSvgIcon.js
init_extends();
var React3 = __toESM(require_react());

// node_modules/@mui/joy/SvgIcon/SvgIcon.js
init_objectWithoutPropertiesLoose();
init_extends();
init_utils();
init_clsx();
var import_prop_types2 = __toESM(require_prop_types());
var React2 = __toESM(require_react());

// node_modules/@mui/joy/SvgIcon/svgIconClasses.js
function getSvgIconUtilityClass(slot) {
  return generateUtilityClass("MuiSvgIcon", slot);
}
var svgIconClasses = generateUtilityClasses("MuiSvgIcon", ["root", "colorInherit", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "fontSizeInherit", "fontSizeXs", "fontSizeSm", "fontSizeMd", "fontSizeLg", "fontSizeXl", "fontSizeXl2", "fontSizeXl3", "fontSizeXl4", "sizeSm", "sizeMd", "sizeLg"]);

// node_modules/@mui/joy/SvgIcon/SvgIcon.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var _excluded2 = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox", "size", "slots", "slotProps"];
var useUtilityClasses2 = (ownerState) => {
  const {
    color,
    size,
    fontSize
  } = ownerState;
  const slots = {
    root: ["root", color && color !== "inherit" && `color${capitalize(color)}`, size && `size${capitalize(size)}`, fontSize && `fontSize${capitalize(fontSize)}`]
  };
  return composeClasses(slots, getSvgIconUtilityClass, {});
};
var sizeMap = {
  sm: "xl",
  md: "xl2",
  lg: "xl3"
};
var SvgIconRoot = styled_default("svg", {
  name: "JoySvgIcon",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$vars$palette;
  return _extends({}, ownerState.instanceSize && {
    "--Icon-fontSize": theme.vars.fontSize[sizeMap[ownerState.instanceSize]]
  }, ownerState.instanceFontSize && ownerState.instanceFontSize !== "inherit" && {
    "--Icon-fontSize": theme.vars.fontSize[ownerState.instanceFontSize]
  }, {
    userSelect: "none",
    margin: "var(--Icon-margin)",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // e.g. heroicons uses fill="none" and stroke="currentColor"
    fill: ownerState.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    fontSize: `var(--Icon-fontSize, ${theme.vars.fontSize[sizeMap[ownerState.size]] || "unset"})`
  }, ownerState.fontSize && ownerState.fontSize !== "inherit" && {
    fontSize: `var(--Icon-fontSize, ${theme.fontSize[ownerState.fontSize]})`
  }, !ownerState.htmlColor && _extends({
    color: `var(--Icon-color, ${theme.vars.palette.text.icon})`
  }, ownerState.color === "inherit" && {
    color: "inherit"
  }, ownerState.color !== "inherit" && theme.vars.palette[ownerState.color] && {
    color: `rgba(${(_theme$vars$palette = theme.vars.palette[ownerState.color]) == null ? void 0 : _theme$vars$palette.mainChannel} / 1)`
  }));
});
var SvgIcon = React2.forwardRef(function SvgIcon2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoySvgIcon"
  });
  const {
    children,
    className,
    color,
    component = "svg",
    fontSize,
    htmlColor,
    inheritViewBox = false,
    titleAccess,
    viewBox = "0 0 24 24",
    size = "md",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const hasSvgAsChild = React2.isValidElement(children) && children.type === "svg";
  const ownerState = _extends({}, props, {
    color,
    component,
    size,
    instanceSize: inProps.size,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox,
    hasSvgAsChild
  });
  const classes = useUtilityClasses2(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: SvgIconRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: _extends({
      color: htmlColor,
      focusable: false
    }, titleAccess && {
      role: "img"
    }, !titleAccess && {
      "aria-hidden": true
    }, !inheritViewBox && {
      viewBox
    }, hasSvgAsChild && children.props)
  });
  return (0, import_jsx_runtime3.jsxs)(SlotRoot, _extends({}, rootProps, {
    children: [hasSvgAsChild ? children.props.children : children, titleAccess ? (0, import_jsx_runtime2.jsx)("title", {
      children: titleAccess
    }) : null]
  }));
});
true ? SvgIcon.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: import_prop_types2.default.node,
  /**
   * @ignore
   */
  className: import_prop_types2.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   */
  color: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["danger", "inherit", "neutral", "primary", "success", "warning"]), import_prop_types2.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types2.default.elementType,
  /**
   * The theme's fontSize applied to the icon that will override the `size` prop.
   * Use this prop when you want to use a specific font-size from the theme.
   */
  fontSize: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["inherit", "lg", "md", "sm", "xl", "xl2", "xl3", "xl4", "xs"]), import_prop_types2.default.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: import_prop_types2.default.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: import_prop_types2.default.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: import_prop_types2.default.string,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["sm", "md", "lg"]), import_prop_types2.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types2.default.shape({
    root: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types2.default.shape({
    root: import_prop_types2.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: import_prop_types2.default.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: import_prop_types2.default.string
} : void 0;
var SvgIcon_default = SvgIcon;

// node_modules/@mui/joy/utils/createSvgIcon.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return (0, import_jsx_runtime4.jsx)(SvgIcon_default, _extends({
      "data-testid": `${displayName}Icon`,
      ref
    }, props, {
      children: path
    }));
  }
  if (true) {
    Component.displayName = `${displayName}Icon`;
  }
  Component.muiName = SvgIcon_default.muiName;
  return React3.memo(React3.forwardRef(Component));
}

// node_modules/@mui/joy/internal/svg-icons/Close.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var Close_default = createSvgIcon((0, import_jsx_runtime5.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");

// node_modules/@mui/joy/ModalDialog/ModalDialogSizeContext.js
var React5 = __toESM(require_react());
var ModalDialogSizeContext = React5.createContext(void 0);
var ModalDialogSizeContext_default = ModalDialogSizeContext;

// node_modules/@mui/joy/ModalDialog/ModalDialogVariantColorContext.js
var React6 = __toESM(require_react());
var ModalDialogVariantColorContext = React6.createContext(void 0);
var ModalDialogVariantColorContext_default = ModalDialogVariantColorContext;

// node_modules/@mui/joy/ModalClose/ModalClose.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var _CloseIcon;
var _excluded3 = ["component", "color", "variant", "size", "onClick", "slots", "slotProps"];
var useUtilityClasses3 = (ownerState) => {
  const {
    variant,
    color,
    disabled,
    focusVisible,
    size
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`]
  };
  return composeClasses(slots, getModalCloseUtilityClass, {});
};
var ModalCloseRoot = styled_default(StyledIconButton, {
  name: "JoyModalClose",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState,
  theme
}) => {
  var _theme$variants;
  return _extends({}, ownerState.size === "sm" && {
    "--IconButton-size": "1.75rem"
  }, ownerState.size === "md" && {
    "--IconButton-size": "2rem"
  }, ownerState.size === "lg" && {
    "--IconButton-size": "2.25rem"
  }, {
    position: "absolute",
    zIndex: 1,
    // stay on top of the title in case it is positioned relatively
    top: `var(--ModalClose-inset, 0.625rem)`,
    right: `var(--ModalClose-inset, 0.625rem)`,
    borderRadius: `var(--ModalClose-radius, ${theme.vars.radius.sm})`
  }, !((_theme$variants = theme.variants[ownerState.variant]) != null && (_theme$variants = _theme$variants[ownerState.color]) != null && _theme$variants.backgroundColor) && {
    color: theme.vars.palette.text.secondary
  });
});
var modalDialogVariantMapping = {
  plain: "plain",
  outlined: "plain",
  soft: "soft",
  solid: "solid"
};
var ModalClose = React7.forwardRef(function ModalClose2(inProps, ref) {
  var _ref, _inProps$variant, _ref2, _inProps$color, _ref3, _inProps$size;
  const props = useThemeProps({
    props: inProps,
    name: "JoyModalClose"
  });
  const {
    component = "button",
    color: colorProp = "neutral",
    variant: variantProp = "plain",
    size: sizeProp = "md",
    onClick,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  const closeModalContext = React7.useContext(CloseModalContext_default);
  const modalDialogVariantColor = React7.useContext(ModalDialogVariantColorContext_default);
  const variant = (_ref = (_inProps$variant = inProps.variant) != null ? _inProps$variant : modalDialogVariantMapping[modalDialogVariantColor == null ? void 0 : modalDialogVariantColor.variant]) != null ? _ref : variantProp;
  const color = (_ref2 = (_inProps$color = inProps.color) != null ? _inProps$color : modalDialogVariantColor == null ? void 0 : modalDialogVariantColor.color) != null ? _ref2 : colorProp;
  const modalDialogSize = React7.useContext(ModalDialogSizeContext_default);
  const size = (_ref3 = (_inProps$size = inProps.size) != null ? _inProps$size : modalDialogSize) != null ? _ref3 : sizeProp;
  const {
    focusVisible,
    getRootProps
  } = useButton(_extends({}, props, {
    rootRef: ref
  }));
  const ownerState = _extends({}, props, {
    color,
    component,
    variant,
    size,
    focusVisible
  });
  const classes = useUtilityClasses3(ownerState);
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    elementType: ModalCloseRoot,
    getSlotProps: getRootProps,
    externalForwardedProps: _extends({
      onClick: (event) => {
        closeModalContext == null || closeModalContext(event, "closeClick");
        onClick == null || onClick(event);
      }
    }, other, {
      component,
      slots,
      slotProps
    }),
    className: classes.root,
    ownerState
  });
  return (0, import_jsx_runtime6.jsx)(SlotRoot, _extends({}, rootProps, {
    children: _CloseIcon || (_CloseIcon = (0, import_jsx_runtime6.jsx)(Close_default, {}))
  }));
});
true ? ModalClose.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types3.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types3.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types3.default.elementType,
  /**
   * @ignore
   */
  onClick: import_prop_types3.default.func,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["sm", "md", "lg"]), import_prop_types3.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types3.default.shape({
    root: import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types3.default.shape({
    root: import_prop_types3.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types3.default.string])
} : void 0;
var ModalClose_default = ModalClose;
export {
  ModalClose_default as default,
  getModalCloseUtilityClass,
  modalCloseClasses_default as modalCloseClasses
};
//# sourceMappingURL=@mui_joy_ModalClose.js.map
