import React from "react";

import { Route, Switch, Link } from 'react-router-dom';

import CurrentLocation from "./components/CurrentLocation";
import CurrentTime from "./components/CurrentTime";
import Links from "./components/Links";
import Wolf from "./components/Wolf";
import Rabbit from "./components/Rabbit";
import DisplayID from "./components/DisplayID";
import ChangeButtons from "./components/ChangeButtons";
import NotFound from "./components/NotFound";
import TodoApp from "./containers/TodoApp";

export default class App extends React.Component {
    render() {
        return (
            <div>
                {/*<Switch>*/}
                    <Route exact path="/" render={() => (
                        <div> Hello, boys and girls </div>
                    )}/>
                    <Route path="/:id" component={DisplayID}/>
                    <Route path="/location" component={CurrentLocation}/>
                    <Route path="/time" component={CurrentTime}/>
                    <Route path="/todo" component={TodoApp}/>
                    {/*<Route path="/zayac/" component={Rabbit}/>*/}
                    {/*<Route path="/volk/" component={Wolf}/>*/}
                    {/*<Route path="/zayac/volk/" render={() => (<p>Zayac + Volk</p>)}/>*/}
                    {/*<Route path="*" component={NotFound}/>*/}
                {/*</Switch>*/}
                <Links/>
                {/*<ChangeButtons/>*/}
            </div>
        )
    }
}