import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import Add from '../src/client/components/add.jsx';

describe('Add', () => {
  let add;
  let onAdd;

  before(() => {
    onAdd = expect.createSpy();
    add = mount(<Add onAdd={onAdd} />);
  });

  it('Add requires onAdd prop', () => {
    expect(add.props().onAdd).toExist();
  });

  it('Add renders button', () => {
    const button = add.find('button').first();
    expect(button).toExist();
  });

  it('Button click calls onAdd', () => {
    const button = add.find('button').first();
    const input = add.find('input').first();
    // Does not let me change the value of input.
    // Instead pass the value to eventargs.
    input.simulate('change', { target: { value: 'Name 4' } });
    button.simulate('click');
    expect(onAdd).toHaveBeenCalledWith('Name 4');
  });

});
