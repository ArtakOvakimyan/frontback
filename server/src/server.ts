import {render} from "./render";

const express = require( 'express' );
const fs = require( 'fs' );
const path = require( 'path' );
const React = require( 'react' );
const ReactDOMServer = require( 'react-dom/server' );
const { StaticRouter, matchPath } = require( 'react-router-dom' );

const app = express();
//const routes = require( './routes' );

app.get( /\.(js|map|ico|css)$/, express.static( path.resolve( __dirname, '../../build' ) ) );

// for any other requests, send `index.html` as a response
app.get( '/', async ( req: any, res: any ) => {
    // const matchRoute = routes.find(route => matchPath( req.originalUrl, route ) );

    // let componentData = null;
    // if( typeof matchRoute.component.fetchData === 'function' ) {
    //     componentData = await matchRoute.component.fetchData();
    // }

    // let indexHTML = fs.readFileSync( path.resolve( __dirname, '../dist/index.html' ), {
    //     encoding: 'utf8',
    // } );

    // let appHTML = ReactDOMServer.renderToString(<App />);
    // indexHTML = indexHTML.replace( '<div id="root"></div>', `<div id="root">${ appHTML }</div>` );
    // indexHTML = indexHTML.replace(
    //     'var initial_state = null;',
    //     `var initial_state = ${ JSON.stringify( componentData ) };`
    // );

    let indexHTML = render();

    res.contentType('text/html');
    res.status(200);

    return res.send(indexHTML);
} );

app.listen( '9000', () => {
    console.log( 'Express server started at http://localhost:9000' );
} );