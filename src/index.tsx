import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { theme } from "./theme";
import { Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { history } from "core/history";

import { store } from "./redux/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Router history={history}>
                    <App />
                </Router>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
);
