import React from "react";
import ReactDom from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { AppContainer } from 'react-hot-loader'
import App from "./containers/App";
import todoApp from "./reducers/index"

let store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const render = () => {
    ReactDom.render(
        <Provider store={store}>
            <AppContainer>
                <App/>
            </AppContainer>
        </Provider>,
        document.getElementById("app")
    )
};

render();


if (module.hot) {
    module.hot.accept('./containers/App', () => {
        render();
    })
}