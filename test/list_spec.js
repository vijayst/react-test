import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import List from '../src/client/components/list.jsx';

describe('List', () => {
  let welcome;

  before(() => {
    welcome = shallow(<List data={['Name 1', 'Name 2', 'Name 3']} />);
  });

  it('List renders table', () => {
    expect(welcome.find('table').length).toEqual(1);
  });

  it('Class of rendered table', () => {
    expect(welcome.find('table').hasClass('myClass')).toEqual(true);
    expect(welcome.find('.myClass').length).toEqual(1);
  });

  it('List renders column', () => {
    const arr = welcome.find('th');
    expect(arr.length).toEqual(1);
    expect(arr.first().text()).toEqual('Name');
  });

  it('List renders data', () => {
    const arr = welcome.find('td');
    expect(arr.length).toEqual(3);
    expect(arr.at(1).text()).toEqual('Name 2');
  });
});
