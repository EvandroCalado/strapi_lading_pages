"use strict";
(self["webpackChunkstrapi_lading_pages"] = self["webpackChunkstrapi_lading_pages"] || []).push([[7375],{

/***/ 67375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ EditView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var formik_dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 9 modules
var utils = __webpack_require__(38683);
// EXTERNAL MODULE: ./node_modules/date-fns/index.js
var date_fns = __webpack_require__(47292);
// EXTERNAL MODULE: ./node_modules/date-fns/locale/index.js
var locale = __webpack_require__(73825);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/utils/getDateOfExpiration.js


const getDateOfExpiration = (createdAt, duration, language = "en") => {
  if (duration && typeof duration === "number") {
    const durationInDays = duration / 24 / 60 / 60 / 1e3;
    return (0,date_fns.format)((0,date_fns.addDays)(new Date(createdAt), durationInDays), "PPP", {
      locale: locale[language]
    });
  }
  return "Unlimited";
};
/* harmony default export */ const utils_getDateOfExpiration = (getDateOfExpiration);

// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var yup_lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/utils/schema.js


const schema = yup_lib/* object */.Ry().shape({
  name: yup_lib/* string */.Z_(helper_plugin.translatedErrors.string).required(helper_plugin.translatedErrors.required),
  type: yup_lib/* string */.Z_(helper_plugin.translatedErrors.string).oneOf(["read-only", "full-access", "custom"]).required(helper_plugin.translatedErrors.required),
  description: yup_lib/* string */.Z_().nullable(),
  lifespan: yup_lib/* number */.Rx().integer().min(0).nullable().defined(helper_plugin.translatedErrors.required)
});
/* harmony default export */ const utils_schema = (schema);

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/utils/transformPermissionsData.js

const transformPermissionsData = (data) => {
  const layout = {
    allActionsIds: [],
    permissions: []
  };
  layout.permissions = Object.keys(data).map((apiId) => ({
    apiId,
    label: apiId.split("::")[1],
    controllers: (0,lodash.flatten)(
      Object.keys(data[apiId].controllers).map((controller) => ({
        controller,
        actions: (0,lodash.flatten)(
          data[apiId].controllers[controller].map((action) => {
            const actionId = `${apiId}.${controller}.${action}`;
            if (apiId.includes("api::")) {
              layout.allActionsIds.push(actionId);
            }
            return {
              action,
              actionId
            };
          })
        )
      }))
    )
  }));
  return layout;
};
/* harmony default export */ const utils_transformPermissionsData = (transformPermissionsData);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/utils/index.js





// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var icons_dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/LoadingView/index.js






const LoadingView = ({ apiTokenName }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  (0,helper_plugin.useFocusWhenNavigate)();
  return /* @__PURE__ */ react.createElement(dist.Main, { "aria-busy": "true" }, /* @__PURE__ */ react.createElement(helper_plugin.SettingsPageTitle, { name: "API Tokens" }), /* @__PURE__ */ react.createElement(
    dist.HeaderLayout,
    {
      primaryAction: /* @__PURE__ */ react.createElement(dist.Button, { disabled: true, startIcon: /* @__PURE__ */ react.createElement(icons_dist.Check, null), type: "button", size: "L" }, formatMessage({ id: "global.save", defaultMessage: "Save" })),
      title: apiTokenName || formatMessage({
        id: "Settings.apiTokens.createPage.title",
        defaultMessage: "Create API Token"
      })
    }
  ), /* @__PURE__ */ react.createElement(dist.ContentLayout, null, /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null)));
};
LoadingView.defaultProps = {
  apiTokenName: null
};
LoadingView.propTypes = {
  apiTokenName: (prop_types_default()).string
};
/* harmony default export */ const components_LoadingView = (LoadingView);

// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 31 modules
var hooks = __webpack_require__(48474);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/Regenerate/index.js







const Regenerate = ({ onRegenerate, idToRegenerate }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [showConfirmDialog, setShowConfirmDialog] = (0,react.useState)(false);
  const { regenerateData, isLoadingConfirmation } = (0,hooks/* useRegenerate */.rW)(idToRegenerate, onRegenerate);
  const handleConfirmRegeneration = async () => {
    regenerateData();
    setShowConfirmDialog(false);
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    dist.Button,
    {
      startIcon: /* @__PURE__ */ react.createElement(icons_dist.Refresh, null),
      type: "button",
      size: "S",
      variant: "tertiary",
      onClick: () => setShowConfirmDialog(true),
      name: "regenerate"
    },
    formatMessage({
      id: "Settings.apiTokens.regenerate",
      defaultMessage: "Regenerate"
    })
  ), /* @__PURE__ */ react.createElement(
    helper_plugin.ConfirmDialog,
    {
      bodyText: {
        id: "Settings.apiTokens.popUpWarning.message",
        defaultMessage: "Are you sure you want to regenerate this token?"
      },
      iconRightButton: /* @__PURE__ */ react.createElement(icons_dist.Refresh, null),
      isConfirmButtonLoading: isLoadingConfirmation,
      isOpen: showConfirmDialog,
      onToggleDialog: () => setShowConfirmDialog(false),
      onConfirm: handleConfirmRegeneration,
      leftButtonText: {
        id: "Settings.apiTokens.Button.cancel",
        defaultMessage: "Cancel"
      },
      rightButtonText: {
        id: "Settings.apiTokens.Button.regenerate",
        defaultMessage: "Regenerate"
      },
      title: {
        id: "Settings.apiTokens.RegenerateDialog.title",
        defaultMessage: "Regenerate token"
      }
    }
  ));
};
Regenerate.defaultProps = { onRegenerate() {
} };
Regenerate.propTypes = {
  onRegenerate: (prop_types_default()).func,
  idToRegenerate: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]).isRequired
};
/* harmony default export */ const components_Regenerate = (Regenerate);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/FormHead/index.js







const FormHead = ({ apiToken, setApiToken, canEditInputs, canRegenerate, isSubmitting }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const handleRegenerate = (newKey) => {
    setApiToken({
      ...apiToken,
      accessKey: newKey
    });
  };
  return /* @__PURE__ */ react.createElement(
    dist.HeaderLayout,
    {
      title: apiToken?.name || formatMessage({
        id: "Settings.apiTokens.createPage.title",
        defaultMessage: "Create API Token"
      }),
      primaryAction: canEditInputs ? /* @__PURE__ */ react.createElement(dist.Stack, { horizontal: true, spacing: 2 }, canRegenerate && apiToken?.id && /* @__PURE__ */ react.createElement(components_Regenerate, { onRegenerate: handleRegenerate, idToRegenerate: apiToken?.id }), /* @__PURE__ */ react.createElement(
        dist.Button,
        {
          disabled: isSubmitting,
          loading: isSubmitting,
          startIcon: /* @__PURE__ */ react.createElement(icons_dist.Check, null),
          type: "submit",
          size: "S"
        },
        formatMessage({
          id: "global.save",
          defaultMessage: "Save"
        })
      )) : canRegenerate && apiToken?.id && /* @__PURE__ */ react.createElement(components_Regenerate, { onRegenerate: handleRegenerate, idToRegenerate: apiToken?.id }),
      navigationAction: /* @__PURE__ */ react.createElement(helper_plugin.Link, { startIcon: /* @__PURE__ */ react.createElement(icons_dist.ArrowLeft, null), to: "/settings/api-tokens" }, formatMessage({
        id: "global.back",
        defaultMessage: "Back"
      }))
    }
  );
};
FormHead.propTypes = {
  apiToken: prop_types_default().shape({
    id: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
    type: (prop_types_default()).string,
    lifespan: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
    name: (prop_types_default()).string,
    accessKey: (prop_types_default()).string,
    permissions: (prop_types_default()).array,
    description: (prop_types_default()).string,
    createdAt: (prop_types_default()).string
  }),
  canEditInputs: (prop_types_default()).bool.isRequired,
  canRegenerate: (prop_types_default()).bool.isRequired,
  setApiToken: (prop_types_default()).func.isRequired,
  isSubmitting: (prop_types_default()).bool.isRequired
};
FormHead.defaultProps = {
  apiToken: void 0
};
/* harmony default export */ const components_FormHead = (FormHead);

// EXTERNAL MODULE: ./node_modules/react-copy-to-clipboard/lib/index.js
var react_copy_to_clipboard_lib = __webpack_require__(74855);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/ContentBox/index.js







const HeaderContentBox = ({ apiToken }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  return /* @__PURE__ */ react.createElement(
    helper_plugin.ContentBox,
    {
      endAction: apiToken && /* @__PURE__ */ react.createElement("span", { style: { alignSelf: "start" } }, /* @__PURE__ */ react.createElement(
        react_copy_to_clipboard_lib.CopyToClipboard,
        {
          onCopy: () => {
            trackUsageRef.current("didCopyTokenKey");
            toggleNotification({
              type: "success",
              message: { id: "Settings.apiTokens.notification.copied" }
            });
          },
          text: apiToken
        },
        /* @__PURE__ */ react.createElement(
          dist.IconButton,
          {
            label: formatMessage({
              id: "app.component.CopyToClipboard.label",
              defaultMessage: "Copy to clipboard"
            }),
            noBorder: true,
            icon: /* @__PURE__ */ react.createElement(icons_dist.Duplicate, null),
            style: { padding: 0, height: "1rem" }
          }
        )
      )),
      title: apiToken || formatMessage({
        id: "Settings.apiTokens.copy.editTitle",
        defaultMessage: "This token isn\u2019t accessible anymore."
      }),
      subtitle: apiToken ? formatMessage({
        id: "Settings.apiTokens.copy.lastWarning",
        defaultMessage: "Make sure to copy this token, you won\u2019t be able to see it again!"
      }) : formatMessage({
        id: "Settings.apiTokens.copy.editMessage",
        defaultMessage: "For security reasons, you can only see your token once."
      }),
      icon: /* @__PURE__ */ react.createElement(icons_dist.Key, null),
      iconBackground: "neutral100"
    }
  );
};
HeaderContentBox.defaultProps = {
  apiToken: null
};
HeaderContentBox.propTypes = {
  apiToken: (prop_types_default()).string
};
/* harmony default export */ const ContentBox = (HeaderContentBox);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/FormApiTokenContainer/index.js






const FormApiTokenContainer = ({
  errors,
  onChange,
  canEditInputs,
  isCreating,
  values,
  apiToken,
  onDispatch,
  setHasChangedPermissions
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [lang] = (0,helper_plugin.usePersistentState)("strapi-admin-language", "en");
  const handleChangeSelectApiTokenType = ({ target: { value } }) => {
    setHasChangedPermissions(false);
    if (value === "full-access") {
      onDispatch({
        type: "SELECT_ALL_ACTIONS"
      });
    }
    if (value === "read-only") {
      onDispatch({
        type: "ON_CHANGE_READ_ONLY"
      });
    }
  };
  return /* @__PURE__ */ react.createElement(
    dist.Box,
    {
      background: "neutral0",
      hasRadius: true,
      shadow: "filterShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7
    },
    /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 4 }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "delta", as: "h2" }, formatMessage({
      id: "global.details",
      defaultMessage: "Details"
    })), /* @__PURE__ */ react.createElement(dist.Grid, { gap: 5 }, /* @__PURE__ */ react.createElement(dist.GridItem, { key: "name", col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
      dist.TextInput,
      {
        name: "name",
        error: errors.name ? formatMessage(
          errors.name?.id ? errors.name : { id: errors.name, defaultMessage: errors.name }
        ) : null,
        label: formatMessage({
          id: "Settings.apiTokens.form.name",
          defaultMessage: "Name"
        }),
        onChange,
        value: values.name,
        disabled: !canEditInputs,
        required: true
      }
    )), /* @__PURE__ */ react.createElement(dist.GridItem, { key: "description", col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
      dist.Textarea,
      {
        label: formatMessage({
          id: "Settings.apiTokens.form.description",
          defaultMessage: "Description"
        }),
        name: "description",
        error: errors.description ? formatMessage(
          errors.description?.id ? errors.description : {
            id: errors.description,
            defaultMessage: errors.description
          }
        ) : null,
        onChange,
        disabled: !canEditInputs
      },
      values.description
    )), /* @__PURE__ */ react.createElement(dist.GridItem, { key: "lifespan", col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
      dist.Select,
      {
        name: "lifespan",
        label: formatMessage({
          id: "Settings.apiTokens.form.duration",
          defaultMessage: "Token duration"
        }),
        value: values.lifespan !== null ? values.lifespan : "0",
        error: errors.lifespan ? formatMessage(
          errors.lifespan?.id ? errors.lifespan : { id: errors.lifespan, defaultMessage: errors.lifespan }
        ) : null,
        onChange: (value) => {
          onChange({ target: { name: "lifespan", value } });
        },
        required: true,
        disabled: !isCreating,
        placeholder: "Select"
      },
      /* @__PURE__ */ react.createElement(dist.Option, { value: "604800000" }, formatMessage({
        id: "Settings.apiTokens.duration.7-days",
        defaultMessage: "7 days"
      })),
      /* @__PURE__ */ react.createElement(dist.Option, { value: "2592000000" }, formatMessage({
        id: "Settings.apiTokens.duration.30-days",
        defaultMessage: "30 days"
      })),
      /* @__PURE__ */ react.createElement(dist.Option, { value: "7776000000" }, formatMessage({
        id: "Settings.apiTokens.duration.90-days",
        defaultMessage: "90 days"
      })),
      /* @__PURE__ */ react.createElement(dist.Option, { value: "0" }, formatMessage({
        id: "Settings.apiTokens.duration.unlimited",
        defaultMessage: "Unlimited"
      }))
    ), /* @__PURE__ */ react.createElement(dist.Typography, { variant: "pi", textColor: "neutral600" }, !isCreating && `${formatMessage({
      id: "Settings.apiTokens.duration.expiration-date",
      defaultMessage: "Expiration date"
    })}: ${utils_getDateOfExpiration(
      apiToken?.createdAt,
      parseInt(values.lifespan, 10),
      lang
    )}`)), /* @__PURE__ */ react.createElement(dist.GridItem, { key: "type", col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
      dist.Select,
      {
        name: "type",
        label: formatMessage({
          id: "Settings.apiTokens.form.type",
          defaultMessage: "Token type"
        }),
        value: values?.type,
        error: errors.type ? formatMessage(
          errors.type?.id ? errors.type : { id: errors.type, defaultMessage: errors.type }
        ) : null,
        onChange: (value) => {
          handleChangeSelectApiTokenType({ target: { value } });
          onChange({ target: { name: "type", value } });
        },
        placeholder: "Select",
        required: true,
        disabled: !canEditInputs
      },
      /* @__PURE__ */ react.createElement(dist.Option, { value: "read-only" }, formatMessage({
        id: "Settings.apiTokens.types.read-only",
        defaultMessage: "Read-only"
      })),
      /* @__PURE__ */ react.createElement(dist.Option, { value: "full-access" }, formatMessage({
        id: "Settings.apiTokens.types.full-access",
        defaultMessage: "Full access"
      })),
      /* @__PURE__ */ react.createElement(dist.Option, { value: "custom" }, formatMessage({
        id: "Settings.apiTokens.types.custom",
        defaultMessage: "Custom"
      }))
    ))))
  );
};
FormApiTokenContainer.propTypes = {
  errors: prop_types_default().shape({
    name: (prop_types_default()).string,
    description: (prop_types_default()).string,
    lifespan: (prop_types_default()).string,
    type: (prop_types_default()).string
  }),
  onChange: (prop_types_default()).func.isRequired,
  canEditInputs: (prop_types_default()).bool.isRequired,
  values: prop_types_default().shape({
    name: (prop_types_default()).string,
    description: (prop_types_default()).string,
    lifespan: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
    type: (prop_types_default()).string
  }).isRequired,
  isCreating: (prop_types_default()).bool.isRequired,
  apiToken: prop_types_default().shape({
    id: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
    type: (prop_types_default()).string,
    lifespan: (prop_types_default()).string,
    name: (prop_types_default()).string,
    accessKey: (prop_types_default()).string,
    permissions: (prop_types_default()).array,
    description: (prop_types_default()).string,
    createdAt: (prop_types_default()).string
  }),
  onDispatch: (prop_types_default()).func.isRequired,
  setHasChangedPermissions: (prop_types_default()).func.isRequired
};
FormApiTokenContainer.defaultProps = {
  errors: {},
  apiToken: {}
};
/* harmony default export */ const components_FormApiTokenContainer = (FormApiTokenContainer);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
;// CONCATENATED MODULE: ./.cache/admin/src/contexts/ApiTokenPermissions/index.js


const ApiTokenPermissionsContext = (0,react.createContext)({});
const ApiTokenPermissionsContextProvider = ({ children, ...rest }) => {
  return /* @__PURE__ */ react.createElement(ApiTokenPermissionsContext.Provider, { value: rest }, children);
};
const useApiTokenPermissionsContext = () => (0,react.useContext)(ApiTokenPermissionsContext);
ApiTokenPermissionsContextProvider.propTypes = {
  children: (prop_types_default()).node.isRequired
};


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/CollapsableContentType/CheckBoxWrapper.js


const activeCheckboxWrapperStyles = styled_components_browser_esm.css`
  background: ${(props) => props.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`;
const CheckboxWrapper = (0,styled_components_browser_esm["default"])(dist.Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${(props) => props.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${(props) => props.isActive && activeCheckboxWrapperStyles}
  &:hover {
    ${activeCheckboxWrapperStyles}
  }
`;
/* harmony default export */ const CheckBoxWrapper = (CheckboxWrapper);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/CollapsableContentType/index.js








const Border = styled_components_browser_esm["default"].div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral150};
`;
const CollapsableContentType = ({
  controllers,
  label,
  orderNumber,
  disabled,
  onExpanded,
  indexExpandendCollapsedContent
}) => {
  const {
    value: { onChangeSelectAll, onChange, selectedActions, setSelectedAction, selectedAction }
  } = useApiTokenPermissionsContext();
  const [expanded, setExpanded] = (0,react.useState)(false);
  const handleExpandedAccordion = () => {
    setExpanded((s) => !s);
    onExpanded(orderNumber);
  };
  (0,react.useEffect)(() => {
    if (indexExpandendCollapsedContent !== null && indexExpandendCollapsedContent !== orderNumber && expanded) {
      setExpanded(false);
    }
  }, [indexExpandendCollapsedContent, orderNumber, expanded]);
  const isActionSelected = (actionId) => actionId === selectedAction;
  return /* @__PURE__ */ react.createElement(
    dist.Accordion,
    {
      expanded,
      onToggle: handleExpandedAccordion,
      variant: orderNumber % 2 ? "primary" : "secondary"
    },
    /* @__PURE__ */ react.createElement(dist.AccordionToggle, { title: (0,lodash.capitalize)(label) }),
    /* @__PURE__ */ react.createElement(dist.AccordionContent, null, controllers?.map((controller) => {
      const allActionsSelected = controller.actions.every(
        (action) => selectedActions.includes(action.actionId)
      );
      const someActionsSelected = controller.actions.some(
        (action) => selectedActions.includes(action.actionId)
      );
      return /* @__PURE__ */ react.createElement(dist.Box, { key: `${label}.${controller?.controller}` }, /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "space-between", alignItems: "center", padding: 4 }, /* @__PURE__ */ react.createElement(dist.Box, { paddingRight: 4 }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "sigma", textColor: "neutral600" }, controller?.controller)), /* @__PURE__ */ react.createElement(Border, null), /* @__PURE__ */ react.createElement(dist.Box, { paddingLeft: 4 }, /* @__PURE__ */ react.createElement(
        dist.Checkbox,
        {
          value: allActionsSelected,
          indeterminate: !allActionsSelected && someActionsSelected,
          onValueChange: () => {
            onChangeSelectAll({ target: { value: [...controller.actions] } });
          },
          disabled
        },
        "Select all"
      ))), /* @__PURE__ */ react.createElement(dist.Grid, { gap: 4, padding: 4 }, controller?.actions && controller?.actions.map((action) => {
        return /* @__PURE__ */ react.createElement(dist.GridItem, { col: 6, key: action.actionId }, /* @__PURE__ */ react.createElement(
          CheckBoxWrapper,
          {
            isActive: isActionSelected(action.actionId),
            padding: 2,
            hasRadius: true
          },
          /* @__PURE__ */ react.createElement(
            dist.Checkbox,
            {
              value: selectedActions.includes(action.actionId),
              name: action.actionId,
              onValueChange: () => {
                onChange({ target: { value: action.actionId } });
              },
              disabled
            },
            action.action
          ),
          /* @__PURE__ */ react.createElement(
            "button",
            {
              type: "button",
              "data-testid": "action-cog",
              onClick: () => setSelectedAction({ target: { value: action.actionId } }),
              style: { display: "inline-flex", alignItems: "center" }
            },
            /* @__PURE__ */ react.createElement(icons_dist.Cog, null)
          )
        ));
      })));
    }))
  );
};
CollapsableContentType.defaultProps = {
  controllers: [],
  orderNumber: 0,
  disabled: false,
  onExpanded: () => null,
  indexExpandendCollapsedContent: null
};
CollapsableContentType.propTypes = {
  controllers: (prop_types_default()).array,
  orderNumber: (prop_types_default()).number,
  label: (prop_types_default()).string.isRequired,
  disabled: (prop_types_default()).bool,
  onExpanded: (prop_types_default()).func,
  indexExpandendCollapsedContent: (prop_types_default()).number
};
/* harmony default export */ const components_CollapsableContentType = (CollapsableContentType);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/ContenTypesSection/index.js




const ContentTypesSection = ({ section, ...props }) => {
  const [indexExpandedCollpsedContent, setIndexExpandedCollpsedContent] = (0,react.useState)(null);
  const handleExpandedCollpsedContentIndex = (index) => setIndexExpandedCollpsedContent(index);
  return /* @__PURE__ */ react.createElement(dist.Box, { padding: 4, background: "neutral0" }, section && section.map((api, index) => /* @__PURE__ */ react.createElement(
    components_CollapsableContentType,
    {
      key: api.apiId,
      label: api.label,
      controllers: api.controllers,
      orderNumber: index,
      indexExpandendCollapsedContent: indexExpandedCollpsedContent,
      onExpanded: handleExpandedCollpsedContentIndex,
      name: api.apiId,
      ...props
    }
  )));
};
ContentTypesSection.defaultProps = {
  section: null
};
ContentTypesSection.propTypes = {
  section: prop_types_default().arrayOf((prop_types_default()).object)
};
/* harmony default export */ const ContenTypesSection = (ContentTypesSection);

// EXTERNAL MODULE: ./node_modules/lodash/map.js
var map = __webpack_require__(35161);
var map_default = /*#__PURE__*/__webpack_require__.n(map);
// EXTERNAL MODULE: ./node_modules/lodash/tail.js
var tail = __webpack_require__(13217);
var tail_default = /*#__PURE__*/__webpack_require__.n(tail);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/BoundRoute/getMethodColor.js
const getMethodColor = (verb) => {
  switch (verb) {
    case "POST": {
      return {
        text: "success600",
        border: "success200",
        background: "success100"
      };
    }
    case "GET": {
      return {
        text: "secondary600",
        border: "secondary200",
        background: "secondary100"
      };
    }
    case "PUT": {
      return {
        text: "warning600",
        border: "warning200",
        background: "warning100"
      };
    }
    case "DELETE": {
      return {
        text: "danger600",
        border: "danger200",
        background: "danger100"
      };
    }
    default: {
      return {
        text: "neutral600",
        border: "neutral200",
        background: "neutral100"
      };
    }
  }
};
/* harmony default export */ const BoundRoute_getMethodColor = (getMethodColor);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/BoundRoute/index.js








const MethodBox = (0,styled_components_browser_esm["default"])(dist.Box)`
  margin: -1px;
  border-radius: ${({ theme }) => theme.spaces[1]} 0 0 ${({ theme }) => theme.spaces[1]};
`;
function BoundRoute({ route }) {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { method, handler: title, path } = route;
  const formattedRoute = path ? tail_default()(path.split("/")) : [];
  const [controller = "", action = ""] = title ? title.split(".") : [];
  const colors = BoundRoute_getMethodColor(route.method);
  return /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 2 }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "delta", as: "h3" }, formatMessage({
    id: "Settings.apiTokens.createPage.BoundRoute.title",
    defaultMessage: "Bound route to"
  }), "\xA0", /* @__PURE__ */ react.createElement("span", null, controller), /* @__PURE__ */ react.createElement(dist.Typography, { variant: "delta", textColor: "primary600" }, ".", action)), /* @__PURE__ */ react.createElement(dist.Stack, { horizontal: true, hasRadius: true, background: "neutral0", borderColor: "neutral200", spacing: 0 }, /* @__PURE__ */ react.createElement(MethodBox, { background: colors.background, borderColor: colors.border, padding: 2 }, /* @__PURE__ */ react.createElement(dist.Typography, { fontWeight: "bold", textColor: colors.text }, method)), /* @__PURE__ */ react.createElement(dist.Box, { paddingLeft: 2, paddingRight: 2 }, map_default()(formattedRoute, (value) => /* @__PURE__ */ react.createElement(dist.Typography, { key: value, textColor: value.includes(":") ? "neutral600" : "neutral900" }, "/", value)))));
}
BoundRoute.defaultProps = {
  route: {
    handler: "Nocontroller.error",
    method: "GET",
    path: "/there-is-no-path"
  }
};
BoundRoute.propTypes = {
  route: prop_types_default().shape({
    handler: (prop_types_default()).string,
    method: (prop_types_default()).string,
    path: (prop_types_default()).string
  })
};
/* harmony default export */ const components_BoundRoute = (BoundRoute);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/ActionBoundRoutes/index.js





const ActionBoundRoutes = () => {
  const {
    value: { selectedAction, routes }
  } = useApiTokenPermissionsContext();
  const { formatMessage } = (0,react_intl.useIntl)();
  const actionSection = selectedAction?.split(".")[0];
  return /* @__PURE__ */ react.createElement(
    dist.GridItem,
    {
      col: 5,
      background: "neutral150",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7,
      style: { minHeight: "100%" }
    },
    selectedAction ? /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 2 }, routes[actionSection]?.map((route) => {
      return route.config.auth?.scope?.includes(selectedAction) || route.handler === selectedAction ? /* @__PURE__ */ react.createElement(components_BoundRoute, { key: route.handler, route }) : null;
    })) : /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 2 }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "delta", as: "h3" }, formatMessage({
      id: "Settings.apiTokens.createPage.permissions.header.title",
      defaultMessage: "Advanced settings"
    })), /* @__PURE__ */ react.createElement(dist.Typography, { as: "p", textColor: "neutral600" }, formatMessage({
      id: "Settings.apiTokens.createPage.permissions.header.hint",
      defaultMessage: "Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"
    })))
  );
};
/* harmony default export */ const components_ActionBoundRoutes = (ActionBoundRoutes);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/Permissions/index.js






const Permissions = ({ ...props }) => {
  const {
    value: { data }
  } = useApiTokenPermissionsContext();
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(dist.Grid, { gap: 0, shadow: "filterShadow", hasRadius: true, background: "neutral0" }, /* @__PURE__ */ react.createElement(dist.GridItem, { col: 7, paddingTop: 6, paddingBottom: 6, paddingLeft: 7, paddingRight: 7 }, /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 2 }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "delta", as: "h2" }, formatMessage({
    id: "Settings.apiTokens.createPage.permissions.title",
    defaultMessage: "Permissions"
  })), /* @__PURE__ */ react.createElement(dist.Typography, { as: "p", textColor: "neutral600" }, formatMessage({
    id: "Settings.apiTokens.createPage.permissions.description",
    defaultMessage: "Only actions bound by a route are listed below."
  }))), data?.permissions && /* @__PURE__ */ react.createElement(ContenTypesSection, { section: data?.permissions, ...props })), /* @__PURE__ */ react.createElement(components_ActionBoundRoutes, null));
};
/* harmony default export */ const components_Permissions = ((0,react.memo)(Permissions));

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/FormBody/index.js






const FormBody = ({
  apiToken,
  errors,
  onChange,
  canEditInputs,
  isCreating,
  values,
  onDispatch,
  setHasChangedPermissions
}) => {
  return /* @__PURE__ */ react.createElement(dist.ContentLayout, null, /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 6 }, Boolean(apiToken?.name) && /* @__PURE__ */ react.createElement(ContentBox, { apiToken: apiToken?.accessKey }), /* @__PURE__ */ react.createElement(
    components_FormApiTokenContainer,
    {
      errors,
      onChange,
      canEditInputs,
      isCreating,
      values,
      apiToken,
      onDispatch,
      setHasChangedPermissions
    }
  ), /* @__PURE__ */ react.createElement(
    components_Permissions,
    {
      disabled: !canEditInputs || values?.type === "read-only" || values?.type === "full-access"
    }
  )));
};
FormBody.propTypes = {
  errors: prop_types_default().shape({
    name: (prop_types_default()).string,
    description: (prop_types_default()).string,
    lifespan: (prop_types_default()).string,
    type: (prop_types_default()).string
  }),
  apiToken: prop_types_default().shape({
    id: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
    type: (prop_types_default()).string,
    lifespan: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
    name: (prop_types_default()).string,
    accessKey: (prop_types_default()).string,
    permissions: (prop_types_default()).array,
    description: (prop_types_default()).string,
    createdAt: (prop_types_default()).string
  }),
  onChange: (prop_types_default()).func.isRequired,
  canEditInputs: (prop_types_default()).bool.isRequired,
  isCreating: (prop_types_default()).bool.isRequired,
  values: prop_types_default().shape({
    name: (prop_types_default()).string,
    description: (prop_types_default()).string,
    lifespan: (prop_types_default()).string,
    type: (prop_types_default()).string
  }).isRequired,
  onDispatch: (prop_types_default()).func.isRequired,
  setHasChangedPermissions: (prop_types_default()).func.isRequired
};
FormBody.defaultProps = {
  errors: {},
  apiToken: {}
};
/* harmony default export */ const components_FormBody = (FormBody);

// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/init.js

const init = (state, permissions = []) => {
  return {
    ...state,
    selectedAction: null,
    routes: [],
    selectedActions: [],
    data: utils_transformPermissionsData(permissions)
  };
};
/* harmony default export */ const EditView_init = (init);

// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(18172);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/reducer.js



const initialState = {
  data: {},
  selectedActions: []
};
const reducer = (state, action) => (0,immer_esm["default"])(state, (draftState) => {
  switch (action.type) {
    case "ON_CHANGE": {
      if (draftState.selectedActions.includes(action.value)) {
        (0,lodash.pull)(draftState.selectedActions, action.value);
      } else {
        draftState.selectedActions.push(action.value);
      }
      break;
    }
    case "SELECT_ALL_IN_PERMISSION": {
      const areAllSelected = action.value.every(
        (item) => draftState.selectedActions.includes(item.actionId)
      );
      if (areAllSelected) {
        action.value.forEach((item) => {
          (0,lodash.pull)(draftState.selectedActions, item.actionId);
        });
      } else {
        action.value.forEach((item) => {
          draftState.selectedActions.push(item.actionId);
        });
      }
      break;
    }
    case "SELECT_ALL_ACTIONS": {
      draftState.selectedActions = [...draftState.data.allActionsIds];
      break;
    }
    case "ON_CHANGE_READ_ONLY": {
      const onlyReadOnlyActions = draftState.data.allActionsIds.filter(
        (actionId) => actionId.includes("find") || actionId.includes("findOne")
      );
      draftState.selectedActions = [...onlyReadOnlyActions];
      break;
    }
    case "UPDATE_PERMISSIONS_LAYOUT": {
      draftState.data = utils_transformPermissionsData(action.value);
      break;
    }
    case "UPDATE_ROUTES": {
      draftState.routes = { ...action.value };
      break;
    }
    case "UPDATE_PERMISSIONS": {
      draftState.selectedActions = [...action.value];
      break;
    }
    case "SET_SELECTED_ACTION": {
      draftState.selectedAction = action.value;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const EditView_reducer = (reducer);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/index.js
















const MSG_ERROR_NAME_TAKEN = "Name already taken";
const ApiTokenCreateView = () => {
  (0,helper_plugin.useFocusWhenNavigate)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { lockApp, unlockApp } = (0,helper_plugin.useOverlayBlocker)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const history = (0,react_router_dom_min.useHistory)();
  const [apiToken, setApiToken] = (0,react.useState)(
    history.location.state?.apiToken.accessKey ? {
      ...history.location.state.apiToken
    } : null
  );
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const { setCurrentStep } = (0,helper_plugin.useGuidedTour)();
  const {
    allowedActions: { canCreate, canUpdate, canRegenerate }
  } = (0,helper_plugin.useRBAC)(permissions/* default.settings.api-tokens */.Z.settings["api-tokens"]);
  const [state, dispatch] = (0,react.useReducer)(EditView_reducer, initialState, (state2) => EditView_init(state2, {}));
  const {
    params: { id }
  } = (0,react_router_dom_min.useRouteMatch)("/settings/api-tokens/:id");
  const { get, post, put } = (0,helper_plugin.useFetchClient)();
  const isCreating = id === "create";
  (0,lib.useQuery)(
    "content-api-permissions",
    async () => {
      const [permissions, routes] = await Promise.all(
        ["/admin/content-api/permissions", "/admin/content-api/routes"].map(async (url) => {
          const { data } = await get(url);
          return data.data;
        })
      );
      dispatch({
        type: "UPDATE_PERMISSIONS_LAYOUT",
        value: permissions
      });
      dispatch({
        type: "UPDATE_ROUTES",
        value: routes
      });
      if (apiToken) {
        if (apiToken?.type === "read-only") {
          dispatch({
            type: "ON_CHANGE_READ_ONLY"
          });
        }
        if (apiToken?.type === "full-access") {
          dispatch({
            type: "SELECT_ALL_ACTIONS"
          });
        }
        if (apiToken?.type === "custom") {
          dispatch({
            type: "UPDATE_PERMISSIONS",
            value: apiToken?.permissions
          });
        }
      }
    },
    {
      onError() {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error", defaultMessage: "An error occured" }
        });
      }
    }
  );
  (0,react.useEffect)(() => {
    trackUsageRef.current(isCreating ? "didAddTokenFromList" : "didEditTokenFromList");
  }, [isCreating]);
  const { status } = (0,lib.useQuery)(
    ["api-token", id],
    async () => {
      const {
        data: { data }
      } = await get(`/admin/api-tokens/${id}`);
      setApiToken({
        ...data
      });
      if (data?.type === "read-only") {
        dispatch({
          type: "ON_CHANGE_READ_ONLY"
        });
      }
      if (data?.type === "full-access") {
        dispatch({
          type: "SELECT_ALL_ACTIONS"
        });
      }
      if (data?.type === "custom") {
        dispatch({
          type: "UPDATE_PERMISSIONS",
          value: data?.permissions
        });
      }
      return data;
    },
    {
      enabled: !isCreating && !apiToken,
      onError() {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error", defaultMessage: "An error occured" }
        });
      }
    }
  );
  const handleSubmit = async (body, actions) => {
    trackUsageRef.current(isCreating ? "willCreateToken" : "willEditToken");
    lockApp();
    const lifespanVal = body.lifespan && parseInt(body.lifespan, 10) && body.lifespan !== "0" ? parseInt(body.lifespan, 10) : null;
    try {
      const {
        data: { data: response }
      } = isCreating ? await post(`/admin/api-tokens`, {
        ...body,
        lifespan: lifespanVal,
        permissions: body.type === "custom" ? state.selectedActions : null
      }) : await put(`/admin/api-tokens/${id}`, {
        name: body.name,
        description: body.description,
        type: body.type,
        permissions: body.type === "custom" ? state.selectedActions : null
      });
      if (isCreating) {
        history.replace(`/settings/api-tokens/${response.id}`, { apiToken: response });
        setCurrentStep("apiTokens.success");
      }
      unlockApp();
      setApiToken({
        ...response
      });
      toggleNotification({
        type: "success",
        message: isCreating ? formatMessage({
          id: "notification.success.tokencreated",
          defaultMessage: "API Token successfully created"
        }) : formatMessage({
          id: "notification.success.tokenedited",
          defaultMessage: "API Token successfully edited"
        })
      });
      trackUsageRef.current(isCreating ? "didCreateToken" : "didEditToken", {
        type: apiToken.type
      });
    } catch (err) {
      const errors = (0,utils/* formatAPIErrors */.Iz)(err.response.data);
      actions.setErrors(errors);
      if (err?.response?.data?.error?.message === MSG_ERROR_NAME_TAKEN) {
        toggleNotification({
          type: "warning",
          message: err.response.data.message || "notification.error.tokennamenotunique"
        });
      } else {
        toggleNotification({
          type: "warning",
          message: err?.response?.data?.message || "notification.error"
        });
      }
      unlockApp();
    }
  };
  const [hasChangedPermissions, setHasChangedPermissions] = (0,react.useState)(false);
  const handleChangeCheckbox = ({ target: { value } }) => {
    setHasChangedPermissions(true);
    dispatch({
      type: "ON_CHANGE",
      value
    });
  };
  const handleChangeSelectAllCheckbox = ({ target: { value } }) => {
    setHasChangedPermissions(true);
    dispatch({
      type: "SELECT_ALL_IN_PERMISSION",
      value
    });
  };
  const setSelectedAction = ({ target: { value } }) => {
    dispatch({
      type: "SET_SELECTED_ACTION",
      value
    });
  };
  const providerValue = {
    ...state,
    onChange: handleChangeCheckbox,
    onChangeSelectAll: handleChangeSelectAllCheckbox,
    setSelectedAction
  };
  const canEditInputs = canUpdate && !isCreating || canCreate && isCreating;
  const isLoading = !isCreating && !apiToken && status !== "success";
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(components_LoadingView, { apiTokenName: apiToken?.name });
  }
  return /* @__PURE__ */ react.createElement(ApiTokenPermissionsContextProvider, { value: providerValue }, /* @__PURE__ */ react.createElement(dist.Main, null, /* @__PURE__ */ react.createElement(helper_plugin.SettingsPageTitle, { name: "API Tokens" }), /* @__PURE__ */ react.createElement(
    formik_dist.Formik,
    {
      validationSchema: utils_schema,
      validateOnChange: false,
      initialValues: {
        name: apiToken?.name || "",
        description: apiToken?.description || "",
        type: apiToken?.type,
        lifespan: apiToken?.lifespan ? apiToken.lifespan.toString() : apiToken?.lifespan
      },
      enableReinitialize: true,
      onSubmit: (body, actions) => handleSubmit(body, actions)
    },
    ({ errors, handleChange, isSubmitting, values, setFieldValue }) => {
      if (hasChangedPermissions && values?.type !== "custom") {
        setFieldValue("type", "custom");
      }
      return /* @__PURE__ */ react.createElement(helper_plugin.Form, null, /* @__PURE__ */ react.createElement(
        components_FormHead,
        {
          apiToken,
          setApiToken,
          canEditInputs,
          canRegenerate,
          isSubmitting
        }
      ), /* @__PURE__ */ react.createElement(
        components_FormBody,
        {
          apiToken,
          errors,
          onChange: handleChange,
          canEditInputs,
          isCreating,
          values,
          onDispatch: dispatch,
          setHasChangedPermissions
        }
      ));
    }
  )));
};
/* harmony default export */ const EditView = (ApiTokenCreateView);


/***/ })

}]);