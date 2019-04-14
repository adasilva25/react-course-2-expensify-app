import uuid from 'uuid';
import database from '../firebase/firebase';

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
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt }

    return database.ref('expenses').push(expense).then((ref) => { // saves data in the database
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
  
  // EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});