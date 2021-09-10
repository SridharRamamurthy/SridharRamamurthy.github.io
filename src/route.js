import React, { PureComponent } from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Documentation from "./doc/doc"
import Home from "./home"

class RoutesList extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/doc" component={Documentation} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default RoutesList