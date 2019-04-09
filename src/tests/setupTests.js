// https://airbnb.io/enzyme/
// https://jestjs.io/

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
})