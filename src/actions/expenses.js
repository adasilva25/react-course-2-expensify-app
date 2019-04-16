import uuid from 'uuid';
import database from '../firebase/firebase';
import expenses from '../tests/fixtures/expenses';

// ADD_EXPENSE
export const addExpense = /*({
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = {}
) =>*/ (expense) => ({
    type: 'ADD_EXPENSE',
    expense
    /*expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }*/
});
  
export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt }

    return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => { // saves data in the database
      dispatch(addExpense({ // saves data in the store
        id: ref.key, // the key of what i'm pushing
        ...expense
      }))
    });
  }
}

  // REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({  // takes an object
    type: 'REMOVE_EXPENSE',
    id
});
  
export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }));
    });
  };
};

  // EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update({
      ...updates
    }).then(() => {
      dispatch(editExpense(id, updates));
    })
  };
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

// export const startSetExpenses 
export const startSetExpenses = () => { // WTF
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`)
    .once('value')
    .then((snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            })
        });
        dispatch(setExpenses(expenses));
    })
  }
}