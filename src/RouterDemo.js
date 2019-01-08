import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import ReduxDemo from './ReduxDemo';
export default class RouterDemo extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div> Welcome to Router sample</div>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/ReduxDemo'>ReduxDemo</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path={'/'} Component={Home}></Route>
                        <Route exact path={'/ReduxDemo'} Component={ReduxDemo}></Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}