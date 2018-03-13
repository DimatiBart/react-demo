import React from "react";
import ReactDom from "react-dom";
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'

import App from "./App";

const render = () => {
    ReactDom.render(
        <AppContainer>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </AppContainer>,
        document.getElementById("app")
    )
};

render();


if (module.hot) {
    module.hot.accept('./App', () => {
        render();
    })
}