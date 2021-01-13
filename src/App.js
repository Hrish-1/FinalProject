import React from "react";
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Forgot from "./Forgot";

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App(){
    return(
      <Router>
        <Switch>
            <Route path = "/" exact component = {Home} />
            <Route path = "/Login" component = {Login} />
            <Route path = "/Register" component = {Register} />
            <Route path = "/Forgot" component = {Forgot} />
        </Switch>
      </Router>  
        
    );
}
export default App;