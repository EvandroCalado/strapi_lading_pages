"use strict";
(self["webpackChunkstrapi_lading_pages"] = self["webpackChunkstrapi_lading_pages"] || []).push([[8056],{

/***/ 8421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProtectedListView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var qs_lib = __webpack_require__(80129);
var qs_lib_default = /*#__PURE__*/__webpack_require__.n(qs_lib);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var icons_dist = __webpack_require__(41363);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/ListView/utils/tableHeaders.js
const tableHeaders = [
  {
    name: "name",
    key: "name",
    metadatas: {
      label: {
        id: "Settings.apiTokens.ListView.headers.name",
        defaultMessage: "Name"
      },
      sortable: true
    }
  },
  {
    name: "description",
    key: "description",
    metadatas: {
      label: {
        id: "Settings.apiTokens.ListView.headers.description",
        defaultMessage: "Description"
      },
      sortable: false
    }
  },
  {
    name: "createdAt",
    key: "createdAt",
    metadatas: {
      label: {
        id: "Settings.apiTokens.ListView.headers.createdAt",
        defaultMessage: "Created at"
      },
      sortable: false
    }
  },
  {
    name: "lastUsedAt",
    key: "lastUsedAt",
    metadatas: {
      label: {
        id: "Settings.apiTokens.ListView.headers.lastUsedAt",
        defaultMessage: "Last used"
      },
      sortable: false
    }
  }
];
/* harmony default export */ const utils_tableHeaders = (tableHeaders);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/ListView/DynamicTable/DeleteButton/index.js






const DeleteButton = ({ tokenName, onClickDelete }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  return /* @__PURE__ */ react.createElement(dist.Box, { paddingLeft: 1, ...helper_plugin.stopPropagation }, /* @__PURE__ */ react.createElement(
    dist.IconButton,
    {
      onClick: () => {
        trackUsage("willDeleteToken");
        onClickDelete();
      },
      label: formatMessage(
        {
          id: "global.delete-target",
          defaultMessage: "Delete {target}"
        },
        { target: `${tokenName}` }
      ),
      name: "delete",
      noBorder: true,
      icon: /* @__PURE__ */ react.createElement(icons_dist.Trash, null)
    }
  ));
};
DeleteButton.propTypes = {
  tokenName: (prop_types_default()).string.isRequired,
  onClickDelete: (prop_types_default()).func.isRequired
};
/* harmony default export */ const DynamicTable_DeleteButton = (DeleteButton);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/ListView/DynamicTable/DefaultButton/index.js






const MESSAGES_MAP = {
  edit: {
    id: "app.component.table.edit",
    defaultMessage: "Edit {target}"
  },
  read: {
    id: "app.component.table.read",
    defaultMessage: "Read {target}"
  }
};
const LinkStyled = (0,styled_components_browser_esm["default"])(helper_plugin.Link)`
  svg {
    path {
      fill: ${({ theme }) => theme.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({ theme }) => theme.colors.neutral800};
      }
    }
  }
`;
const DefaultButton = ({ tokenName, tokenId, buttonType, children }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const {
    location: { pathname }
  } = (0,react_router_dom_min.useHistory)();
  return /* @__PURE__ */ react.createElement(
    LinkStyled,
    {
      to: `${pathname}/${tokenId}`,
      title: formatMessage(MESSAGES_MAP[buttonType], { target: tokenName })
    },
    children
  );
};
DefaultButton.propTypes = {
  tokenName: (prop_types_default()).string.isRequired,
  tokenId: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
  buttonType: (prop_types_default()).string,
  children: (prop_types_default()).node.isRequired
};
DefaultButton.defaultProps = {
  buttonType: "edit"
};
/* harmony default export */ const DynamicTable_DefaultButton = (DefaultButton);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/ListView/DynamicTable/UpdateButton/index.js




const UpdateButton = ({ tokenName, tokenId }) => {
  return /* @__PURE__ */ react.createElement(DynamicTable_DefaultButton, { tokenName, tokenId }, /* @__PURE__ */ react.createElement(icons_dist.Pencil, null));
};
UpdateButton.propTypes = {
  tokenName: (prop_types_default()).string.isRequired,
  tokenId: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired
};
/* harmony default export */ const DynamicTable_UpdateButton = (UpdateButton);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/ListView/DynamicTable/ReadButton/index.js




const ReadButton = ({ tokenName, tokenId }) => {
  return /* @__PURE__ */ react.createElement(DynamicTable_DefaultButton, { tokenName, tokenId, buttonType: "read" }, /* @__PURE__ */ react.createElement(icons_dist.Eye, null));
};
ReadButton.propTypes = {
  tokenName: (prop_types_default()).string.isRequired,
  tokenId: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired
};
/* harmony default export */ const DynamicTable_ReadButton = (ReadButton);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/ListView/DynamicTable/index.js








const TableRows = ({ canDelete, canUpdate, canRead, onClickDelete, withBulkActions, rows }) => {
  const [{ query }] = (0,helper_plugin.useQueryParams)();
  const [, sortOrder] = query.sort.split(":");
  const {
    push,
    location: { pathname }
  } = (0,react_router_dom_min.useHistory)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const apiTokens = rows.sort((a, b) => {
    const comparaison = a.name.localeCompare(b.name);
    return sortOrder === "DESC" ? -comparaison : comparaison;
  });
  return /* @__PURE__ */ react.createElement(dist.Tbody, null, apiTokens.map((apiToken) => {
    return /* @__PURE__ */ react.createElement(
      dist.Tr,
      {
        key: apiToken.id,
        ...(0,helper_plugin.onRowClick)({
          fn() {
            trackUsage("willEditTokenFromList");
            push(`${pathname}/${apiToken.id}`);
          },
          condition: canUpdate
        })
      },
      /* @__PURE__ */ react.createElement(dist.Td, null, /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral800", fontWeight: "bold" }, apiToken.name)),
      /* @__PURE__ */ react.createElement(dist.Td, { maxWidth: (0,helper_plugin.pxToRem)(250) }, /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral800", ellipsis: true }, apiToken.description)),
      /* @__PURE__ */ react.createElement(dist.Td, null, /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral800" }, /* @__PURE__ */ react.createElement(helper_plugin.RelativeTime, { timestamp: new Date(apiToken.createdAt) }))),
      /* @__PURE__ */ react.createElement(dist.Td, null, apiToken.lastUsedAt && /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral800" }, /* @__PURE__ */ react.createElement(helper_plugin.RelativeTime, { timestamp: new Date(apiToken.lastUsedAt) }))),
      withBulkActions && /* @__PURE__ */ react.createElement(dist.Td, null, /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "end" }, canUpdate && /* @__PURE__ */ react.createElement(DynamicTable_UpdateButton, { tokenName: apiToken.name, tokenId: apiToken.id }), !canUpdate && canRead && /* @__PURE__ */ react.createElement(DynamicTable_ReadButton, { tokenName: apiToken.name, tokenId: apiToken.id }), canDelete && /* @__PURE__ */ react.createElement(
        DynamicTable_DeleteButton,
        {
          tokenName: apiToken.name,
          onClickDelete: () => onClickDelete(apiToken.id)
        }
      )))
    );
  }));
};
TableRows.defaultProps = {
  canDelete: false,
  canUpdate: false,
  canRead: false,
  onClickDelete() {
  },
  rows: [],
  withBulkActions: false
};
TableRows.propTypes = {
  canDelete: (prop_types_default()).bool,
  canUpdate: (prop_types_default()).bool,
  canRead: (prop_types_default()).bool,
  onClickDelete: (prop_types_default()).func,
  rows: (prop_types_default()).array,
  withBulkActions: (prop_types_default()).bool
};
/* harmony default export */ const DynamicTable = (TableRows);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/ListView/index.js











const ApiTokenListView = () => {
  (0,helper_plugin.useFocusWhenNavigate)();
  const queryClient = (0,lib.useQueryClient)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const {
    allowedActions: { canCreate, canDelete, canUpdate, canRead }
  } = (0,helper_plugin.useRBAC)(permissions/* default.settings.api-tokens */.Z.settings["api-tokens"]);
  const { push } = (0,react_router_dom_min.useHistory)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const { startSection } = (0,helper_plugin.useGuidedTour)();
  const startSectionRef = (0,react.useRef)(startSection);
  const { get, del } = (0,helper_plugin.useFetchClient)();
  (0,react.useEffect)(() => {
    if (startSectionRef.current) {
      startSectionRef.current("apiTokens");
    }
  }, []);
  (0,react.useEffect)(() => {
    push({ search: qs_lib_default().stringify({ sort: "name:ASC" }, { encode: false }) });
  }, [push]);
  const headers = utils_tableHeaders.map((header) => ({
    ...header,
    metadatas: {
      ...header.metadatas,
      label: formatMessage(header.metadatas.label)
    }
  }));
  const {
    data: apiTokens,
    status,
    isFetching
  } = (0,lib.useQuery)(
    ["api-tokens"],
    async () => {
      trackUsage("willAccessTokenList");
      const {
        data: { data }
      } = await get(`/admin/api-tokens`);
      trackUsage("didAccessTokenList", { number: data.length });
      return data;
    },
    {
      enabled: canRead,
      onError() {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error", defaultMessage: "An error occured" }
        });
      }
    }
  );
  const isLoading = canRead && (status !== "success" && status !== "error" || status === "success" && isFetching);
  const deleteMutation = (0,lib.useMutation)(
    async (id) => {
      await del(`/admin/api-tokens/${id}`);
    },
    {
      async onSuccess() {
        await queryClient.invalidateQueries(["api-tokens"]);
        trackUsage("didDeleteToken");
      },
      onError(err) {
        if (err?.response?.data?.data) {
          toggleNotification({ type: "warning", message: err.response.data.data });
        } else {
          toggleNotification({
            type: "warning",
            message: { id: "notification.error", defaultMessage: "An error occured" }
          });
        }
      }
    }
  );
  const shouldDisplayDynamicTable = canRead && apiTokens;
  const shouldDisplayNoContent = canRead && !apiTokens && !canCreate;
  const shouldDisplayNoContentWithCreationButton = canRead && !apiTokens && canCreate;
  return /* @__PURE__ */ react.createElement(dist.Main, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(helper_plugin.SettingsPageTitle, { name: "API Tokens" }), /* @__PURE__ */ react.createElement(
    dist.HeaderLayout,
    {
      title: formatMessage({ id: "Settings.apiTokens.title", defaultMessage: "API Tokens" }),
      subtitle: formatMessage({
        id: "Settings.apiTokens.description",
        defaultMessage: "List of generated tokens to consume the API"
      }),
      primaryAction: canCreate ? /* @__PURE__ */ react.createElement(
        helper_plugin.LinkButton,
        {
          "data-testid": "create-api-token-button",
          startIcon: /* @__PURE__ */ react.createElement(icons_dist.Plus, null),
          size: "S",
          onClick: () => trackUsage("willAddTokenFromList"),
          to: "/settings/api-tokens/create"
        },
        formatMessage({
          id: "Settings.apiTokens.create",
          defaultMessage: "Create new API Token"
        })
      ) : void 0
    }
  ), /* @__PURE__ */ react.createElement(dist.ContentLayout, null, !canRead && /* @__PURE__ */ react.createElement(helper_plugin.NoPermissions, null), shouldDisplayDynamicTable && /* @__PURE__ */ react.createElement(
    helper_plugin.DynamicTable,
    {
      headers,
      contentType: "api-tokens",
      rows: apiTokens,
      withBulkActions: canDelete || canUpdate || canRead,
      isLoading,
      onConfirmDelete: (id) => deleteMutation.mutateAsync(id)
    },
    /* @__PURE__ */ react.createElement(
      DynamicTable,
      {
        canRead,
        canDelete,
        canUpdate,
        rows: apiTokens,
        withBulkActions: canDelete || canUpdate || canRead
      }
    )
  ), shouldDisplayNoContentWithCreationButton && /* @__PURE__ */ react.createElement(
    helper_plugin.NoContent,
    {
      content: {
        id: "Settings.apiTokens.addFirstToken",
        defaultMessage: "Add your first API Token"
      },
      action: /* @__PURE__ */ react.createElement(dist.Button, { variant: "secondary", startIcon: /* @__PURE__ */ react.createElement(icons_dist.Plus, null) }, formatMessage({
        id: "Settings.apiTokens.addNewToken",
        defaultMessage: "Add new API Token"
      }))
    }
  ), shouldDisplayNoContent && /* @__PURE__ */ react.createElement(
    helper_plugin.NoContent,
    {
      content: {
        id: "Settings.apiTokens.emptyStateLayout",
        defaultMessage: "You don\u2019t have any content yet..."
      }
    }
  )));
};
/* harmony default export */ const ListView = (ApiTokenListView);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/ProtectedListView/index.js




const ProtectedApiTokenListView = () => /* @__PURE__ */ react.createElement(helper_plugin.CheckPagePermissions, { permissions: permissions/* default.settings.api-tokens.main */.Z.settings["api-tokens"].main }, /* @__PURE__ */ react.createElement(ListView, null));
/* harmony default export */ const ProtectedListView = (ProtectedApiTokenListView);


/***/ })

}]);