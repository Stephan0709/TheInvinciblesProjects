import React from 'react'; //  Add this line
import { render, screen } from '@testing-library/react';
import HelloWorld from '../HelloWorld';

test('renders Hello, World!', () => {
  render(<HelloWorld />);
  const element = screen.getByText(/hello, world!/i);
  expect(element).toBeInTheDocument();
});
