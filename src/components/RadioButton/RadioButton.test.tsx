import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioButton } from './RadioButton';

test('renders RadioButton with label', () => {
  render(<RadioButton label="Test Option" name="test" value="1" />);
  expect(screen.getByText('Test Option')).toBeInTheDocument();
});

test('RadioButton is disabled when disabled prop is true', () => {
  render(
    <RadioButton label="Disabled Option" name="test" value="2" disabled />,
  );
  const radio = screen.getByRole('radio');
  expect(radio).toBeDisabled();
});
