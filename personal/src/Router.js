import React from 'react';
import { Route } from 'react-router-dom';

import home from './FrontPage/FrontPage';
import web from './WebDevelopment/WebDevelopment';
import software from './Software/Software';
import contact from './Contact/Contact';

var Router = (props) => {
    if ( props.component === "Home" ) {
        return <Route exact path={props.path} component={home}/>
    } else if ( props.component === "Web" ) {
        return <Route exact path={props.path} component={web}/>
    } else if ( props.component === "Software" ) {
        return <Route exact path={props.path} component={software}/>
    } else if ( props.component === "Contact" ) {
        return <Route exact path={props.path} component={contact}/>
    }
}

export default Router;