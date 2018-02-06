import React from "react";
import ReactDom from "react-dom";
import { AppContainer } from 'react-hot-loader'
import App from "./App";

const render = () => {
    ReactDom.render(
        <AppContainer>
            <App name={"Hypecamp"}/>
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