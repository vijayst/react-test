import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Add from '../src/client/components/add.jsx';
import App from '../src/client/components/app.jsx';
import List from '../src/client/components/list.jsx';

describe('App', () => {
  let renderer;
  let app;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    renderer.render(<App />);
    app = renderer.getRenderOutput();
  });

  it('Add renders nested components', () => {
    const { children } = app.props;
    expect(children.length).toEqual(2);
    expect(TestUtils.isElementOfType(children[0], Add)).toBe(true);
    expect(TestUtils.isElementOfType(children[1], List)).toBe(true);
  });

  it('onAdd updates List', () => {
    const { children } = app.props;
    children[0].props.onAdd('Name 1');
    const newApp = renderer.getRenderOutput();
    const list = newApp.props.children[1].props.data;
    expect(list.length).toEqual(1);
    expect(list[0]).toEqual('Name 1');
  });

});
