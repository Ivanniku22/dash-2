"use client";
import {
  CloseModalContext_default
} from "./chunk-PUGYHDXJ.js";
import "./chunk-NITYKZK3.js";
import {
  generateUtilityClass,
  generateUtilityClasses,
  styled_default,
  useSlot,
  useThemeProps
} from "./chunk-BUSIWBR7.js";
import {
  FocusTrap,
  Portal,
  useModal
} from "./chunk-BDZWFFN6.js";
import "./chunk-TTOBSZ4K.js";
import {
  HTMLElementType,
  composeClasses,
  elementAcceptingRef_default,
  init_composeClasses,
  init_utils
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
import "./chunk-AK6QMITG.js";
import {
  require_jsx_runtime
} from "./chunk-XWFUUR5D.js";
import {
  require_react
} from "./chunk-LNTNMRP6.js";
import {
  __toESM
} from "./chunk-FWVXXLA5.js";

// node_modules/@mui/joy/Modal/Modal.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_utils();
init_composeClasses();

// node_modules/@mui/joy/Modal/modalClasses.js
function getModalUtilityClass(slot) {
  return generateUtilityClass("MuiModal", slot);
}
var modalClasses = generateUtilityClasses("MuiModal", ["root", "hidden", "backdrop"]);
var modalClasses_default = modalClasses;

// node_modules/@mui/joy/Modal/Modal.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded = ["children", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onClose", "onKeyDown", "open", "component", "slots", "slotProps"];
var useUtilityClasses = (ownerState) => {
  const {
    open
  } = ownerState;
  const slots = {
    root: ["root", !open && "hidden"],
    backdrop: ["backdrop"]
  };
  return composeClasses(slots, getModalUtilityClass, {});
};
var StyledModalRoot = styled_default("div")(({
  ownerState,
  theme
}) => _extends({
  "--unstable_popup-zIndex": `calc(${theme.vars.zIndex.modal} + 1)`,
  '& ~ [role="listbox"]': {
    // target all the listbox (Autocomplete, Menu, Select, etc.) that uses portal
    "--unstable_popup-zIndex": `calc(${theme.vars.zIndex.modal} + 1)`
  },
  position: "fixed",
  zIndex: theme.vars.zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !ownerState.open && {
  visibility: "hidden"
}));
var ModalRoot = styled_default(StyledModalRoot, {
  name: "JoyModal",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var StyledModalBackdrop = styled_default("div")(({
  theme
}) => ({
  zIndex: -1,
  position: "fixed",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: theme.vars.palette.background.backdrop,
  WebkitTapHighlightColor: "transparent",
  backdropFilter: "blur(8px)"
}));
var ModalBackdrop = styled_default(StyledModalBackdrop, {
  name: "JoyModal",
  slot: "Backdrop",
  overridesResolver: (props, styles) => styles.backdrop
})({});
var Modal = React.forwardRef(function Modal2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyModal"
  });
  const {
    children,
    container,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    onClose,
    open,
    component,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted
  });
  const {
    getRootProps,
    getBackdropProps,
    rootRef,
    portalRef,
    isTopModal
  } = useModal(_extends({}, ownerState, {
    rootRef: ref
  }));
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref: rootRef,
    className: classes.root,
    elementType: ModalRoot,
    externalForwardedProps,
    getSlotProps: getRootProps,
    ownerState
  });
  const [SlotBackdrop, backdropProps] = useSlot("backdrop", {
    className: classes.backdrop,
    elementType: ModalBackdrop,
    externalForwardedProps,
    getSlotProps: getBackdropProps,
    ownerState
  });
  if (!keepMounted && !open) {
    return null;
  }
  return (0, import_jsx_runtime.jsx)(CloseModalContext_default.Provider, {
    value: onClose,
    children: (0, import_jsx_runtime.jsx)(Portal, {
      ref: portalRef,
      container,
      disablePortal,
      children: (0, import_jsx_runtime2.jsxs)(SlotRoot, _extends({}, rootProps, {
        children: [!hideBackdrop ? (0, import_jsx_runtime.jsx)(SlotBackdrop, _extends({}, backdropProps)) : null, (0, import_jsx_runtime.jsx)(FocusTrap, {
          disableEnforceFocus,
          disableAutoFocus,
          disableRestoreFocus,
          isEnabled: isTopModal,
          open,
          children: React.Children.only(children) && React.cloneElement(children, _extends({}, children.props.tabIndex === void 0 && {
            tabIndex: -1
          }))
        })]
      }))
    })
  });
});
true ? Modal.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types.default.oneOfType([HTMLElementType, import_prop_types.default.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: import_prop_types.default.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: import_prop_types.default.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: import_prop_types.default.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types.default.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: import_prop_types.default.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: import_prop_types.default.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: import_prop_types.default.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: import_prop_types.default.bool,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"closeClick"`.
   */
  onClose: import_prop_types.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types.default.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    backdrop: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    backdrop: import_prop_types.default.elementType,
    root: import_prop_types.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var Modal_default = Modal;
export {
  Modal_default as default,
  getModalUtilityClass,
  modalClasses_default as modalClasses
};
//# sourceMappingURL=@mui_joy_Modal.js.map
