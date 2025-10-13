import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dropdown } from './Dropdown';

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
];

test('renders Dropdown with options', () => {
  render(<Dropdown options={options} />);
  expect(screen.getByText('Option 1')).toBeInTheDocument();
  expect(screen.getByText('Option 2')).toBeInTheDocument();
});

test('Dropdown is disabled when disabled prop is true', () => {
  render(<Dropdown options={options} disabled />);
  const select = screen.getByRole('combobox');
  expect(select).toBeDisabled();
});
