import React from "react";
import {render} from "react-dom";
import { AppContainer } from 'react-hot-loader'
import App from "./App";

render(
    <AppContainer>
        <App name={"Hypecamp"}/>
    </AppContainer>,
    document.getElementById("app")
);

if (module.hot) {
    module.hot.accept('./App', () => {
        render(App)
    })
}