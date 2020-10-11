'use strict';

import React from "react";
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from "../App";
import {Management} from '../components/management/Management';
import {Authentication} from "./authentication/Authentication";
import {MapHome} from "./map/MapHome";
import { Products } from "./products/Products";
import {Dashboard} from "./dashboard/Dashboard";


export const Root = ( {store} ) => (
    <Provider store={store}>
    <Router>
        <Route exact path="/" component={App} />
        <Route exact path="/:uuid/management" component={Management}/>
        <Route exact path="/authentication" render={() => {
            return (<Authentication/>)
        }  }/>
        <Route exact path="/map" component={MapHome} />
        <Route exact path="/produits" component={Products} />
        <Route exact path="/dashboard" component={Dashboard}/>
    </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};
