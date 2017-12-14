import React from 'react';
import { shallow, configure } from 'enzyme';
import Login from '../../../app/pages/login';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Login Page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });
});
