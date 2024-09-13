// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FacebookLogoFillSvgIcon(props) {
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
          "M232 128a104.16 104.16 0 01-91.55 103.26 4 4 0 01-4.45-4V152h24a8 8 0 008-8.53 8.17 8.17 0 00-8.25-7.47H136v-24a16 16 0 0116-16h16a8 8 0 008-8.53 8.17 8.17 0 00-8.27-7.47H152a32 32 0 00-32 32v24H96a8 8 0 00-8 8.53 8.17 8.17 0 008.27 7.47H120v75.28a4 4 0 01-4.44 4 104.15 104.15 0 01-91.49-107.19c2-54 45.74-97.9 99.78-100A104.12 104.12 0 01232 128z"
        }
      ></path>
    </svg>
  );
}

export default FacebookLogoFillSvgIcon;
/* prettier-ignore-end */
