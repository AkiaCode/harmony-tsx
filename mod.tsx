import { MessageComponentType, ButtonStyle } from 'https://deno.land/x/harmony@v2.0.0-rc2/mod.ts';
import React, { FunctionComponent } from "https://esm.sh/react";

interface Component {
    type: MessageComponentType,
    style: ButtonStyle,
    label: String,
    customID: String,
    url?: String,
    options?: { label: String, value: String }[]
}

interface Components {
    type: MessageComponentType,
    components: Component[]
}

export const Component: FunctionComponent<Component> = (props)  => {
    const { type, style, label, customID, url, options } = props;
    return <> {{
        type,
        style,
        label,
        customID,
        url,
        options
    }} </>
}

export const Components = (type: MessageComponentType, component: any[]): Components => {
    let components: any = [];
    component.forEach(r=> components.push(r.props))

    return {
        type,
        components
    }
}