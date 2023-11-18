import {App} from "../../../client/src/components/App";
import React from "react";
import path from "path";
import * as fs from "fs";
const ReactDOMServer = require( 'react-dom/server' );

export default function() {
    let indexHTML = fs.readFileSync(path.resolve(__dirname, '../../../build/index.html'), {
        encoding: 'utf8',
    });
    let appHTML = ReactDOMServer.renderToString(<App/>);
    indexHTML = indexHTML.replace('<div id="root"></div>', `<div id="root">${appHTML}</div>`);
    return indexHTML;
}