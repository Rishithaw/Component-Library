import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import {Button} from './Button';

test('renders Button with label', () => {
  render(<Button label="Test Button" />);
  expect(screen.getByText('Test Button')).toBeInTheDocument();
});

test('Button has grey background when disabled', () => {
  render(<Button label="Click Me" disabled />);
  const button = screen.getByText('Click Me');
  expect(button).toHaveStyle('background-color: #ccc');
});