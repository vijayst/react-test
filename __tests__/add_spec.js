import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Add from '../src/client/components/add.jsx';

describe('Add', () => {
  let add;
  let onAdd;

  beforeEach(() => {
    onAdd = jest.fn();
    add = TestUtils.renderIntoDocument(<Add onAdd={onAdd} />);
  });

  it('Add requires onAdd prop', () => {
    expect(add.props.onAdd).toBeDefined();
  });

  it('Add renders button', () => {
    const button = TestUtils.findRenderedDOMComponentWithTag(add, 'button');
    expect(button).toBeDefined();
  });

  it('Button click calls onAdd', () => {
    const button = TestUtils.findRenderedDOMComponentWithTag(add, 'button');
    const input = TestUtils.findRenderedDOMComponentWithTag(add, 'input');
    input.value = 'Name 4';
    TestUtils.Simulate.change(input);
    TestUtils.Simulate.click(button);
    expect(onAdd).toBeCalledWith(input.value);
  });

});
