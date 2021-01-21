import React from "react";
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Forgot from "./Forgot";
import {Quiz} from './components/Quiz'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Cpp1 from './components/cpp/Cpp1'
import Java1 from './components/java/Java1'
import Python1 from './components/python/Python1'
import Nodejs1 from './components/nodejs/Nodejs1'
import Csharp1 from './components/csharp/Csharp1'
import Test from './Test'
import Test3 from './Test3'

function App(){
    return(
      <Router>
        <Switch>
            <Route path = "/" exact component = {Home} />
            <Route path = "/Login" component = {Login} />
            <Route path = "/Register" component = {Register} />
            <Route path = "/Forgot" component = {Forgot} />
            {/* <Route path = "/Quiz" component = {sessionStorage.getItem("token") ? Quiz : Login} /> */}
            <Route path = "/Quiz" component = {Quiz} />
            <Route path = "/cpp" component = {Cpp1} />
            <Route path = "/python" component = {Python1} />
            <Route path = "/java" component = {Java1} />
            <Route path = "/Nodejs1" component = {Nodejs1} />
            <Route path = "/Csharp1" component = {Csharp1} />
            <Route path = "/test" component = {Test} />
            <Route path = "/test3" component = {Test3}/>
        </Switch>
      </Router>
    );
}
export default App;