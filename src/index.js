import ReactDOM from "react-dom";
import Provider from 'context/provider';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import './assets/sass/main.scss';

import SiteLayout from "./layouts/Site.js";

const hist = createBrowserHistory();

function App(props) {

    return (
        <Provider>
            <Router history={hist}>
                <Switch>
                    <Route path="/" component={SiteLayout} />
                    <Redirect from="/" to="/home" />
                </Switch>
            </Router>
        </Provider>

    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
