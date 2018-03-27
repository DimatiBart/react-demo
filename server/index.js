import path from 'path'
import Express from 'express'
import fetch from "isomorphic-fetch";
import React from "react";
import ReactDOMServer from "react-dom/server";

import { AppContainer } from 'react-hot-loader'
import { StaticRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'

import todoApp from "../src/reducer";
import {addTodo} from "../src/actions";

import App from "../src/App";

import renderPage from "./page";


process.title = "ssr-server";
global.fetch = fetch;

const app = Express();
const port = 3000;

app.use('/dest', Express.static('dest'));


const renderApp = (url) => {
    let context = {};

    let store = createStore(
        todoApp,
        applyMiddleware(reduxThunk)
    );

    store.dispatch(addTodo("refactor this mess"));

    let renderedApp = ReactDOMServer.renderToString(
        <Provider store={store}>
            <AppContainer>
                <StaticRouter location={url} context={context}>
                    <App/>
                </StaticRouter>
            </AppContainer>
        </Provider>
    );

    return renderPage(renderedApp, store.getState())
};

app.use((req, res) => {
    console.log(req.originalUrl);
    res.send(renderApp(req.originalUrl));
});

app.listen(port);