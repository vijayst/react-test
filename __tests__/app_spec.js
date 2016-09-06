import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../src/client/app.jsx';

it('App renders hello world', () => {
  const app = TestUtils.renderIntoDocument(<div><App /></div>);
  const appNode = ReactDOM.findDOMNode(app);
  expect(appNode.textContent).toEqual('Hello world');
});
