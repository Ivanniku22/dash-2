import {
  generateUtilityClass,
  generateUtilityClasses,
  styled_default,
  useSlot,
  useThemeProps
} from "./chunk-BUSIWBR7.js";
import {
  capitalize,
  composeClasses,
  css,
  init_esm,
  init_utils,
  keyframes
} from "./chunk-I4BCTFV6.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  clsx_default,
  init_clsx,
  init_extends,
  init_objectWithoutPropertiesLoose,
  require_prop_types
} from "./chunk-7CMT25SK.js";
import {
  require_jsx_runtime
} from "./chunk-XWFUUR5D.js";
import {
  require_react
} from "./chunk-LNTNMRP6.js";
import {
  __toESM
} from "./chunk-FWVXXLA5.js";

// node_modules/@mui/joy/CircularProgress/CircularProgress.js
init_extends();
init_objectWithoutPropertiesLoose();
var import_prop_types = __toESM(require_prop_types());
var React = __toESM(require_react());
init_clsx();
init_utils();
init_esm();

// node_modules/@mui/joy/CircularProgress/circularProgressClasses.js
function getCircularProgressUtilityClass(slot) {
  return generateUtilityClass("MuiCircularProgress", slot);
}
var circularProgressClasses = generateUtilityClasses("MuiCircularProgress", ["root", "determinate", "svg", "track", "progress", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "sizeSm", "sizeMd", "sizeLg", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);

// node_modules/@mui/joy/CircularProgress/CircularProgress.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _ = (t) => t;
var _t;
var _excluded = ["color", "backgroundColor"];
var _excluded2 = ["children", "className", "color", "size", "variant", "thickness", "determinate", "value", "component", "slots", "slotProps"];
var circulate = keyframes({
  "0%": {
    // let the progress start at the top of the ring
    transform: "rotate(-90deg)"
  },
  "100%": {
    transform: "rotate(270deg)"
  }
});
var useUtilityClasses = (ownerState) => {
  const {
    determinate,
    color,
    variant,
    size
  } = ownerState;
  const slots = {
    root: ["root", determinate && "determinate", color && `color${capitalize(color)}`, variant && `variant${capitalize(variant)}`, size && `size${capitalize(size)}`],
    svg: ["svg"],
    track: ["track"],
    progress: ["progress"]
  };
  return composeClasses(slots, getCircularProgressUtilityClass, {});
};
function getThickness(slot, defaultValue) {
  return `var(--CircularProgress-${slot}Thickness, var(--CircularProgress-thickness, ${defaultValue}))`;
}
var CircularProgressRoot = styled_default("span", {
  name: "JoyCircularProgress",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState,
  theme
}) => {
  var _theme$variants, _theme$variants$solid, _theme$variants$softH, _theme$variants$solid2;
  const _ref = ((_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color]) || {}, {
    color,
    backgroundColor
  } = _ref, rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  return _extends({
    // integration with icon
    "--Icon-fontSize": "calc(0.4 * var(--_root-size))",
    // public variables
    "--CircularProgress-trackColor": backgroundColor,
    "--CircularProgress-progressColor": color,
    "--CircularProgress-percent": ownerState.value,
    // 0 - 100
    "--CircularProgress-linecap": "round"
  }, ownerState.size === "sm" && {
    "--_root-size": "var(--CircularProgress-size, 24px)",
    // use --_root-size to let other components overrides via --CircularProgress-size
    "--_track-thickness": getThickness("track", "3px"),
    "--_progress-thickness": getThickness("progress", "3px")
  }, ownerState.instanceSize === "sm" && {
    "--CircularProgress-size": "24px"
  }, ownerState.size === "md" && {
    "--_track-thickness": getThickness("track", "6px"),
    "--_progress-thickness": getThickness("progress", "6px"),
    "--_root-size": "var(--CircularProgress-size, 40px)"
  }, ownerState.instanceSize === "md" && {
    "--CircularProgress-size": "40px"
  }, ownerState.size === "lg" && {
    "--_track-thickness": getThickness("track", "8px"),
    "--_progress-thickness": getThickness("progress", "8px"),
    "--_root-size": "var(--CircularProgress-size, 64px)"
  }, ownerState.instanceSize === "lg" && {
    "--CircularProgress-size": "64px"
  }, ownerState.thickness && {
    "--_track-thickness": `${ownerState.thickness}px`,
    "--_progress-thickness": `${ownerState.thickness}px`
  }, {
    // internal variables
    "--_thickness-diff": "calc(var(--_track-thickness) - var(--_progress-thickness))",
    "--_inner-size": "calc(var(--_root-size) - 2 * var(--variant-borderWidth, 0px))",
    "--_outlined-inset": "max(var(--_track-thickness), var(--_progress-thickness))",
    width: "var(--_root-size)",
    height: "var(--_root-size)",
    borderRadius: "var(--_root-size)",
    margin: "var(--CircularProgress-margin)",
    boxSizing: "border-box",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    // prevent from shrinking when CircularProgress is in a flex container.
    position: "relative",
    color
  }, ownerState.children && {
    // only add font related properties when there is a child.
    // so that when there is no child, the size can be controlled by the parent font-size e.g. Link
    fontFamily: theme.vars.fontFamily.body,
    fontWeight: theme.vars.fontWeight.md,
    fontSize: "calc(0.2 * var(--_root-size))"
  }, rest, ownerState.variant === "outlined" && {
    "&::before": _extends({
      content: '""',
      display: "block",
      position: "absolute",
      borderRadius: "inherit",
      top: "var(--_outlined-inset)",
      left: "var(--_outlined-inset)",
      right: "var(--_outlined-inset)",
      bottom: "var(--_outlined-inset)"
    }, rest)
  }, ownerState.variant === "soft" && {
    "--CircularProgress-trackColor": theme.variants.soft.neutral.backgroundColor,
    "--CircularProgress-progressColor": (_theme$variants$solid = theme.variants.solid) == null ? void 0 : _theme$variants$solid[ownerState.color].backgroundColor
  }, ownerState.variant === "solid" && {
    "--CircularProgress-trackColor": (_theme$variants$softH = theme.variants.softHover) == null ? void 0 : _theme$variants$softH[ownerState.color].backgroundColor,
    "--CircularProgress-progressColor": (_theme$variants$solid2 = theme.variants.solid) == null ? void 0 : _theme$variants$solid2[ownerState.color].backgroundColor
  });
});
var CircularProgressSvg = styled_default("svg", {
  name: "JoyCircularProgress",
  slot: "Svg",
  overridesResolver: (props, styles) => styles.svg
})({
  width: "inherit",
  height: "inherit",
  display: "inherit",
  boxSizing: "inherit",
  position: "absolute",
  top: "calc(-1 * var(--variant-borderWidth, 0px))",
  // centered align
  left: "calc(-1 * var(--variant-borderWidth, 0px))"
  // centered align
});
var CircularProgressTrack = styled_default("circle", {
  name: "JoyCircularProgress",
  slot: "track",
  overridesResolver: (props, styles) => styles.track
})({
  cx: "50%",
  cy: "50%",
  r: "calc(var(--_inner-size) / 2 - var(--_track-thickness) / 2 + min(0px, var(--_thickness-diff) / 2))",
  fill: "transparent",
  strokeWidth: "var(--_track-thickness)",
  stroke: "var(--CircularProgress-trackColor)"
});
var CircularProgressProgress = styled_default("circle", {
  name: "JoyCircularProgress",
  slot: "progress",
  overridesResolver: (props, styles) => styles.progress
})({
  "--_progress-radius": "calc(var(--_inner-size) / 2 - var(--_progress-thickness) / 2 - max(0px, var(--_thickness-diff) / 2))",
  "--_progress-length": "calc(2 * 3.1415926535 * var(--_progress-radius))",
  // the circumference around the progress
  cx: "50%",
  cy: "50%",
  r: "var(--_progress-radius)",
  fill: "transparent",
  strokeWidth: "var(--_progress-thickness)",
  stroke: "var(--CircularProgress-progressColor)",
  strokeLinecap: "var(--CircularProgress-linecap, round)",
  // can't use CSS variable directly, need to cast type.
  strokeDasharray: "var(--_progress-length)",
  strokeDashoffset: "calc(var(--_progress-length) - var(--CircularProgress-percent) * var(--_progress-length) / 100)",
  transformOrigin: "center",
  transform: "rotate(-90deg)"
  // to initially appear at the top-center of the circle.
}, ({
  ownerState
}) => !ownerState.determinate && css(_t || (_t = _`
      animation: var(--CircularProgress-circulation, 0.8s linear 0s infinite normal none running)
        ${0};
    `), circulate));
var CircularProgress = React.forwardRef(function CircularProgress2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyCircularProgress"
  });
  const {
    children,
    className,
    color = "primary",
    size = "md",
    variant = "soft",
    thickness,
    determinate = false,
    value = determinate ? 0 : 25,
    // `25` is the 1/4 of the circle.
    component,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const ownerState = _extends({}, props, {
    color,
    size,
    variant,
    thickness,
    value,
    determinate,
    instanceSize: inProps.size
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
    elementType: CircularProgressRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: _extends({
      role: "progressbar",
      style: {
        // Setting this CSS variable via inline-style
        // prevents the generation of new CSS every time
        // `value` prop updates
        "--CircularProgress-percent": value
      }
    }, value && determinate && {
      "aria-valuenow": typeof value === "number" ? Math.round(value) : Math.round(Number(value || 0))
    })
  });
  const [SlotSvg, svgProps] = useSlot("svg", {
    className: classes.svg,
    elementType: CircularProgressSvg,
    externalForwardedProps,
    ownerState
  });
  const [SlotTrack, trackProps] = useSlot("track", {
    className: classes.track,
    elementType: CircularProgressTrack,
    externalForwardedProps,
    ownerState
  });
  const [SlotProgress, progressProps] = useSlot("progress", {
    className: classes.progress,
    elementType: CircularProgressProgress,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime2.jsxs)(SlotRoot, _extends({}, rootProps, {
    children: [(0, import_jsx_runtime2.jsxs)(SlotSvg, _extends({}, svgProps, {
      children: [(0, import_jsx_runtime.jsx)(SlotTrack, _extends({}, trackProps)), (0, import_jsx_runtime.jsx)(SlotProgress, _extends({}, progressProps))]
    })), children]
  }));
});
true ? CircularProgress.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types.default.node,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'primary'
   */
  color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * The boolean to select a variant.
   * Use indeterminate when there is no progress value.
   * @default false
   */
  determinate: import_prop_types.default.bool,
  /**
   * The size of the component.
   * It accepts theme values between 'sm' and 'lg'.
   * @default 'md'
   */
  size: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["sm", "md", "lg"]), import_prop_types.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    progress: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    svg: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    track: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    progress: import_prop_types.default.elementType,
    root: import_prop_types.default.elementType,
    svg: import_prop_types.default.elementType,
    track: import_prop_types.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The thickness of the circle.
   */
  thickness: import_prop_types.default.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   *
   * @default determinate ? 0 : 25
   */
  value: import_prop_types.default.number,
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'soft'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types.default.string])
} : void 0;
var CircularProgress_default = CircularProgress;

// node_modules/@mui/joy/ButtonGroup/ButtonGroupContext.js
var React2 = __toESM(require_react());
var ButtonGroupContext = React2.createContext({});
if (true) {
  ButtonGroupContext.displayName = "ButtonGroupContext";
}
var ButtonGroupContext_default = ButtonGroupContext;

// node_modules/@mui/joy/ToggleButtonGroup/ToggleButtonGroupContext.js
var React3 = __toESM(require_react());
var ToggleButtonGroupContext = React3.createContext(void 0);
var ToggleButtonGroupContext_default = ToggleButtonGroupContext;

export {
  CircularProgress_default,
  ButtonGroupContext_default,
  ToggleButtonGroupContext_default
};
//# sourceMappingURL=chunk-H47BMXVN.js.map
