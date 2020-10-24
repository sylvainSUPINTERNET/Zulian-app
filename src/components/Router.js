'use strict';

import React, {useEffect} from "react";
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Redirect, useHistory } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from "../App";
import {Management} from '../components/management/Management';
import {Authentication} from "./authentication/Authentication";
import {MapHome} from "./map/MapHome";
import { Products } from "./products/Products";
import {Dashboard} from "./dashboard/Dashboard";
import {auth as authentication} from "../api/authentication/authentication";





export const Root = ( {store} ) => {
    const verifyRole = async (roleName) => {
        try {
            const resp = await authentication.verifyPermission(roleName);
            console.log("res : ", resp.status === 200 ? <Dashboard/> : <Authentication/>)
            return resp.status === 200
        } catch (e) {
            return false
        }
    };

    let [isSuperAdmin, setIsSuperAdmin] = React.useState(false);

    useEffect(() => {
        verifyRole("ROLE_SUPER_ADMIN").then( resp => {
            setIsSuperAdmin(resp)
        })
    }, []);


    return (
        <Provider store={store}>
            <Router>
                <Route exact path="/" component={App}/>
                <Route exact path="/:uuid/management" component={Management}/>
                <Route exact path="/authentication" render={() => {
                    return (<Authentication/>)
                }}/>
                <Route exact path="/map" component={MapHome}/>
                <Route exact path="/produits" component={Products}/>
                <Route exact path="/dashboard" render={ props => {
                    if (!isSuperAdmin) {
                        return <Redirect to={"/authentication"}/>
                    } else {
                        return <Dashboard/>
                    }
                }}/>
            </Router>
        </Provider>
    )
};

Root.propTypes = {
    store: PropTypes.object.isRequired
};
