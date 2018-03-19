import restify from "restify";
import fetch from "isomorphic-fetch";
import React from "react";
import ReactDOMServer from "react-dom/server";

import { AppContainer } from 'react-hot-loader'
import { StaticRouter } from 'react-router-dom'

import App from "../src/App";

import renderPage from "./page";


process.title = "ssr-server";
global.fetch = fetch;

let server = restify.createServer();

server.listen(1345, function() {
    console.log('%s listening at %s', server.name, server.url);
});

const renderApp = (url) => {
    let context = {};
    return ReactDOMServer.renderToString(
        <AppContainer>
            <StaticRouter location={url} context={context}>
                <App/>
            </StaticRouter>
        </AppContainer>,
    )
};

server.get(/.?/, (req, res) => {
    console.log(req.path());
    let renderedApp = renderApp(req.path());
    res.sendRaw( renderPage(renderedApp) );
});