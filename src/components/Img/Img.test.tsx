import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Img } from './Img';

test('renders the image with alt text', () => {
  render(<Img src="test.jpg" alt="Test Image" />);
  expect(screen.getByAltText('Test Image')).toBeInTheDocument();
});

test('applies greyed-out style when disabled', () => {
  render(<Img src="test.jpg" alt="Test Image" disabled />);
  const img = screen.getByAltText('Test Image');
  expect(img).toHaveStyle('opacity: 0.5');
});
