import { MessageComponentType, ButtonStyle } from 'https://deno.land/x/harmony@v2.0.0-rc2/mod.ts';
import React from "https://esm.sh/react";
import { Component, Components } from './mod.tsx'

let d = [<Component type={MessageComponentType.Button} style={ButtonStyle.PRIMARY} label="test" customID="asd" options={[{ label: "test", value: "test" }]}/>,
        <Component type={MessageComponentType.Button} style={ButtonStyle.PRIMARY} label="test1" customID="asd"/>]

console.log(Components(MessageComponentType.Button, d));