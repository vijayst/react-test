import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Welcome from '../src/client/components/welcome.jsx';

it('Welcome renders hello world', () => {
  const welcome = TestUtils.renderIntoDocument(<Welcome />);
  const welcomeNode = ReactDOM.findDOMNode(welcome);
  expect(welcomeNode.textContent).toEqual('Hello world');
});
