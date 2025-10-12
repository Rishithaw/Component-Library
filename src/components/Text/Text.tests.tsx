import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Text } from './Text';

test('renders Text with content', () => {
  render(<Text content="Hello World" />);
  expect(screen.getByText('Hello World')).toBeInTheDocument();
});

test('Text has grey color when disabled', () => {
  render(<Text content="Disabled Text" disabled />);
  const textElement = screen.getByText('Disabled Text');
  expect(textElement).toHaveStyle('color: #aaa');
});
