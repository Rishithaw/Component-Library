import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroImage } from './HeroImage';

test('renders HeroImage with title', () => {
  render(
    <HeroImage
      backgroundImage="test.jpg"
      title="Hello World"
      subtitle="Subtext"
    />,
  );
  expect(screen.getByText('Hello World')).toBeInTheDocument();
  expect(screen.getByText('Subtext')).toBeInTheDocument();
});

test('HeroImage is dimmed when disabled', () => {
  render(
    <HeroImage
      backgroundImage="test.jpg"
      title="Hello World"
      disabled={true}
    />,
  );
  const hero = screen.getByRole('banner', { name: /Hello World/i });
  expect(hero).toHaveStyle({ opacity: 0.5 });
});
