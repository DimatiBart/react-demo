import React from "react";
import ReactDom from "react-dom";
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux'

import todoApp from "./reducer";

import App from "./App";

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
    compose;

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

let store = createStore(
    todoApp,
    preloadedState,
    composeEnhancers(applyMiddleware(reduxThunk))
);

const render = () => {
    ReactDom.render(
        <Provider store={store}>
            <AppContainer>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </AppContainer>
        </Provider>
        ,
        document.getElementById("app")
    )
};

render();


if (module.hot) {
    module.hot.accept('./App', () => {
        render();
    })
}