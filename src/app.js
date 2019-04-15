// https://reacttraining.com/react-router/web/guides/quick-start
// https://github.com/reduxjs/react-redux
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import {firebase} from './firebase/firebase';

const store = configureStore()

// store.dispatch(addExpense({description: 'Water bill', amount: 4500}))
// store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}))
// store.dispatch(addExpense({description: 'Rent', amount: 109500}))
// store.dispatch(setTextFilter('water'))

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'))
// }, 3000)

// const state = store.getState()
// console.log(getVisibleExpenses(state.expenses, state.filters))

const jsx = ( // the variable store is the variable store used above
    <Provider store={store}>    
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!(hasRendered)){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // console.log('uid', user.uid);
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });
        // console.log('login');
    }
    else {
        // console.log('logout');
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
})