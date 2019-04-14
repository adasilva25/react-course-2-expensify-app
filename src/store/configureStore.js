// redux developer tools extension https://github.com/zalmoxisus/redux-devtools-extension
import { createStore, combineReducers, applyMiddleware } from 'redux'
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

export default () => {
    // Store creation
    const store = createStore(
        combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
        }),
        composeEnhacers(applyMiddleware(thunk))
        // https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store
};