import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";
import Login from "components/Login/Login";

export default function App() {
  return (
    <ThemeContextWrapper>
      <BackgroundColorWrapper>
        <BrowserRouter forceRefresh={true}>
          <Switch>
            <Route
              path="/admin"
              render={(props) => <AdminLayout {...props} />}
            />
            <Route path="/signIn" render={(props) => <Login {...props} />} />

            <Route path="/rtl" render={(props) => <RTLLayout {...props} />} />
            <Redirect from="/" to="/admin/dashboard" />
          </Switch>
        </BrowserRouter>
      </BackgroundColorWrapper>
    </ThemeContextWrapper>
  );
}
