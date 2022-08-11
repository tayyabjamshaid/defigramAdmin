/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// import AdminLayout from "layouts/Admin/Admin.js";
// import RTLLayout from "layouts/RTL/RTL.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
// import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";

// const root = ReactDOM.createRoot(document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";

// import "./index.css";
import App from "./App.js";
// import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./store";
ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
