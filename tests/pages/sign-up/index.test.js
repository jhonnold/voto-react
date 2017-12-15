import React from 'react';
import { shallow, configure } from 'enzyme';
import { Signup } from '../../../app/pages/sign-up';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Login Page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Signup />);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });
});
