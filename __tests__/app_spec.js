import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
// import App from '../src/client/app.jsx';

const App = (props) => (
  <div>Hello world</div>
);

it('App renders hello world', () => {
  const app1 = TestUtils.renderIntoDocument(<App />);
  const appNode = ReactDOM.findDOMNode(app1);
  console.log(app1, appNode);
  expect(appNode.textContent).toEqual('Hello world');
});
