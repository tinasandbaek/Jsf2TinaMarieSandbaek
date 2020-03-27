import React from "react";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import GameDetail from "./components/games/GameDetail";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import "./App.css";

function App() {
    return (
        <div className="container">
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/character/:id" component={GameDetail} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
