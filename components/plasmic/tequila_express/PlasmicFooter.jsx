// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uEWT1C6ySrjtSMWJntBego
// Component: Iz_Y_kKZMHTD
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { useScreenVariants as useScreenVariantsraGa2MJbEFd } from "../website_starter/PlasmicGlobalVariant__Screen"; // plasmic-import: RaGa2M-JbEFd/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "../website_starter/plasmic.module.css"; // plasmic-import: uEWT1C6ySrjtSMWJntBego/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: Iz_Y_kKZMHTD/css
import FacebookLogoFillSvgIcon from "./icons/PlasmicIcon__FacebookLogoFillSvg"; // plasmic-import: hpSkrGRlYZy4/icon
import InstagramLogoFillSvgIcon from "./icons/PlasmicIcon__InstagramLogoFillSvg"; // plasmic-import: QNAuphGqDTWh/icon
import TiktokLogoFillSvgIcon from "./icons/PlasmicIcon__TiktokLogoFillSvg"; // plasmic-import: p7v8uldEwDCJ/icon

createPlasmicElementProxy;

export const PlasmicFooter__VariantProps = new Array();

export const PlasmicFooter__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFooter__RenderFunc(props) {
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
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsraGa2MJbEFd()
  });
  return (
    <div
      data-plasmic-name={"footer"}
      data-plasmic-override={overrides.footer}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.footer
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__spqza)}>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__nY9Yh)}
        >
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__x13Zz)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"160px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tequila_express/images/logoTequilaExpressWhite1Png.png",
              fullWidth: 237,
              fullHeight: 36,
              aspectRatio: undefined
            }}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__eHCqZ
            )}
          >
            {"Un viaje inolvidable a bordo\ndel tren tur\u00edstico a Tequila."}
          </div>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__dcZUj)}
          >
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__xG0C
              )}
              component={Link}
              href={
                "https://www.facebook.com/tequilaexpressoficial?mibextid=ZbWKwL"
              }
              platform={"nextjs"}
              target={"_blank"}
            >
              <FacebookLogoFillSvgIcon
                className={classNames(projectcss.all, sty.svg__cMipZ)}
                role={"img"}
              />
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__sIgst
              )}
              component={Link}
              href={
                "https://www.instagram.com/tequilaexpress?igsh=YnltaTlhZGx5YzV1"
              }
              platform={"nextjs"}
              target={"_blank"}
            >
              <InstagramLogoFillSvgIcon
                className={classNames(projectcss.all, sty.svg__tXwXa)}
                role={"img"}
              />
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__isyO5
              )}
              component={Link}
              href={
                "https://www.tiktok.com/@tequilaexpressoficial?_t=8pgrEmFACwg&_r=1"
              }
              platform={"nextjs"}
              target={"_blank"}
            >
              <TiktokLogoFillSvgIcon
                className={classNames(projectcss.all, sty.svg__t7Gh)}
                role={"img"}
              />
            </PlasmicLink__>
          </Stack__>
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__htcdu)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__uwbZo
            )}
          >
            {"Links R\u00e1pidos"}
          </div>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__g46B1)}
          >
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__jrmPx
              )}
              component={Link}
              href={`/`}
              platform={"nextjs"}
            >
              {"Inicio"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__pOtbK
              )}
              component={Link}
              href={`/nosotros`}
              platform={"nextjs"}
            >
              {"Sobre Nosotros"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___6PGu
              )}
              component={Link}
              href={`/contacto`}
              platform={"nextjs"}
            >
              {"Contacto"}
            </PlasmicLink__>
          </Stack__>
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__nJUk)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__e7Nhb
            )}
          >
            {"Recorridos"}
          </div>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__pltal)}
          >
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__sesRf
              )}
              component={Link}
              href={`/recorridos/grupo-mexico-transportes`}
              platform={"nextjs"}
            >
              {"Grupo M\u00e9xico Transportes"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__lOp6Y
              )}
              component={Link}
              href={`/recorridos/camara-comercio-gdl`}
              platform={"nextjs"}
            >
              {"C\u00e1mara de Comercio de Guadalajara"}
            </PlasmicLink__>
          </Stack__>
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__sMjTa)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__miWPd
            )}
          >
            {"Legales"}
          </div>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__goylw)}
          >
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__pTYo
              )}
              component={Link}
              href={`/privacidad`}
              platform={"nextjs"}
            >
              {"Aviso de Privacidad"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__uh97L
              )}
              component={Link}
              href={`/terminos`}
              platform={"nextjs"}
            >
              {"T\u00e9rminos y Condiciones"}
            </PlasmicLink__>
          </Stack__>
        </Stack__>
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__ynpfu)}>
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__iaELh)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"104px"}
          loading={"lazy"}
          src={{
            src: "/plasmic/tequila_express/images/gpoiMx1Png.png",
            fullWidth: 209,
            fullHeight: 41,
            aspectRatio: undefined
          }}
        />

        {(
          hasVariant(globalVariants, "screen", "mobile")
            ? true
            : hasVariant(globalVariants, "screen", "tablet")
            ? true
            : false
        ) ? (
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__d5CS)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"104px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tequila_express/images/gpoiMx1Png.png",
              fullWidth: 209,
              fullHeight: 41,
              aspectRatio: undefined
            }}
          />
        ) : null}
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__alwPc)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"150px"}
          loading={"lazy"}
          src={{
            src: "/plasmic/tequila_express/images/capa1Png.png",
            fullWidth: 293,
            fullHeight: 81,
            aspectRatio: undefined
          }}
        />

        {(hasVariant(globalVariants, "screen", "tablet") ? true : false) ? (
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__chyP)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"125px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tequila_express/images/capa1Png.png",
              fullWidth: 293,
              fullHeight: 81,
              aspectRatio: undefined
            }}
          />
        ) : null}
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__tFgH0)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"124px"}
          loading={"lazy"}
          src={{
            src: "/plasmic/tequila_express/images/gobEdo11Png.png",
            fullWidth: 249,
            fullHeight: 81,
            aspectRatio: undefined
          }}
        />

        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__r72Tt)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"78px"}
          loading={"lazy"}
          src={{
            src: "/plasmic/tequila_express/images/logoJaliscoEsMexicoBlancoPng.png",
            fullWidth: 156,
            fullHeight: 51,
            aspectRatio: undefined
          }}
        />

        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__gBk0V)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"87px"}
          loading={"lazy"}
          src={{
            src: "/plasmic/tequila_express/images/ofvc1Png.png",
            fullWidth: 175,
            fullHeight: 101,
            aspectRatio: undefined
          }}
        />

        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__ycf3C)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"85px"}
          loading={"lazy"}
          src={{
            src: "/plasmic/tequila_express/images/logoGdlGdlBcoPng.png",
            fullWidth: 171,
            fullHeight: 71,
            aspectRatio: undefined
          }}
        />

        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__iLjDu)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"105px"}
          loading={"lazy"}
          src={{
            src: "/plasmic/tequila_express/images/turismoPng.png",
            fullWidth: 210,
            fullHeight: 81,
            aspectRatio: undefined
          }}
        />
      </div>
      {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
        <div className={classNames(projectcss.all, sty.freeBox__e6AOq)}>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img___98HOz)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"124px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tequila_express/images/gobEdo11Png.png",
              fullWidth: 249,
              fullHeight: 81,
              aspectRatio: undefined
            }}
          />

          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__yp7Ve)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"78px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tequila_express/images/logoJaliscoEsMexicoBlancoPng.png",
              fullWidth: 156,
              fullHeight: 51,
              aspectRatio: undefined
            }}
          />

          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__hE7Lc)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"78px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tequila_express/images/logoJaliscoEsMexicoBlancoPng.png",
              fullWidth: 156,
              fullHeight: 51,
              aspectRatio: undefined
            }}
          />

          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__heQgj)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"87px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tequila_express/images/ofvc1Png.png",
              fullWidth: 175,
              fullHeight: 101,
              aspectRatio: undefined
            }}
          />

          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__hsQmI)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"85px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tequila_express/images/logoGdlGdlBcoPng.png",
              fullWidth: 171,
              fullHeight: 71,
              aspectRatio: undefined
            }}
          />

          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__oabF0)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"105px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tequila_express/images/turismoPng.png",
              fullWidth: 210,
              fullHeight: 81,
              aspectRatio: undefined
            }}
          />

          <PlasmicImg__
            alt={""}
            className={classNames(sty.img___4RrF9)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tequila_express/images/camaradc1Png.png",
              fullWidth: 199,
              fullHeight: 71,
              aspectRatio: undefined
            }}
          />

          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__p5LtH)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"104px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tequila_express/images/gpoiMx1Png.png",
              fullWidth: 209,
              fullHeight: 41,
              aspectRatio: undefined
            }}
          />
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "tablet") ? true : false) ? (
        <div className={classNames(projectcss.all, sty.freeBox___9Ftk4)}>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__fe5Y3)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"124px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tequila_express/images/gobEdo11Png.png",
              fullWidth: 249,
              fullHeight: 81,
              aspectRatio: undefined
            }}
          />

          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__a3Km5)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"78px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tequila_express/images/logoJaliscoEsMexicoBlancoPng.png",
              fullWidth: 156,
              fullHeight: 51,
              aspectRatio: undefined
            }}
          />

          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__yTYrB)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"87px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tequila_express/images/ofvc1Png.png",
              fullWidth: 175,
              fullHeight: 101,
              aspectRatio: undefined
            }}
          />

          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__sdnLy)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"87px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tequila_express/images/ofvc1Png.png",
              fullWidth: 175,
              fullHeight: 101,
              aspectRatio: undefined
            }}
          />

          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__qkbsa)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"85px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tequila_express/images/logoGdlGdlBcoPng.png",
              fullWidth: 171,
              fullHeight: 71,
              aspectRatio: undefined
            }}
          />

          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__khtuh)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"105px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tequila_express/images/turismoPng.png",
              fullWidth: 210,
              fullHeight: 81,
              aspectRatio: undefined
            }}
          />
        </div>
      ) : null}
      {(
        hasVariant(globalVariants, "screen", "mobile")
          ? true
          : hasVariant(globalVariants, "screen", "tablet")
          ? true
          : false
      ) ? (
        <div className={classNames(projectcss.all, sty.freeBox__a5Wk)}>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__swi7)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"124px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tequila_express/images/gobEdo11Png.png",
              fullWidth: 249,
              fullHeight: 81,
              aspectRatio: undefined
            }}
          />

          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__vjAUz)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"78px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tequila_express/images/logoJaliscoEsMexicoBlancoPng.png",
              fullWidth: 156,
              fullHeight: 51,
              aspectRatio: undefined
            }}
          />

          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__aPgP2)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"87px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tequila_express/images/ofvc1Png.png",
              fullWidth: 175,
              fullHeight: 101,
              aspectRatio: undefined
            }}
          />

          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__cplT)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"105px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tequila_express/images/turismoPng.png",
              fullWidth: 210,
              fullHeight: 81,
              aspectRatio: undefined
            }}
          />

          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__ztiO6)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tequila_express/images/camaradc1Png.png",
              fullWidth: 199,
              fullHeight: 71,
              aspectRatio: undefined
            }}
          />

          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__fLKwI)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"104px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/tequila_express/images/gpoiMx1Png.png",
              fullWidth: 209,
              fullHeight: 41,
              aspectRatio: undefined
            }}
          />
        </div>
      ) : null}
      <div
        data-plasmic-name={"divider"}
        data-plasmic-override={overrides.divider}
        className={classNames(projectcss.all, sty.divider)}
      />

      <div
        data-plasmic-name={"copyright"}
        data-plasmic-override={overrides.copyright}
        className={classNames(projectcss.all, sty.copyright)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__olCjx
          )}
        >
          {"\u00a9 Tequila Express 2024"}
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  footer: ["footer", "divider", "copyright"],
  divider: ["divider"],
  copyright: ["copyright"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "footer") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("footer"),
  {
    // Helper components rendering sub-elements
    divider: makeNodeComponent("divider"),
    copyright: makeNodeComponent("copyright"),
    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
