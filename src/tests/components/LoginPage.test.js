import React from 'react';
import {LoginPage} from '../../components/LoginPage';
import {shallow} from 'enzyme';

let startLogin;

beforeEach(() => {
    startLogin = jest.fn();
})

test('should correctly render LoginPage', () => {
    const wrapper = shallow(<LoginPage/>);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
    const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
})