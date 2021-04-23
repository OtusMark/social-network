import React from 'react';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from "./App";
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/theme";
import { GlobalStyles } from './styles/GlobalStyles';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <App/>
            </ThemeProvider>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();