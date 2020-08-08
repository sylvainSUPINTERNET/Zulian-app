'use strict';

import React from "react";
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from "../App";

export const Root = ( {store} ) => (
    <Provider store={store}>
    <Router>
        <Route path="/" component={App} />
    </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};
