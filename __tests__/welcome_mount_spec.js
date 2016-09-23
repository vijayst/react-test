import React from 'react';
import { mount } from 'enzyme';
import Welcome from '../src/client/components/welcome.jsx';

describe('Welcome', () => {
  it('Welcome renders hello world', () => {
    const welcome = mount(<Welcome />);
    expect(welcome.find('div').text()).toEqual('Hello world');
  });
});
