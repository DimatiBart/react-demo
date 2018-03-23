import path from 'path'
import Express from 'express'
import fetch from "isomorphic-fetch";
import React from "react";
import ReactDOMServer from "react-dom/server";

import { AppContainer } from 'react-hot-loader'
import { StaticRouter } from 'react-router-dom'

import App from "../src/App";

import renderPage from "./page";


process.title = "ssr-server";
global.fetch = fetch;

const app = Express();
const port = 3000;

app.use('/dest', Express.static('dest'));


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

app.use((req, res) => {
    console.log(req.originalUrl);
    let renderedApp = renderApp(req.originalUrl);
    res.send(renderPage(renderedApp));
});

app.listen(port);