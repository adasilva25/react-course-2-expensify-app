import authReducer from '../../reducers/auth';
import { login, logout } from '../../actions/auth';

test('should generate login action object', () => {
    const uid = '123abc';
    const action = login(uid)
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should generate logout action object', () => {
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    });
})


// ERROR ----> VA PARA LAS PRUEBAS DE AUTH EN REDUCERS
// test('should set uid for login', () => {
//     const uid = '123abc';
//     const action = {
//         type: 'LOGIN',
//         uid
//     };
//     const state = authReducer({}, action);
//     expect(state).toEqual({ uid })
// });

// test('should clear uid for logout', () => {
//     const action = {
//         type: 'LOGOUT'
//     };
//     const state = authReducer({ uid: '123abc' }, action);
//     expect(state).toEqual({})
// });