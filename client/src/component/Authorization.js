import React from "react";
import Login from './Login';
import Signup from './signup';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Authorization=()=>{
    return <div>
        <Router>
        <Switch>
            <Route path="/signup" component={Signup} />
            <Route component={Login} />
        </Switch>
    </Router>
    </div>
}


export default Authorization;