import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroImage } from './HeroImage';

test('renders HeroImage with title', () => {
  render(
    <HeroImage
      backgroundImage="test.jpg"
      title="Hello World"
      subtitle="Subtext"
    />
  );
  expect(screen.getByText('Hello World')).toBeInTheDocument();
});

test('HeroImage is dimmed when disabled', () => {
  const { container } = render(
    <HeroImage
      backgroundImage="test.jpg"
      title="Hello World"
      disabled={true}
    />
  );
  expect(container.firstChild).toHaveStyle('opacity: 0.5');
});
