import React, { useEffect } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import App from "./pages/App";
import NotFound from "./pages/NotFound";
import StartPage from "./pages/StartPage";
import ChangeLocation from "./pages/ChangeLocation";

function AppRooot(props) {
    useEffect(() => {
        if (props.location) {
            window.scrollTo(0, 0);
        }
    }, [props.location])

    return (
        <Switch>
            <Route path="/" component={StartPage} exact />
            <Route path="/home" component={App} />
            <Route path="/change-location" component={ChangeLocation} />
            <Route path="*" component={NotFound} exact />
        </Switch>
    );
}

export default withRouter(AppRooot);
