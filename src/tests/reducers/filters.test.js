import moment from 'moment';
import filtersReducer from '../../reducers/filters';

// @@INIT used internally we are never gonna return a response

// General case
test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'    // we want to change the value for sortBy
    }
    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = { 
        type: 'SET_TEXT_FILTER',
        text: 'e'
    }
    const state = filtersReducer(currentState, action)
    expect(state.text).toBe('e')
})

test('should set startDate filter', () => {
    const currentState = {
        text: '',
        startDate: moment(0),
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = { 
        type: 'SET_START_DATE',
        startDate: moment(0).add(4, 'days')
    }
    const state = filtersReducer(currentState, action)
    expect(state).toEqual({
        text: '',
        startDate: moment(0).add(4, 'days'),
        endDate: undefined,
        sortBy: 'amount'
    })
})

test('should set endDate filter', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: moment(0),
        sortBy: 'amount'
    }
    const action = { 
        type: 'SET_END_DATE',
        endDate: moment(0).add(4, 'days')
    }
    const state = filtersReducer(currentState, action)
    expect(state).toEqual({
        text: '',
        endDate: moment(0).add(4, 'days'),
        startDate: undefined,
        sortBy: 'amount'
    })
})


