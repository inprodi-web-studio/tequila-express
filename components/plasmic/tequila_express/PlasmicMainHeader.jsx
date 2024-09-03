// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uEWT1C6ySrjtSMWJntBego
// Component: wtnE0On9QToy
import * as React from "react";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateStateOnChangeProp,
  generateStateValueProp,
  hasVariant,
  set as $stateSet,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import MenuLink from "../../MenuLink"; // plasmic-import: QGAZksd0OJe_/component
import { AntdDropdown } from "@plasmicpkgs/antd5/skinny/registerDropdown";
import { AntdMenuItem } from "@plasmicpkgs/antd5/skinny/registerMenu";
import { AntdModal } from "@plasmicpkgs/antd5/skinny/registerModal";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { useScreenVariants as useScreenVariantsraGa2MJbEFd } from "../website_starter/PlasmicGlobalVariant__Screen"; // plasmic-import: RaGa2M-JbEFd/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "../website_starter/plasmic.module.css"; // plasmic-import: uEWT1C6ySrjtSMWJntBego/projectcss
import sty from "./PlasmicMainHeader.module.css"; // plasmic-import: wtnE0On9QToy/css
import CaretDownFillSvgIcon from "./icons/PlasmicIcon__CaretDownFillSvg"; // plasmic-import: qlGWzT8MyovL/icon
import XSvgIcon from "./icons/PlasmicIcon__XSvg"; // plasmic-import: wbQGNqEUKbny/icon
import ListSvgIcon from "./icons/PlasmicIcon__ListSvg"; // plasmic-import: Yxs93ms14aPR/icon

createPlasmicElementProxy;

export const PlasmicMainHeader__VariantProps = new Array();

export const PlasmicMainHeader__ArgProps = new Array(
  "menuOpen",
  "onMenuOpenChange"
);

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMainHeader__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "menuOpen",
        type: "writable",
        variableType: "boolean",
        valueProp: "menuOpen",
        onChangeProp: "onMenuOpenChange"
      },
      {
        path: "modal.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          hasVariant(globalVariants, "screen", "mobile")
            ? (() => {
                try {
                  return $state.menuOpen;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return false;
                  }
                  throw e;
                }
              })()
            : undefined
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsraGa2MJbEFd()
  });
  return (
    <div
      data-plasmic-name={"header"}
      data-plasmic-override={overrides.header}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.header
      )}
    >
      <PlasmicImg__
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={"auto"}
        displayMaxHeight={"none"}
        displayMaxWidth={"100%"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"183px"}
        loading={"lazy"}
        onClick={async event => {
          const $steps = {};
          $steps["goToInicio"] = true
            ? (() => {
                const actionArgs = { destination: `/` };
                return (({ destination }) => {
                  if (
                    typeof destination === "string" &&
                    destination.startsWith("#")
                  ) {
                    document
                      .getElementById(destination.substr(1))
                      .scrollIntoView({ behavior: "smooth" });
                  } else {
                    __nextRouter?.push(destination);
                  }
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["goToInicio"] != null &&
            typeof $steps["goToInicio"] === "object" &&
            typeof $steps["goToInicio"].then === "function"
          ) {
            $steps["goToInicio"] = await $steps["goToInicio"];
          }
        }}
        src={{
          src: "/plasmic/tequila_express/images/logoTequilaPng.png",
          fullWidth: 1332,
          fullHeight: 196,
          aspectRatio: undefined
        }}
      />

      <Stack__
        as={"div"}
        data-plasmic-name={"menu"}
        data-plasmic-override={overrides.menu}
        hasGap={true}
        className={classNames(projectcss.all, sty.menu)}
      >
        <MenuLink
          className={classNames("__wab_instance", sty.menuLink__uG8Ho)}
          label={"Inicio"}
          onClick={async () => {
            const $steps = {};
            $steps["goToInicio"] = true
              ? (() => {
                  const actionArgs = { destination: `/` };
                  return (({ destination }) => {
                    if (
                      typeof destination === "string" &&
                      destination.startsWith("#")
                    ) {
                      document
                        .getElementById(destination.substr(1))
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      __nextRouter?.push(destination);
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["goToInicio"] != null &&
              typeof $steps["goToInicio"] === "object" &&
              typeof $steps["goToInicio"].then === "function"
            ) {
              $steps["goToInicio"] = await $steps["goToInicio"];
            }
          }}
        />

        <MenuLink
          className={classNames("__wab_instance", sty.menuLink__lhhH2)}
          label={"Nosotros"}
          onClick={async () => {
            const $steps = {};
            $steps["goToNosotros"] = true
              ? (() => {
                  const actionArgs = { destination: `/nosotros` };
                  return (({ destination }) => {
                    if (
                      typeof destination === "string" &&
                      destination.startsWith("#")
                    ) {
                      document
                        .getElementById(destination.substr(1))
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      __nextRouter?.push(destination);
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["goToNosotros"] != null &&
              typeof $steps["goToNosotros"] === "object" &&
              typeof $steps["goToNosotros"].then === "function"
            ) {
              $steps["goToNosotros"] = await $steps["goToNosotros"];
            }
          }}
        />

        <MenuLink
          className={classNames("__wab_instance", sty.menuLink__dS26B)}
          label={"Viaja en Tren"}
          onClick={async () => {
            const $steps = {};
            $steps["goToViajarEnTren"] = true
              ? (() => {
                  const actionArgs = { destination: `/viajar-en-tren` };
                  return (({ destination }) => {
                    if (
                      typeof destination === "string" &&
                      destination.startsWith("#")
                    ) {
                      document
                        .getElementById(destination.substr(1))
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      __nextRouter?.push(destination);
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["goToViajarEnTren"] != null &&
              typeof $steps["goToViajarEnTren"] === "object" &&
              typeof $steps["goToViajarEnTren"].then === "function"
            ) {
              $steps["goToViajarEnTren"] = await $steps["goToViajarEnTren"];
            }
          }}
        />

        <AntdDropdown
          data-plasmic-name={"dropdown"}
          data-plasmic-override={overrides.dropdown}
          className={classNames("__wab_instance", sty.dropdown)}
          dropdownMenuScopeClassName={sty["dropdown__dropdownMenu"]}
          menuItemClassName={classNames({ [sty["pcls_Xor1vYNaybzh"]]: true })}
          menuItems={() => (
            <React.Fragment>
              <AntdMenuItem
                className={classNames("__wab_instance", sty.menuItem__x3TcE)}
                key={"1"}
                title={"Grupo M\u00e9xico Transportes"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__lQnYr
                  )}
                >
                  {"Menu item"}
                </div>
              </AntdMenuItem>
              <AntdMenuItem
                className={classNames("__wab_instance", sty.menuItem__udV4)}
                key={"1"}
                title={"C\u00e1mara de Comercio de Guadalajara"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__saVT
                  )}
                >
                  {"Menu item"}
                </div>
              </AntdMenuItem>
            </React.Fragment>
          )}
          menuItemsJson={(() => {
            const __composite = [
              { type: "item", value: "action1", label: null, onClick: null },
              { type: "item", value: "action2", label: null }
            ];

            __composite["0"]["label"] = "Grupo M\u00e9xico Transportes";
            __composite["0"]["onClick"] = async info => {
              const $steps = {};
              $steps["goToRecorridoGrupoMexicoTransportes"] = true
                ? (() => {
                    const actionArgs = {
                      destination: `/recorridos/grupo-mexico-transportes`
                    };
                    return (({ destination }) => {
                      if (
                        typeof destination === "string" &&
                        destination.startsWith("#")
                      ) {
                        document
                          .getElementById(destination.substr(1))
                          .scrollIntoView({ behavior: "smooth" });
                      } else {
                        __nextRouter?.push(destination);
                      }
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["goToRecorridoGrupoMexicoTransportes"] != null &&
                typeof $steps["goToRecorridoGrupoMexicoTransportes"] ===
                  "object" &&
                typeof $steps["goToRecorridoGrupoMexicoTransportes"].then ===
                  "function"
              ) {
                $steps["goToRecorridoGrupoMexicoTransportes"] = await $steps[
                  "goToRecorridoGrupoMexicoTransportes"
                ];
              }
            };
            __composite["1"]["label"] =
              "C\u00e1mara de Comercio de Guadalajara";
            return __composite;
          })()}
          placement={"bottomRight"}
          trigger={"hover"}
          useMenuItemsSlot={false}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__nLMdt)}
          >
            <MenuLink
              className={classNames("__wab_instance", sty.menuLink__zV35)}
              label={"Recorridos"}
            />

            <CaretDownFillSvgIcon
              className={classNames(projectcss.all, sty.svg__fgV9I)}
              role={"img"}
            />
          </Stack__>
        </AntdDropdown>
        <MenuLink
          className={classNames("__wab_instance", sty.menuLink___7UJ5)}
          label={"Contacto"}
          onClick={async () => {
            const $steps = {};
            $steps["goToContacto"] = true
              ? (() => {
                  const actionArgs = { destination: `/contacto` };
                  return (({ destination }) => {
                    if (
                      typeof destination === "string" &&
                      destination.startsWith("#")
                    ) {
                      document
                        .getElementById(destination.substr(1))
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      __nextRouter?.push(destination);
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["goToContacto"] != null &&
              typeof $steps["goToContacto"] === "object" &&
              typeof $steps["goToContacto"].then === "function"
            ) {
              $steps["goToContacto"] = await $steps["goToContacto"];
            }
          }}
        />
      </Stack__>
      <AntdModal
        data-plasmic-name={"modal"}
        data-plasmic-override={overrides.modal}
        className={classNames("__wab_instance", sty.modal)}
        closeIcon={
          <XSvgIcon
            className={classNames(projectcss.all, sty.svg__k5U7K)}
            role={"img"}
          />
        }
        defaultStylesClassName={classNames(
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          plasmic_antd_5_hostless_css.plasmic_tokens
        )}
        hideFooter={
          hasVariant(globalVariants, "screen", "mobile") ? true : undefined
        }
        modalContentClassName={classNames({
          [sty["pcls_MPhBVAFsdfE2"]]: hasVariant(
            globalVariants,
            "screen",
            "mobile"
          )
        })}
        modalScopeClassName={sty["modal__modal"]}
        onCancel={async () => {
          const $steps = {};
          $steps["updateMenuOpen"] = true
            ? (() => {
                const actionArgs = {
                  variable: {
                    objRoot: $state,
                    variablePath: ["menuOpen"]
                  },
                  operation: 0,
                  value: false
                };
                return (({ variable, value, startIndex, deleteCount }) => {
                  if (!variable) {
                    return;
                  }
                  const { objRoot, variablePath } = variable;
                  $stateSet(objRoot, variablePath, value);
                  return value;
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["updateMenuOpen"] != null &&
            typeof $steps["updateMenuOpen"] === "object" &&
            typeof $steps["updateMenuOpen"].then === "function"
          ) {
            $steps["updateMenuOpen"] = await $steps["updateMenuOpen"];
          }
        }}
        onOpenChange={generateStateOnChangeProp($state, ["modal", "open"])}
        open={generateStateValueProp($state, ["modal", "open"])}
        title={null}
        trigger={null}
        width={
          hasVariant(globalVariants, "screen", "mobile") ? "100%" : undefined
        }
        wrapClassName={classNames({
          [sty["pcls_gM1SCXyO7RvB"]]: hasVariant(
            globalVariants,
            "screen",
            "mobile"
          )
        })}
      >
        {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__z4Ma)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zroml
              )}
              onClick={async event => {
                const $steps = {};
                $steps["goToInicio"] = true
                  ? (() => {
                      const actionArgs = { destination: `/` };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToInicio"] != null &&
                  typeof $steps["goToInicio"] === "object" &&
                  typeof $steps["goToInicio"].then === "function"
                ) {
                  $steps["goToInicio"] = await $steps["goToInicio"];
                }
                $steps["updateMenuOpen"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["menuOpen"]
                        },
                        operation: 0,
                        value: false
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;
                        $stateSet(objRoot, variablePath, value);
                        return value;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateMenuOpen"] != null &&
                  typeof $steps["updateMenuOpen"] === "object" &&
                  typeof $steps["updateMenuOpen"].then === "function"
                ) {
                  $steps["updateMenuOpen"] = await $steps["updateMenuOpen"];
                }
              }}
            >
              {"Inicio"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__uLs
              )}
              onClick={async event => {
                const $steps = {};
                $steps["goToNosotros"] = true
                  ? (() => {
                      const actionArgs = { destination: `/nosotros` };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToNosotros"] != null &&
                  typeof $steps["goToNosotros"] === "object" &&
                  typeof $steps["goToNosotros"].then === "function"
                ) {
                  $steps["goToNosotros"] = await $steps["goToNosotros"];
                }
                $steps["updateMenuOpen"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["menuOpen"]
                        },
                        operation: 0,
                        value: false
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;
                        $stateSet(objRoot, variablePath, value);
                        return value;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateMenuOpen"] != null &&
                  typeof $steps["updateMenuOpen"] === "object" &&
                  typeof $steps["updateMenuOpen"].then === "function"
                ) {
                  $steps["updateMenuOpen"] = await $steps["updateMenuOpen"];
                }
              }}
            >
              {"Nosotros"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__mwVh
              )}
              onClick={async event => {
                const $steps = {};
                $steps["goToViajarEnTren"] = true
                  ? (() => {
                      const actionArgs = { destination: `/viajar-en-tren` };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToViajarEnTren"] != null &&
                  typeof $steps["goToViajarEnTren"] === "object" &&
                  typeof $steps["goToViajarEnTren"].then === "function"
                ) {
                  $steps["goToViajarEnTren"] = await $steps["goToViajarEnTren"];
                }
                $steps["updateMenuOpen"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["menuOpen"]
                        },
                        operation: 0,
                        value: false
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;
                        $stateSet(objRoot, variablePath, value);
                        return value;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateMenuOpen"] != null &&
                  typeof $steps["updateMenuOpen"] === "object" &&
                  typeof $steps["updateMenuOpen"].then === "function"
                ) {
                  $steps["updateMenuOpen"] = await $steps["updateMenuOpen"];
                }
              }}
            >
              {"Viaja en Tren"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___2FhT
              )}
            >
              {"Recorridos"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__hhjrd
              )}
              onClick={async event => {
                const $steps = {};
                $steps["goToRecorridoFerromex"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: `/recorridos/grupo-mexico-transportes`
                      };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToRecorridoFerromex"] != null &&
                  typeof $steps["goToRecorridoFerromex"] === "object" &&
                  typeof $steps["goToRecorridoFerromex"].then === "function"
                ) {
                  $steps["goToRecorridoFerromex"] = await $steps[
                    "goToRecorridoFerromex"
                  ];
                }
                $steps["updateMenuOpen"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["menuOpen"]
                        },
                        operation: 0,
                        value: false
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;
                        $stateSet(objRoot, variablePath, value);
                        return value;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateMenuOpen"] != null &&
                  typeof $steps["updateMenuOpen"] === "object" &&
                  typeof $steps["updateMenuOpen"].then === "function"
                ) {
                  $steps["updateMenuOpen"] = await $steps["updateMenuOpen"];
                }
              }}
            >
              {"Grupo M\u00e9xico Transportes"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__nMfD
              )}
            >
              {"C\u00e1mara de Comercio de Guadalajara"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__azdEw
              )}
              onClick={async event => {
                const $steps = {};
                $steps["goToContacto"] = true
                  ? (() => {
                      const actionArgs = { destination: `/contacto` };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToContacto"] != null &&
                  typeof $steps["goToContacto"] === "object" &&
                  typeof $steps["goToContacto"].then === "function"
                ) {
                  $steps["goToContacto"] = await $steps["goToContacto"];
                }
                $steps["updateMenuOpen"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["menuOpen"]
                        },
                        operation: 0,
                        value: false
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;
                        $stateSet(objRoot, variablePath, value);
                        return value;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateMenuOpen"] != null &&
                  typeof $steps["updateMenuOpen"] === "object" &&
                  typeof $steps["updateMenuOpen"].then === "function"
                ) {
                  $steps["updateMenuOpen"] = await $steps["updateMenuOpen"];
                }
              }}
            >
              {"Contacto"}
            </div>
          </Stack__>
        ) : null}
      </AntdModal>
      {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
        <AntdButton
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames("__wab_instance", sty.button)}
          onClick={async () => {
            const $steps = {};
            $steps["updateMenuOpen"] = true
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["menuOpen"]
                    },
                    operation: 0,
                    value: true
                  };
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;
                    $stateSet(objRoot, variablePath, value);
                    return value;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateMenuOpen"] != null &&
              typeof $steps["updateMenuOpen"] === "object" &&
              typeof $steps["updateMenuOpen"].then === "function"
            ) {
              $steps["updateMenuOpen"] = await $steps["updateMenuOpen"];
            }
          }}
          type={"default"}
        >
          <div className={classNames(projectcss.all, sty.freeBox__m3A4S)}>
            <ListSvgIcon
              className={classNames(projectcss.all, sty.svg__txEd)}
              role={"img"}
            />
          </div>
        </AntdButton>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  header: ["header", "img", "menu", "dropdown", "modal", "button"],
  img: ["img"],
  menu: ["menu", "dropdown"],
  dropdown: ["dropdown"],
  modal: ["modal"],
  button: ["button"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicMainHeader__ArgProps,
          internalVariantPropNames: PlasmicMainHeader__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMainHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "header") {
    func.displayName = "PlasmicMainHeader";
  } else {
    func.displayName = `PlasmicMainHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicMainHeader = Object.assign(
  // Top-level PlasmicMainHeader renders the root element
  makeNodeComponent("header"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    menu: makeNodeComponent("menu"),
    dropdown: makeNodeComponent("dropdown"),
    modal: makeNodeComponent("modal"),
    button: makeNodeComponent("button"),
    // Metadata about props expected for PlasmicMainHeader
    internalVariantProps: PlasmicMainHeader__VariantProps,
    internalArgProps: PlasmicMainHeader__ArgProps
  }
);

export default PlasmicMainHeader;
/* prettier-ignore-end */
