import { render, screen } from '@testing-library/react';
import App from './App';

test('Checa texto de buracos', () => {
  render(<App />);
  const linkElement = screen.getByText(/total de buracos no texto/i);
  expect(linkElement).toBeInTheDocument();
});
