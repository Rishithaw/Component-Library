import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Card';

test('renders Card with title and content', () => {
  render(<Card title="Test Card" content="Card content here" />);
  expect(screen.getByText('Test Card')).toBeInTheDocument();
  expect(screen.getByText('Card content here')).toBeInTheDocument();
});

test('renders disabled Card with grey background', () => {
  render(<Card title="Disabled" content="Not active" disabled />);
  const card = screen.getByRole('region', { name: /Disabled/i });
  const styles = getComputedStyle(card);
  expect(styles.backgroundColor).toBe('rgb(245, 245, 245)');
});
