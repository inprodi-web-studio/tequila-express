// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uEWT1C6ySrjtSMWJntBego
import * as React from "react";
import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider";
import { EmbedCss } from "@plasmicpkgs/plasmic-embed-css";

export default function GlobalContextsProvider(props) {
  const { children, antdConfigProviderProps, embedCssProps } = props;
  return (
    <AntdConfigProvider
      {...antdConfigProviderProps}
      borderRadius={
        antdConfigProviderProps && "borderRadius" in antdConfigProviderProps
          ? antdConfigProviderProps.borderRadius
          : 6
      }
      colorBgBase={
        antdConfigProviderProps && "colorBgBase" in antdConfigProviderProps
          ? antdConfigProviderProps.colorBgBase
          : "#ffffff"
      }
      colorError={
        antdConfigProviderProps && "colorError" in antdConfigProviderProps
          ? antdConfigProviderProps.colorError
          : "#ff4d4f"
      }
      colorInfo={
        antdConfigProviderProps && "colorInfo" in antdConfigProviderProps
          ? antdConfigProviderProps.colorInfo
          : "#1677ff"
      }
      colorPrimary={
        antdConfigProviderProps && "colorPrimary" in antdConfigProviderProps
          ? antdConfigProviderProps.colorPrimary
          : "#C96A5F"
      }
      colorSuccess={
        antdConfigProviderProps && "colorSuccess" in antdConfigProviderProps
          ? antdConfigProviderProps.colorSuccess
          : "#52c41a"
      }
      colorWarning={
        antdConfigProviderProps && "colorWarning" in antdConfigProviderProps
          ? antdConfigProviderProps.colorWarning
          : "#faad14"
      }
      controlHeight={
        antdConfigProviderProps && "controlHeight" in antdConfigProviderProps
          ? antdConfigProviderProps.controlHeight
          : 32
      }
      defaultDark={
        antdConfigProviderProps && "defaultDark" in antdConfigProviderProps
          ? antdConfigProviderProps.defaultDark
          : false
      }
      lineWidth={
        antdConfigProviderProps && "lineWidth" in antdConfigProviderProps
          ? antdConfigProviderProps.lineWidth
          : 1
      }
      loadingText={
        antdConfigProviderProps && "loadingText" in antdConfigProviderProps
          ? antdConfigProviderProps.loadingText
          : undefined
      }
      removeLoading={
        antdConfigProviderProps && "removeLoading" in antdConfigProviderProps
          ? antdConfigProviderProps.removeLoading
          : undefined
      }
      sizeStep={
        antdConfigProviderProps && "sizeStep" in antdConfigProviderProps
          ? antdConfigProviderProps.sizeStep
          : 4
      }
      sizeUnit={
        antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps
          ? antdConfigProviderProps.sizeUnit
          : 4
      }
      themeStyles={
        antdConfigProviderProps && "themeStyles" in antdConfigProviderProps
          ? antdConfigProviderProps.themeStyles
          : true
          ? {
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "1.5",
              color: "#535353",
              letterSpacing: "normal"
            }
          : undefined
      }
      wireframe={
        antdConfigProviderProps && "wireframe" in antdConfigProviderProps
          ? antdConfigProviderProps.wireframe
          : false
      }
    >
      <EmbedCss
        {...embedCssProps}
        css={
          embedCssProps && "css" in embedCssProps
            ? embedCssProps.css
            : '.ant-collapse-header {\n    border: 1px solid rgba(14, 28, 43, 0.30);\n    padding: 18px !important;\n    border-radius: 20px !important;\n}\n\n.ant-collapse-header[aria-expanded="true"] {\n    border-bottom: 0 !important;\n    border-radius: 20px 20px 0 0  !important;\n}\n\n.ant-collapse-content.ant-collapse-content-active .ant-collapse-content-box {\n    padding: 0 18px 18px 18px !important;\n    border: 1px solid rgba(14, 28, 43, 0.30);\n    border-top: none;\n    border-radius: 0 0 20px 20px;\n}\n\n.ant-collapse-item {\n    margin-bottom: 16px;\n}\n\na {\n  cursor: pointer;\n}\n\n.ant-anchor-link.ant-anchor-link-active a {\n    color: red !important;\n}\n\nspan.ant-anchor-ink.ant-anchor-ink-visible {\n  background-color: red !important;\n}\n\nli.ant-dropdown-menu-item span {\n    font-size: 14px;\n    font-weight: 600;\n    color: #0E1C2B;\n}\n\n.ant-modal.PlasmicMainHeader_modal__WdQeN .ant-modal-content {\n    border-radius: 0 !important;\n    height: 100vh;\n}\n\n.ant-modal.PlasmicMainHeader_modal__WdQeN {\n  top: 0 !important;\n  margin: 0;\n  padding: 0 !important;\n}'
        }
      >
        {children}
      </EmbedCss>
    </AntdConfigProvider>
  );
}
