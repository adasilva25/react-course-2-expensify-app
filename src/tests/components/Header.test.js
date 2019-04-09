import React from 'react';
import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

// react-test-renderer
// shallow rendering and full dom rendering

test('should render Header correctly', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();

    
    // expect(toJSON(wrapper)).toMatchSnapshot();
    // expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('h1').length).toBe(1)

    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
    // console.log(renderer.getRenderOutput())
})

// _snapshots_ jest directory. It's created automatically

// if we make changes to the react component, we need to press the 
// u key in the terminal to update the snapshot

// Enzyme supports v15 and v16.It's a renderer for react and it's full featured
