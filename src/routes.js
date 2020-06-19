import React from "react";
import {Switch, Route} from 'react-router-dom';
import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";
import Results from "./components/Results/Results";
import Userpage from "./components/Userpage/Userpage";

export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/results' component={Results}/>
        <Route path='' component={Userpage}/>
    </Switch>
)