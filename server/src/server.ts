import { render } from './render';
import path from 'path';
import express from 'express';

const app = express();
//const routes = require( './routes' );

app.get(
    /\.(js|map|ico|css)$/,
    express.static(path.resolve(__dirname, '../../build'))
);

// for any other requests, send `index.html` as a response
app.get('*', async (req: express.Request, res: express.Response) => {
    // const matchRoute = routes.find(routes => matchPath( req.originalUrl, routes ) );

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

    const indexHTML = render(req);
    res.contentType('text/html');
    res.status(200);

    return res.send(indexHTML);
});

app.listen('9000', () => {
    console.log('Express server started at http://localhost:9000');
});
