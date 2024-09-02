// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uEWT1C6ySrjtSMWJntBego
// Component: hM5E7d7Q2-3U
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  initializeCodeComponentStates,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import MainHeader from "../../MainHeader"; // plasmic-import: wtnE0On9QToy/component
import { AntdAccordion } from "@plasmicpkgs/antd5/skinny/registerCollapse";
import { accordionHelpers as AntdAccordion_Helpers } from "@plasmicpkgs/antd5/skinny/registerCollapse";
import { AntdAccordionItem } from "@plasmicpkgs/antd5/skinny/registerCollapse";
import Footer from "../../Footer"; // plasmic-import: Iz_Y_kKZMHTD/component
import { useScreenVariants as useScreenVariantsraGa2MJbEFd } from "../website_starter/PlasmicGlobalVariant__Screen"; // plasmic-import: RaGa2M-JbEFd/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "../website_starter/plasmic.module.css"; // plasmic-import: uEWT1C6ySrjtSMWJntBego/projectcss
import sty from "./PlasmicContacto.module.css"; // plasmic-import: hM5E7d7Q2-3U/css

createPlasmicElementProxy;

export const PlasmicContacto__VariantProps = new Array();

export const PlasmicContacto__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicContacto__RenderFunc(props) {
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
        path: "accordion.activePanelId",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "1",
        onMutate: generateOnMutateForSpec(
          "activePanelId",
          AntdAccordion_Helpers
        )
      },
      {
        path: "mainHeader.menuOpen",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
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
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicContacto.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicContacto.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicContacto.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"mainSection"}
          data-plasmic-override={overrides.mainSection}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.mainSection
          )}
        >
          <MainHeader
            data-plasmic-name={"mainHeader"}
            data-plasmic-override={overrides.mainHeader}
            className={classNames("__wab_instance", sty.mainHeader)}
            menuOpen={generateStateValueProp($state, [
              "mainHeader",
              "menuOpen"
            ])}
            onMenuOpenChange={generateStateOnChangeProp($state, [
              "mainHeader",
              "menuOpen"
            ])}
          />

          <div
            data-plasmic-name={"mainBanner"}
            data-plasmic-override={overrides.mainBanner}
            className={classNames(projectcss.all, sty.mainBanner)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"banner"}
              data-plasmic-override={overrides.banner}
              hasGap={true}
              className={classNames(projectcss.all, sty.banner)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zKqr
                )}
              >
                {"Queremos que\ntu viaje sea \u00fanico"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nzJ4O
                )}
              >
                {"Cont\u00e1ctanos y dinos c\u00f3mo podemos ayudarte."}
              </div>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__w8WUo)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__u61Bo)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___0Vzh0
                    )}
                  >
                    {"Tel\u00e9fono"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__h886R
                    )}
                  >
                    {"Morbi torquent etiam tincidunt nisi tempus rutrum porta."}
                  </div>
                </Stack__>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___7Orrp)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mzJV
                    )}
                  >
                    {"Correo Electr\u00f3nico"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ffzHs
                    )}
                  >
                    {"Morbi torquent etiam tincidunt nisi tempus rutrum porta."}
                  </div>
                </Stack__>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__dwUmZ)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___2O0Xp
                    )}
                  >
                    {"Direcci\u00f3n"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__bvas7
                    )}
                  >
                    {"Morbi torquent etiam tincidunt nisi tempus rutrum porta."}
                  </div>
                </Stack__>
              </Stack__>
            </Stack__>
          </div>
          <Stack__
            as={"div"}
            data-plasmic-name={"frequentQuestions"}
            data-plasmic-override={overrides.frequentQuestions}
            hasGap={true}
            className={classNames(projectcss.all, sty.frequentQuestions)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"title2"}
              data-plasmic-override={overrides.title2}
              hasGap={true}
              className={classNames(projectcss.all, sty.title2)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___8Ak45
                )}
              >
                {"Si\u00e9ntete acompa\u00f1ado en el camino"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___7MjwU
                )}
              >
                {
                  "Encuentra las respuestas a las preguntas m\u00e1s frecuentes."
                }
              </div>
            </Stack__>
            {(() => {
              const child$Props = {
                activeKey: generateStateValueProp($state, [
                  "accordion",
                  "activePanelId"
                ]),
                bordered: true,
                className: classNames("__wab_instance", sty.accordion),
                defaultActiveKey: "1",
                ghost: true,
                items: (
                  <React.Fragment>
                    <AntdAccordionItem
                      className={classNames(
                        "__wab_instance",
                        sty.accordionItem__tcUo6
                      )}
                      id={1}
                      label2={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__u1OZm
                          )}
                        >
                          {
                            "\u00bfVitae sed facilisi turpis nunc risus suscipit?"
                          }
                        </div>
                      }
                      showArrow={false}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__lseO3
                        )}
                      >
                        {
                          "Morbi torquent etiam tincidunt nisi tempus rutrum porta molestie fames lobortis nisl justo curae, consequat vivamus eros posuere laoreet imperdiet dictumst."
                        }
                      </div>
                    </AntdAccordionItem>
                    <AntdAccordionItem
                      className={classNames(
                        "__wab_instance",
                        sty.accordionItem__cw8Lz
                      )}
                      id={"2"}
                      label2={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__fSoOw
                          )}
                        >
                          {
                            "\u00bfVitae sed facilisi turpis nunc risus suscipit?"
                          }
                        </div>
                      }
                      showArrow={false}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___2C9U1
                        )}
                      >
                        {
                          "Morbi torquent etiam tincidunt nisi tempus rutrum porta molestie fames lobortis nisl justo curae, consequat vivamus eros posuere laoreet imperdiet dictumst."
                        }
                      </div>
                    </AntdAccordionItem>
                    <AntdAccordionItem
                      className={classNames(
                        "__wab_instance",
                        sty.accordionItem___0TCm0
                      )}
                      id={"3"}
                      label2={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__jany
                          )}
                        >
                          {
                            "\u00bfVitae sed facilisi turpis nunc risus suscipit?"
                          }
                        </div>
                      }
                      showArrow={false}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__vooFi
                        )}
                      >
                        {
                          "Morbi torquent etiam tincidunt nisi tempus rutrum porta molestie fames lobortis nisl justo curae, consequat vivamus eros posuere laoreet imperdiet dictumst."
                        }
                      </div>
                    </AntdAccordionItem>
                    <AntdAccordionItem
                      className={classNames(
                        "__wab_instance",
                        sty.accordionItem__afzKu
                      )}
                      id={"4"}
                      label2={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___7G3Kc
                          )}
                        >
                          {
                            "\u00bfVitae sed facilisi turpis nunc risus suscipit?"
                          }
                        </div>
                      }
                      showArrow={false}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__sarr
                        )}
                      >
                        {
                          "Morbi torquent etiam tincidunt nisi tempus rutrum porta molestie fames lobortis nisl justo curae, consequat vivamus eros posuere laoreet imperdiet dictumst."
                        }
                      </div>
                    </AntdAccordionItem>
                    <AntdAccordionItem
                      className={classNames(
                        "__wab_instance",
                        sty.accordionItem__dIsOy
                      )}
                      id={"5"}
                      label2={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__tpl8H
                          )}
                        >
                          {
                            "\u00bfVitae sed facilisi turpis nunc risus suscipit?"
                          }
                        </div>
                      }
                      showArrow={false}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___8SNaz
                        )}
                      >
                        {
                          "Morbi torquent etiam tincidunt nisi tempus rutrum porta molestie fames lobortis nisl justo curae, consequat vivamus eros posuere laoreet imperdiet dictumst."
                        }
                      </div>
                    </AntdAccordionItem>
                    <AntdAccordionItem
                      className={classNames(
                        "__wab_instance",
                        sty.accordionItem__rawz6
                      )}
                      id={"6"}
                      label2={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__otxWt
                          )}
                        >
                          {
                            "\u00bfVitae sed facilisi turpis nunc risus suscipit?"
                          }
                        </div>
                      }
                      showArrow={false}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__lEw2O
                        )}
                      >
                        {
                          "Morbi torquent etiam tincidunt nisi tempus rutrum porta molestie fames lobortis nisl justo curae, consequat vivamus eros posuere laoreet imperdiet dictumst."
                        }
                      </div>
                    </AntdAccordionItem>
                  </React.Fragment>
                ),

                onChange: generateStateOnChangePropForCodeComponents(
                  $state,
                  "activePanelId",
                  ["accordion", "activePanelId"],
                  AntdAccordion_Helpers
                )
              };
              initializeCodeComponentStates(
                $state,
                [
                  {
                    name: "activePanelId",
                    plasmicStateName: "accordion.activePanelId"
                  }
                ],

                [],
                AntdAccordion_Helpers ?? {},
                child$Props
              );
              return (
                <AntdAccordion
                  data-plasmic-name={"accordion"}
                  data-plasmic-override={overrides.accordion}
                  {...child$Props}
                />
              );
            })()}
          </Stack__>
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  mainSection: [
    "mainSection",
    "mainHeader",
    "mainBanner",
    "banner",
    "frequentQuestions",
    "title2",
    "accordion",
    "footer"
  ],

  mainHeader: ["mainHeader"],
  mainBanner: ["mainBanner", "banner"],
  banner: ["banner"],
  frequentQuestions: ["frequentQuestions", "title2", "accordion"],
  title2: ["title2"],
  accordion: ["accordion"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicContacto__ArgProps,
          internalVariantPropNames: PlasmicContacto__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicContacto__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "mainSection") {
    func.displayName = "PlasmicContacto";
  } else {
    func.displayName = `PlasmicContacto.${nodeName}`;
  }
  return func;
}

export const PlasmicContacto = Object.assign(
  // Top-level PlasmicContacto renders the root element
  makeNodeComponent("mainSection"),
  {
    // Helper components rendering sub-elements
    mainHeader: makeNodeComponent("mainHeader"),
    mainBanner: makeNodeComponent("mainBanner"),
    banner: makeNodeComponent("banner"),
    frequentQuestions: makeNodeComponent("frequentQuestions"),
    title2: makeNodeComponent("title2"),
    accordion: makeNodeComponent("accordion"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicContacto
    internalVariantProps: PlasmicContacto__VariantProps,
    internalArgProps: PlasmicContacto__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Contacto",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicContacto;
/* prettier-ignore-end */
