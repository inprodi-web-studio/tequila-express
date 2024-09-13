// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function TiktokLogoFillSvgIcon(props) {
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
          "M232 80v40a8 8 0 01-8 8 103.25 103.25 0 01-48-11.71V156a76 76 0 01-152 0c0-36.9 26.91-69.52 62.6-75.88A8 8 0 0196 88v42.69a8 8 0 01-4.57 7.23A20 20 0 10120 156V24a8 8 0 018-8h40a8 8 0 018 8 48.05 48.05 0 0048 48 8 8 0 018 8z"
        }
      ></path>
    </svg>
  );
}

export default TiktokLogoFillSvgIcon;
/* prettier-ignore-end */
