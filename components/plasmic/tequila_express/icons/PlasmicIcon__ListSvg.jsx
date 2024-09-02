// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ListSvgIcon(props) {
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
          "M224 128a8 8 0 01-8 8H40a8 8 0 010-16h176a8 8 0 018 8zM40 72h176a8 8 0 000-16H40a8 8 0 000 16zm176 112H40a8 8 0 000 16h176a8 8 0 000-16z"
        }
      ></path>
    </svg>
  );
}

export default ListSvgIcon;
/* prettier-ignore-end */
