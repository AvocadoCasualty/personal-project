import React from "react";
import {Switch, Route} from 'react-router-dom';
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import Results from "./components/Results";
import Userpage from "./components/Userpage";

export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/results' component={Results}/>
        <Route path='/user/:user_id' component={Userpage}/>
    </Switch>
)