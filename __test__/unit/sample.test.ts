let fs = require('fs');
import Sample from '../../src/index';

test('sample version to be 1', () => {
  let sample = new Sample();
  expect(sample.getVersion()).toBe(1);
});

test('h1 textContent is hello', () => {
  document.body.innerHTML = '<h1>hello <span>jest</span></h1>';

  let text = document.querySelector('h1').textContent;
  expect(text).toBe('hello jest');
});

test('import sample html', () => {
  document.body.innerHTML = fs.readFileSync(__dirname + '/sample.html').toString();

  let text = document.querySelector('h1').textContent;
  expect(text).toBe('hello jest');
});