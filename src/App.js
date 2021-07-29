import React from 'react';
import "./App.css"
import MainSignUp from "./component/SignUp/MainSignUp"
import Login from './component/LoginUser/Login';
import QRCode from "./component/Qrcode"
import Home from "./component/Home"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                    <MainSignUp/>
                    </Route>
                    <Route path="/login">
                    <Login/>
                    </Route>

                    <Route path="/home">
                    <Home/>
                    </Route>
                 </Switch>
            </div>
        </Router>
    )
}

