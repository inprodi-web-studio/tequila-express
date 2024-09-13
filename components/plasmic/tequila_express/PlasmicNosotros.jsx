// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uEWT1C6ySrjtSMWJntBego
// Component: KyABfMWqdgdG
import * as React from "react";
import Head from "next/head";
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
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import MainHeader from "../../MainHeader"; // plasmic-import: wtnE0On9QToy/component
import Button2 from "../../Button2"; // plasmic-import: 48nEEeCzck2s/component
import Footer from "../../Footer"; // plasmic-import: Iz_Y_kKZMHTD/component
import { useScreenVariants as useScreenVariantsraGa2MJbEFd } from "../website_starter/PlasmicGlobalVariant__Screen"; // plasmic-import: RaGa2M-JbEFd/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "../website_starter/plasmic.module.css"; // plasmic-import: uEWT1C6ySrjtSMWJntBego/projectcss
import sty from "./PlasmicNosotros.module.css"; // plasmic-import: KyABfMWqdgdG/css

createPlasmicElementProxy;

export const PlasmicNosotros__VariantProps = new Array();

export const PlasmicNosotros__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNosotros__RenderFunc(props) {
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
        <title key="title">{PlasmicNosotros.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicNosotros.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicNosotros.pageMetadata.title}
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
                  sty.text___3VcK1
                )}
              >
                {"Convierte el trayecto en parte de tu destino"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___78Lar
                )}
              >
                {
                  "Descubre la esencia de Jalisco entre rieles y ra\u00edces. Emprende un viaje inolvidable a bordo del tren tur\u00edstico a Tequila."
                }
              </div>
            </Stack__>
          </div>
          <div
            data-plasmic-name={"quote"}
            data-plasmic-override={overrides.quote}
            className={classNames(projectcss.all, sty.quote)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___44Xtd
              )}
            >
              {
                "Sum\u00e9rgete en un pintoresco paisaje de interminables campos de agave, con un trayecto que crea un puente entre el pasado y el presente, permiti\u00e9ndote conectar con la esencia misma de Tequila desde el inicio de tu viaje."
              }
            </div>
          </div>
          <Stack__
            as={"div"}
            data-plasmic-name={"banner2"}
            data-plasmic-override={overrides.banner2}
            hasGap={true}
            className={classNames(projectcss.all, sty.banner2)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__j8ML)}
            >
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img___6Wgoo)}
                displayHeight={
                  hasVariant(globalVariants, "screen", "mobile")
                    ? "250px"
                    : hasVariant(globalVariants, "screen", "tablet")
                    ? "400px"
                    : "550px"
                }
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={
                  hasVariant(globalVariants, "screen", "tablet")
                    ? "100%"
                    : "50%"
                }
                loading={"lazy"}
                src={{
                  src: "/plasmic/tequila_express/images/rectangle37Jpg2.jpg",
                  fullWidth: 1186,
                  fullHeight: 794,
                  aspectRatio: undefined
                }}
              />

              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__j97Tg)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___9HF
                  )}
                >
                  {"Tequila Express integra \nlas experiencias ferroviarias"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__edM0M
                  )}
                >
                  {
                    "Conoce y compara todas las alternativas de tren con destino a Tequila en el mercado. Tequila Express es el sitio oficial en el que el Gobierno del Estado de Jalisco y la iniciativa privada se unen para que puedas conocer los itinerarios y la oferta diferenciada de los diversos operadores por la ruta del tequila."
                  }
                </div>
                <Button2
                  data-plasmic-name={"button2"}
                  data-plasmic-override={overrides.button2}
                  className={classNames("__wab_instance", sty.button2)}
                  label={"Conocer Recorridos"}
                  onClick={async () => {
                    const $steps = {};
                    $steps["goToRecorridos"] = true
                      ? (() => {
                          const actionArgs = { destination: "/#recorridos" };
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
                      $steps["goToRecorridos"] != null &&
                      typeof $steps["goToRecorridos"] === "object" &&
                      typeof $steps["goToRecorridos"].then === "function"
                    ) {
                      $steps["goToRecorridos"] = await $steps["goToRecorridos"];
                    }
                  }}
                />
              </Stack__>
            </Stack__>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__jO6Iu)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__eFXkH
              )}
            >
              {"Una aut\u00e9ntica experiencia mexicana"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__tGsZ
              )}
            >
              {
                "Sigue la ruta del tequila en esta aventura en tren que te llevar\u00e1 a conocer la historia de una de las bebidas m\u00e1s emblem\u00e1ticas del pa\u00eds desde el pueblo m\u00e1gico que la vio nacer. Un viaje lleno de sabores, cultura y paisaje agavero."
              }
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            data-plasmic-name={"banner3"}
            data-plasmic-override={overrides.banner3}
            hasGap={true}
            className={classNames(projectcss.all, sty.banner3)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__ljjvZ)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__ylzQy)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__eZDbV
                  )}
                >
                  {"Tu Slow Travel\nen M\u00e9xico"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ih9Rp
                  )}
                >
                  {
                    "En Tequila Express promovemos el turismo experiencial y sostenible; preservando el patrimonio cultural de Tequila e invitando a cada persona que sube a bordo a vivir una inmersi\u00f3n profunda en la riqueza cultural y natural del destino durante cada kil\u00f3metro."
                  }
                </div>
              </Stack__>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img___08BtU)}
                displayHeight={
                  hasVariant(globalVariants, "screen", "mobile")
                    ? "250px"
                    : hasVariant(globalVariants, "screen", "tablet")
                    ? "400px"
                    : "550px"
                }
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={
                  hasVariant(globalVariants, "screen", "tablet")
                    ? "100%"
                    : "50%"
                }
                loading={"lazy"}
                src={{
                  src: "/plasmic/tequila_express/images/rectangle37Jpg3.jpg",
                  fullWidth: 1186,
                  fullHeight: 794,
                  aspectRatio: undefined
                }}
              />
            </Stack__>
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
    "quote",
    "banner2",
    "button2",
    "banner3",
    "footer"
  ],

  mainHeader: ["mainHeader"],
  mainBanner: ["mainBanner", "banner"],
  banner: ["banner"],
  quote: ["quote"],
  banner2: ["banner2", "button2"],
  button2: ["button2"],
  banner3: ["banner3"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNosotros__ArgProps,
          internalVariantPropNames: PlasmicNosotros__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNosotros__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "mainSection") {
    func.displayName = "PlasmicNosotros";
  } else {
    func.displayName = `PlasmicNosotros.${nodeName}`;
  }
  return func;
}

export const PlasmicNosotros = Object.assign(
  // Top-level PlasmicNosotros renders the root element
  makeNodeComponent("mainSection"),
  {
    // Helper components rendering sub-elements
    mainHeader: makeNodeComponent("mainHeader"),
    mainBanner: makeNodeComponent("mainBanner"),
    banner: makeNodeComponent("banner"),
    quote: makeNodeComponent("quote"),
    banner2: makeNodeComponent("banner2"),
    button2: makeNodeComponent("button2"),
    banner3: makeNodeComponent("banner3"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicNosotros
    internalVariantProps: PlasmicNosotros__VariantProps,
    internalArgProps: PlasmicNosotros__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Nosotros",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNosotros;
/* prettier-ignore-end */
