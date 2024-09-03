// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uEWT1C6ySrjtSMWJntBego
// Component: eAA_aT1s0SEU
import * as React from "react";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateStateOnChangeProp,
  generateStateValueProp,
  hasVariant,
  renderPlasmicSlot,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { Dialog } from "@plasmicpkgs/radix-ui";
import Button from "../../Button"; // plasmic-import: 4EG1uUDBEib2/component
import { SheetContent } from "@plasmicpkgs/radix-ui";
import { DialogTitle } from "@plasmicpkgs/radix-ui";
import { DialogClose } from "@plasmicpkgs/radix-ui";
import { useScreenVariants as useScreenVariantsraGa2MJbEFd } from "../website_starter/PlasmicGlobalVariant__Screen"; // plasmic-import: RaGa2M-JbEFd/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "../website_starter/plasmic.module.css"; // plasmic-import: uEWT1C6ySrjtSMWJntBego/projectcss
import sty from "./PlasmicDrawer.module.css"; // plasmic-import: eAA_aT1s0SEU/css

createPlasmicElementProxy;

export const PlasmicDrawer__VariantProps = new Array("noTrigger");

export const PlasmicDrawer__ArgProps = new Array(
  "open",
  "onOpenChange",
  "children",
  "slot",
  "trigger"
);

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDrawer__RenderFunc(props) {
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
        path: "dialog.open",
        type: "writable",
        variableType: "boolean",
        valueProp: "open",
        onChangeProp: "onOpenChange"
      },
      {
        path: "noTrigger",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noTrigger
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
    <Dialog
      data-plasmic-name={"dialog"}
      data-plasmic-override={overrides.dialog}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.dialog,
        { [sty.dialognoTrigger]: hasVariant($state, "noTrigger", "noTrigger") }
      )}
      defaultOpen={true}
      modal={hasVariant(globalVariants, "screen", "mobile") ? true : undefined}
      noContain={true}
      onOpenChange={generateStateOnChangeProp($state, ["dialog", "open"])}
      open={generateStateValueProp($state, ["dialog", "open"])}
      themeResetClass={classNames(
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens
      )}
      triggerSlot={
        (hasVariant($state, "noTrigger", "noTrigger") ? false : true)
          ? renderPlasmicSlot({
              defaultContents: (
                <Button
                  className={classNames("__wab_instance", sty.button__im6GI)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__d2967
                    )}
                  >
                    {"Show dialog"}
                  </div>
                </Button>
              ),

              value: args.trigger
            })
          : null
      }
    >
      <SheetContent
        data-plasmic-name={"drawerContent"}
        data-plasmic-override={overrides.drawerContent}
        className={classNames("__wab_instance", sty.drawerContent)}
        themeResetClass={classNames(
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          plasmic_antd_5_hostless_css.plasmic_tokens
        )}
      >
        <Stack__
          as={"div"}
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <DialogTitle
            data-plasmic-name={"dialogTitle"}
            data-plasmic-override={overrides.dialogTitle}
            className={classNames("__wab_instance", sty.dialogTitle)}
          >
            {renderPlasmicSlot({
              defaultContents: "Drawer title",
              value: args.children
            })}
          </DialogTitle>
          {renderPlasmicSlot({
            defaultContents: (
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__pEhIe)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__geUqr
                  )}
                >
                  {"You can insert drawer body content here in this slot."}
                </div>
              </Stack__>
            ),

            value: args.slot
          })}
        </Stack__>
        <DialogClose
          data-plasmic-name={"dialogClose"}
          data-plasmic-override={overrides.dialogClose}
          className={classNames("__wab_instance", sty.dialogClose)}
        />
      </SheetContent>
    </Dialog>
  );
}

const PlasmicDescendants = {
  dialog: ["dialog", "drawerContent", "freeBox", "dialogTitle", "dialogClose"],
  drawerContent: ["drawerContent", "freeBox", "dialogTitle", "dialogClose"],
  freeBox: ["freeBox", "dialogTitle"],
  dialogTitle: ["dialogTitle"],
  dialogClose: ["dialogClose"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicDrawer__ArgProps,
          internalVariantPropNames: PlasmicDrawer__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDrawer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "dialog") {
    func.displayName = "PlasmicDrawer";
  } else {
    func.displayName = `PlasmicDrawer.${nodeName}`;
  }
  return func;
}

export const PlasmicDrawer = Object.assign(
  // Top-level PlasmicDrawer renders the root element
  makeNodeComponent("dialog"),
  {
    // Helper components rendering sub-elements
    drawerContent: makeNodeComponent("drawerContent"),
    freeBox: makeNodeComponent("freeBox"),
    dialogTitle: makeNodeComponent("dialogTitle"),
    dialogClose: makeNodeComponent("dialogClose"),
    // Metadata about props expected for PlasmicDrawer
    internalVariantProps: PlasmicDrawer__VariantProps,
    internalArgProps: PlasmicDrawer__ArgProps
  }
);

export default PlasmicDrawer;
/* prettier-ignore-end */
