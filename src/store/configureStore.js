// redux developer tools extension https://github.com/zalmoxisus/redux-devtools-extension
import { createStore, combineReducers } from 'redux'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

export default () => {
    // Store creation
    const store = createStore(
        combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
        }),
        // https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store
}