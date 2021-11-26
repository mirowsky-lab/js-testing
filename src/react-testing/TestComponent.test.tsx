import React from 'react';
import ReactDOM from 'react-dom';
import { TestComponent } from './TestComponent';
import type { TestComponentProps } from './TestComponent';

test('renders a number input with a label "Favorite Number"', () => {
  const div = document.createElement('div');

  ReactDOM.render(<TestComponent />, div);

  expect(div.querySelector('input')?.type).toBe('number');
  expect(div.querySelector('label')?.textContent).toBe('Favorite Number');
});
