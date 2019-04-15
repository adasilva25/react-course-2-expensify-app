import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({ 
    isAuthenticated, 
    component: Component,
    ...rest // rest has all the things we didn't destructured
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header/>
                <Component {...props}/>
            </div>
        ) : (
            <Redirect to="/"/>
        )
    )}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid // change the string value to a boolean
});

export default connect(mapStateToProps)(PrivateRoute);