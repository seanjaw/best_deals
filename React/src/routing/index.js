import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import Login from './login';
import Results from './results';

const Routes = () => {
    return (
        <Router>
            <div>
                <Route path="/" component={Nav} />
            </div>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/results" component={Results} />
                </Switch>
            </div>
        </Router>
    )
}

export default Routes;