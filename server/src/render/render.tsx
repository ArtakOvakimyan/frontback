import { App } from '../../../client/src/components/App';
import React from 'react';
import path from 'path';
import * as fs from 'fs';
import { StaticRouter } from 'react-router-dom/server';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import userMock from '../../api/mock/userMock';
import { StaticContext } from '../../../client/src/context/context';

export default function (req: express.Request) {
    let indexHTML = fs.readFileSync(
        path.resolve(__dirname, '../../../build/index.html'),
        {
            encoding: 'utf8',
        }
    );
    const appData = { user: userMock, post: { private: true } };

    const appHTML = ReactDOMServer.renderToString(
        <StaticContext.Provider value={appData}>
            <StaticRouter location={req.url}>
                <App />
            </StaticRouter>
        </StaticContext.Provider>
    );
    indexHTML = indexHTML.replace(
        '<div id="root"></div>',
        `<div id="root">${appHTML}</div>`
    );
    indexHTML = indexHTML.replace(
        'var appData = null;',
        `var appData = ${JSON.stringify(appData)}`
    );

    return indexHTML;
}
