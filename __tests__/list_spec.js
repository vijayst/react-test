import React from 'react';
import TestUtils from 'react-addons-test-utils';
import List from '../src/client/components/list.jsx';

describe('List', () => {
  let list;

  beforeEach(() => {
    list = TestUtils.renderIntoDocument(<List data={['Name 1', 'Name 2', 'Name 3']} />);
  });

  it('List renders table', () => {
    const tableNode = TestUtils.findRenderedDOMComponentWithTag(list, 'table');
    expect(tableNode).toBeDefined();
  });

  it('List renders column name', () => {
    const array = TestUtils.scryRenderedDOMComponentsWithTag(list, 'th');
    expect(array.length).toEqual(1);
    expect(array[0].textContent).toEqual('Name');
  });

  it('List renders data', () => {
    const array = TestUtils.scryRenderedDOMComponentsWithTag(list, 'td');
    expect(array.length).toEqual(3);
    expect(array[0].textContent).toEqual('Name 1');
  });

});
