"use client";
import {
  generateUtilityClass,
  generateUtilityClasses,
  styled_default,
  useSlot,
  useThemeProps
} from "./chunk-BUSIWBR7.js";
import "./chunk-TTOBSZ4K.js";
import {
  capitalize,
  composeClasses,
  extendSxProp,
  init_composeClasses,
  init_esm,
  init_utils,
  isMuiElement
} from "./chunk-I4BCTFV6.js";
import "./chunk-LYZ7FTXO.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  init_extends,
  init_objectWithoutPropertiesLoose,
  require_prop_types
} from "./chunk-7CMT25SK.js";
import "./chunk-URLHUEZE.js";
import {
  require_jsx_runtime
} from "./chunk-XWFUUR5D.js";
import {
  require_react
} from "./chunk-LNTNMRP6.js";
import {
  __toESM
} from "./chunk-FWVXXLA5.js";

// node_modules/@mui/joy/Typography/Typography.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_utils();
init_esm();
init_composeClasses();

// node_modules/@mui/joy/Typography/typographyClasses.js
function getTypographyUtilityClass(slot) {
  return generateUtilityClass("MuiTypography", slot);
}
var typographyClasses = generateUtilityClasses("MuiTypography", ["root", "h1", "h2", "h3", "h4", "title-lg", "title-md", "title-sm", "body-lg", "body-md", "body-sm", "body-xs", "noWrap", "gutterBottom", "startDecorator", "endDecorator", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);
var typographyClasses_default = typographyClasses;

// node_modules/@mui/joy/Typography/Typography.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded = ["color", "textColor"];
var _excluded2 = ["component", "gutterBottom", "noWrap", "level", "levelMapping", "children", "endDecorator", "startDecorator", "variant", "slots", "slotProps"];
var TypographyNestedContext = React.createContext(false);
var TypographyInheritContext = React.createContext(false);
var useUtilityClasses = (ownerState) => {
  const {
    gutterBottom,
    noWrap,
    level,
    color,
    variant
  } = ownerState;
  const slots = {
    root: ["root", level, gutterBottom && "gutterBottom", noWrap && "noWrap", color && `color${capitalize(color)}`, variant && `variant${capitalize(variant)}`],
    startDecorator: ["startDecorator"],
    endDecorator: ["endDecorator"]
  };
  return composeClasses(slots, getTypographyUtilityClass, {});
};
var StartDecorator = styled_default("span", {
  name: "JoyTypography",
  slot: "StartDecorator",
  overridesResolver: (props, styles) => styles.startDecorator
})({
  display: "inline-flex",
  marginInlineEnd: "clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)"
});
var EndDecorator = styled_default("span", {
  name: "JoyTypography",
  slot: "endDecorator",
  overridesResolver: (props, styles) => styles.endDecorator
})({
  display: "inline-flex",
  marginInlineStart: "clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)"
});
var TypographyRoot = styled_default("span", {
  name: "JoyTypography",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$typography, _theme$typography$own, _theme$typography$own2, _theme$vars$palette$o, _theme$variants$owner;
  const lineHeight = ownerState.level !== "inherit" ? (_theme$typography = theme.typography[ownerState.level]) == null ? void 0 : _theme$typography.lineHeight : "1";
  return _extends({
    "--Icon-fontSize": `calc(1em * ${lineHeight})`
  }, ownerState.color && {
    "--Icon-color": "currentColor"
  }, {
    margin: "var(--Typography-margin, 0px)"
  }, ownerState.nesting ? {
    display: "inline"
    // looks better than `inline-block` when using with `variant` prop.
  } : _extends({
    display: "block"
  }, ownerState.unstable_hasSkeleton && {
    position: "relative"
  }), (ownerState.startDecorator || ownerState.endDecorator) && _extends({
    display: "flex",
    alignItems: "center"
  }, ownerState.nesting && _extends({
    display: "inline-flex"
  }, ownerState.startDecorator && {
    verticalAlign: "bottom"
    // to make the text align with the parent's content
  })), ownerState.level && ownerState.level !== "inherit" && theme.typography[ownerState.level], {
    fontSize: `var(--Typography-fontSize, ${ownerState.level && ownerState.level !== "inherit" ? (_theme$typography$own = (_theme$typography$own2 = theme.typography[ownerState.level]) == null ? void 0 : _theme$typography$own2.fontSize) != null ? _theme$typography$own : "inherit" : "inherit"})`
  }, ownerState.noWrap && {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, ownerState.gutterBottom && {
    marginBottom: "0.35em"
  }, ownerState.color && {
    color: `var(--variant-plainColor, rgba(${(_theme$vars$palette$o = theme.vars.palette[ownerState.color]) == null ? void 0 : _theme$vars$palette$o.mainChannel} / 1))`
  }, ownerState.variant && _extends({
    borderRadius: theme.vars.radius.xs,
    paddingBlock: "min(0.1em, 4px)",
    paddingInline: "0.25em"
  }, !ownerState.nesting && {
    marginInline: "-0.25em"
  }, (_theme$variants$owner = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants$owner[ownerState.color]));
});
var defaultVariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  "title-lg": "p",
  "title-md": "p",
  "title-sm": "p",
  "body-lg": "p",
  "body-md": "p",
  "body-sm": "p",
  "body-xs": "span",
  inherit: "p"
};
var Typography = React.forwardRef(function Typography2(inProps, ref) {
  var _inProps$color;
  const _useThemeProps = useThemeProps({
    props: inProps,
    name: "JoyTypography"
  }), {
    color: colorProp,
    textColor
  } = _useThemeProps, themeProps = _objectWithoutPropertiesLoose(_useThemeProps, _excluded);
  const nesting = React.useContext(TypographyNestedContext);
  const inheriting = React.useContext(TypographyInheritContext);
  const props = extendSxProp(_extends({}, themeProps, {
    color: textColor
  }));
  const {
    component: componentProp,
    gutterBottom = false,
    noWrap = false,
    level: levelProp = "body-md",
    levelMapping = defaultVariantMapping,
    children,
    endDecorator,
    startDecorator,
    variant,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const color = (_inProps$color = inProps.color) != null ? _inProps$color : variant ? colorProp != null ? colorProp : "neutral" : colorProp;
  const level = nesting || inheriting ? inProps.level || "inherit" : levelProp;
  const hasSkeleton = isMuiElement(children, ["Skeleton"]);
  const component = componentProp || (nesting ? "span" : levelMapping[level] || defaultVariantMapping[level] || "span");
  const ownerState = _extends({}, props, {
    level,
    component,
    color,
    gutterBottom,
    noWrap,
    nesting,
    variant,
    unstable_hasSkeleton: hasSkeleton
  });
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: classes.root,
    elementType: TypographyRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotStartDecorator, startDecoratorProps] = useSlot("startDecorator", {
    className: classes.startDecorator,
    elementType: StartDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndDecorator, endDecoratorProps] = useSlot("endDecorator", {
    className: classes.endDecorator,
    elementType: EndDecorator,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime.jsx)(TypographyNestedContext.Provider, {
    value: true,
    children: (0, import_jsx_runtime2.jsxs)(SlotRoot, _extends({}, rootProps, {
      children: [startDecorator && (0, import_jsx_runtime.jsx)(SlotStartDecorator, _extends({}, startDecoratorProps, {
        children: startDecorator
      })), hasSkeleton ? React.cloneElement(children, {
        variant: children.props.variant || "inline"
      }) : children, endDecorator && (0, import_jsx_runtime.jsx)(SlotEndDecorator, _extends({}, endDecoratorProps, {
        children: endDecorator
      }))]
    }))
  });
});
true ? Typography.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * Element placed after the children.
   */
  endDecorator: import_prop_types.default.node,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: import_prop_types.default.bool,
  /**
   * Applies the theme typography styles.
   * @default 'body-md'
   */
  level: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["h1", "h2", "h3", "h4", "title-lg", "title-md", "title-sm", "body-lg", "body-md", "body-sm", "body-xs", "inherit"]), import_prop_types.default.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, body1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   'title-lg': 'p',
   *   'title-md': 'p',
   *   'title-sm': 'p',
   *   'body-lg': 'p',
   *   'body-md': 'p',
   *   'body-sm': 'p',
   *   'body-xs': 'span',
   *   inherit: 'p',
   * }
   */
  levelMapping: import_prop_types.default.object,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: import_prop_types.default.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    endDecorator: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    startDecorator: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    endDecorator: import_prop_types.default.elementType,
    root: import_prop_types.default.elementType,
    startDecorator: import_prop_types.default.elementType
  }),
  /**
   * Element placed before the children.
   */
  startDecorator: import_prop_types.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The system color.
   */
  textColor: import_prop_types.default.any,
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types.default.string])
} : void 0;
Typography.muiName = "Typography";
var Typography_default = Typography;
export {
  Typography_default as default,
  getTypographyUtilityClass,
  typographyClasses_default as typographyClasses
};
//# sourceMappingURL=@mui_joy_Typography.js.map
