import React from "react";
import registerComponent from "@plasmicapp/host/registerComponent";
import { Anchor as AntdAnchor } from "antd";

export const Anchor = ({
    ...props
}) => {

    return <AntdAnchor
        {...props}
    />;
};

export const anchorMeta = {
    name: "Anchor",
    displayName: "Anchor",
    props: {
        items : {
            type : "array",
            defaultValue : [],
        },
        offsetTop : {
            type : "number",
            defaultValue : 0,
        },
        targetOffset : {
            type : "number",
            defaultValue : 0,
        },
    },
    importPath: "./components/registerAnchor",
    importName: "Anchor",
};

export function registerAnchor(
    loader,
    customAnchorMeta,
) {
    const doRegisterComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(Anchor, customAnchorMeta ?? anchorMeta);
};