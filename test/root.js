import { jsdom } from 'jsdom';

before(() => {
  global.document = jsdom('');
  global.window = document.defaultView;
});
