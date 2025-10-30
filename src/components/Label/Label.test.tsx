import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Label } from './Label';

test('renders Label with text', () => {
  render(<Label text="Username" />);
  expect(screen.getByText('Username')).toBeInTheDocument();
});

test('Label has grey color when disabled', () => {
  render(<Label text="Username" disabled />);
  const label = screen.getByText('Username');
  expect(label).toHaveStyle('color: #999');
});
