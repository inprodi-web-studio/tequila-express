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
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
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
        path: "mainHeader.menuOpen",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "accordion.activePanelId",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "1",
        onMutate: generateOnMutateForSpec(
          "activePanelId",
          AntdAccordion_Helpers
        )
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
                    {"Grupo M\u00e9xico Transportes"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__h886R
                    )}
                  >
                    {"33 2309 4000\ntequila.express@ferromex.mx"}
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
                    {"C\u00e1mara de Comercio de Guadalajara"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ffzHs
                    )}
                  >
                    {"Tel\u00e9fono\nCorreo electr\u00f3nico"}
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
                        sty.accordionItem__lwUfg
                      )}
                      id={1}
                      label2={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___97DaE
                          )}
                        >
                          {
                            "\u00bfQu\u00e9 opciones de recorridos ofrece el Tequila Express?"
                          }
                        </div>
                      }
                      showArrow={false}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__obpFt
                        )}
                      >
                        {
                          "El Tequila Express ofrece varias opciones de itinerarios operados por diferentes socios, incluyendo Grupo M\u00e9xico Transportes y la C\u00e1mara de Comercio de Guadalajara. Cada recorrido tiene caracter\u00edsticas \u00fanicas como visitas a campos agaveros, degustaciones de tequila y espect\u00e1culos culturales."
                        }
                      </div>
                    </AntdAccordionItem>
                    <AntdAccordionItem
                      className={classNames(
                        "__wab_instance",
                        sty.accordionItem__nkDe8
                      )}
                      id={"2"}
                      label2={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__ek4Xq
                          )}
                        >
                          {
                            "\u00bfCu\u00e1les son las fechas y horarios de salida del Tequila Express?"
                          }
                        </div>
                      }
                      showArrow={false}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__jC0I
                        )}
                      >
                        {
                          "Los recorridos est\u00e1n disponibles los d\u00edas viernes, s\u00e1bados y domingos, con algunas excepciones dependiendo el operador. Los horarios espec\u00edficos de salida y regreso var\u00edan seg\u00fan el itinerario seleccionado."
                        }
                      </div>
                    </AntdAccordionItem>
                    <AntdAccordionItem
                      className={classNames(
                        "__wab_instance",
                        sty.accordionItem__lXcdL
                      )}
                      id={"3"}
                      label2={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___8M00E
                          )}
                        >
                          {
                            "\u00bfQu\u00e9 debo llevar para mi viaje en el Tequila Express?"
                          }
                        </div>
                      }
                      showArrow={false}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__b2N5F
                        )}
                      >
                        {
                          "Se recomienda llevar identificaci\u00f3n oficial, copia de la confirmaci\u00f3n de reserva, zapato cerrado y c\u00f3modo, lentes de sol, sombrero, ropa c\u00f3moda, y protector solar. Para mayor comodidad, tambi\u00e9n se sugiere llevar una botella de agua."
                        }
                      </div>
                    </AntdAccordionItem>
                    <AntdAccordionItem
                      className={classNames(
                        "__wab_instance",
                        sty.accordionItem__wuDuu
                      )}
                      id={"4"}
                      label2={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___8AMaI
                          )}
                        >
                          {
                            "\u00bfEs posible cambiar o cancelar mi reservaci\u00f3n?"
                          }
                        </div>
                      }
                      showArrow={false}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__mecxX
                        )}
                      >
                        {
                          "Las pol\u00edticas de cambios y cancelaciones dependen del operador con el que se haya hecho la reserva. Se recomienda revisar los t\u00e9rminos y condiciones al momento de la compra o contactarnos directamente para obtener m\u00e1s informaci\u00f3n."
                        }
                      </div>
                    </AntdAccordionItem>
                    <AntdAccordionItem
                      className={classNames(
                        "__wab_instance",
                        sty.accordionItem__eu9Ih
                      )}
                      id={"5"}
                      label2={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___9XM48
                          )}
                        >
                          {
                            "\u00bfExisten opciones de recorrido en ingl\u00e9s?"
                          }
                        </div>
                      }
                      showArrow={false}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___8Fyai
                        )}
                      >
                        {
                          "S\u00ed, algunos itinerarios y servicios est\u00e1n disponibles en ingl\u00e9s para facilitar la experiencia de los visitantes extranjeros."
                        }
                      </div>
                    </AntdAccordionItem>
                    <AntdAccordionItem
                      className={classNames(
                        "__wab_instance",
                        sty.accordionItem___0Cvve
                      )}
                      id={"6"}
                      label2={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__fpKW
                          )}
                        >
                          {
                            "\u00bfC\u00f3mo puedo reservar mi lugar en el Tequila Express?"
                          }
                        </div>
                      }
                      showArrow={false}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__oDgAg
                        )}
                      >
                        {
                          "Al seleccionar un itinerario, ser\u00e1s redirigido al sistema de reservaciones del operador correspondiente para completar tu compra."
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
