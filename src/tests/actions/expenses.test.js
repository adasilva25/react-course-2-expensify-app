import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, editExpense, removeExpense, startAddExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

// We can't compare objects, we need to compare properties
// Objects and arrays --> .toEqual

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {note: 'New note value'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New note value'
        }
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore({}); // default value to mock store
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({ // checking if the action was correctly dispatched to the store
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        // database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
        //     expect(snapshot.val()).toEqual(expenseData);
        //     done();
        // }) --> is the same thing written above
        
        return database.ref(`expenses/${actions[0].expense.id}`).once('value') // returns a promise
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    })
})

test('should add expense with default to database and store', (done) => {
    const store = createMockStore({}); // default value to mock store
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({ // checking if the action was correctly dispatched to the store
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });
        // database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
        //     expect(snapshot.val()).toEqual(expenseDefaults);
        //     done();
        // }) --> is the same thing written above

        return database.ref(`expenses/${actions[0].expense.id}`).once('value') // returns a promise
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    })
})

test('should setup the add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});

// test('should setup add expense action object with default values', () => {
//     const expenseData = {}
//     const action = addExpense(expenseData)
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0,
//             id: expect.any(String)
//         }
//     })
// })

// expect.any(constructor) --> let us assert by the type





