// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CaretDownFillSvgIcon(props) {
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
          "M213.66 101.66l-80 80a8 8 0 01-11.32 0l-80-80A8 8 0 0148 88h160a8 8 0 015.66 13.66z"
        }
      ></path>
    </svg>
  );
}

export default CaretDownFillSvgIcon;
/* prettier-ignore-end */
