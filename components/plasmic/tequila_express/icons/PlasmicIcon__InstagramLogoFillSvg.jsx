// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function InstagramLogoFillSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 256 256"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M176 24H80a56.06 56.06 0 00-56 56v96a56.06 56.06 0 0056 56h96a56.06 56.06 0 0056-56V80a56.06 56.06 0 00-56-56zm-48 152a48 48 0 1148-48 48.05 48.05 0 01-48 48zm60-96a12 12 0 1112-12 12 12 0 01-12 12zm-28 48a32 32 0 11-32-32 32 32 0 0132 32z"
        }
      ></path>
    </svg>
  );
}

export default InstagramLogoFillSvgIcon;
/* prettier-ignore-end */
